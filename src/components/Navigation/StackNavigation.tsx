import {observer} from 'mobx-react-lite';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PublicRoutes} from '../../app/navigation/routes';
import {PublicNavigationParamList} from '../../app/navigation/types';
import {useAuthStore} from '../../app/stores';
import {DrawerNavigation} from './DrawerNavigation';

const Stack = createNativeStackNavigator<PublicNavigationParamList>();

export const StackNavigation = observer(() => {
  const {user} = useAuthStore();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      {user == null ? (
        PublicRoutes.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))
      ) : (
        <Stack.Screen name="Home" component={DrawerNavigation} />
      )}
    </Stack.Navigator>
  );
});

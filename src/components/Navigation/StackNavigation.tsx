import * as SecureStore from 'expo-secure-store';
import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PublicRoutes} from '../../app/navigation/routes';
import {PublicNavigationParamList} from '../../app/navigation/types';
import {DrawerNavigation} from './DrawerNavigation';

const Stack = createNativeStackNavigator<PublicNavigationParamList>();

export const StackNavigation = () => {
  //TODO use mobx
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO Move to validateUser function
    // SecureStore.getItemAsync('user').then((item) => {
    //   setUser(item);
    // });
  }, []);
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
};

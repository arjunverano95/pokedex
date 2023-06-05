import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {PrivateRoutes} from '../../../app/navigation/routes';
import {PrivateNavigationParamList} from '../../../app/navigation/types';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator<PrivateNavigationParamList>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {PrivateRoutes.map((item) => (
        <Drawer.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

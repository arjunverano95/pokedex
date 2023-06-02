import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createTheme, ThemeProvider} from '@rneui/themed';

import {Colors, LightColors} from './src/app/constants';
import {DrawerNavigation} from './src/components/Navigation';
import RequireInternet from './src/components/RequireInternet';
import Wrapper from './src/components/Wrapper';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar translucent={false}></StatusBar>
      <SafeAreaProvider>
        <>
          <DrawerNavigation />
          <RequireInternet />
        </>
      </SafeAreaProvider>
    </>
  );
};
export default App;

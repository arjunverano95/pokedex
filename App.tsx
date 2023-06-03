import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createTheme, ThemeProvider} from '@rneui/themed';

import {Colors, LightColors} from './src/app/constants';
import {useAuthStore} from './src/app/stores';
import {StackNavigation} from './src/components/Navigation';
import RequireInternet from './src/components/RequireInternet';

const theme = createTheme({
  lightColors: LightColors,
  mode: 'light',
  components: {
    Header: {
      backgroundColor: Colors.headerBg,
    },
    Icon: {
      color: Colors.black,
      type: 'material-community',
    },
    Overlay: {
      overlayStyle: {
        backgroundColor: Colors.background,
      },
    },
  },
});
const App = () => {
  LogBox.ignoreAllLogs();
  const {validateUser} = useAuthStore();

  useEffect(() => {
    validateUser();
  }, []);
  return (
    <>
      <StatusBar
        backgroundColor={Colors.headerBg}
        translucent={false}
      ></StatusBar>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
          <RequireInternet />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};
export default App;

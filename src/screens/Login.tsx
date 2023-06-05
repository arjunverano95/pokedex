import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';

import {Button, Icon, Input, Text} from '@rneui/themed';

import {Colors, Icons} from '../app/constants';
import {useAuthStore} from '../app/hooks';

const Login = observer(() => {
  const {login, loading} = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setShowPassword(false);
    const user = await login(username, password);
    if (!user) setShowErrorMsg(true);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image
            style={styles.loginCoverImage}
            source={require('../../assets/pikachu-running.gif')}
            resizeMode={'contain'}
          />
          <Text h4>{'Login'}</Text>
          <View style={styles.formContainer}>
            <Input
              placeholder="Username"
              textContentType="username"
              onChangeText={(value) => {
                setUsername(value);
              }}
              value={username}
            ></Input>
            <Input
              placeholder="Password"
              textContentType="password"
              secureTextEntry={!showPassword}
              rightIcon={
                <Icon
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                  name={showPassword ? Icons.show : Icons.hide}
                  color={Colors.black}
                />
              }
              onChangeText={(value) => {
                setPassword(value);
              }}
              value={password}
            ></Input>
            <Button
              onPress={() => {
                handleLogin();
              }}
            >
              {loading ? <ActivityIndicator /> : 'Login'}
            </Button>
          </View>
          {showErrorMsg && (
            <Text style={styles.error}>{'Invalid username or password.'}</Text>
          )}
        </View>
      </View>
    </>
  );
});

export default Login;
const styles = StyleSheet.create({
  loginContainer: {justifyContent: 'center', alignItems: 'center'},
  loginCoverImage: {width: 200, height: 250},
  formContainer: {width: '100%', marginTop: 25},
  container: {flex: 1, padding: 25},
  error: {color: 'red', marginTop: 10},
});

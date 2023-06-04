import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Button, Icon, Input, Text} from '@rneui/themed';

import {Colors, Icons} from '../app/constants';
import {useAuthStore} from '../app/stores';

const Login = () => {
  const {login} = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
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
            <Input placeholder="Username" textContentType="username"></Input>
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
            ></Input>
            <Button
              onPress={() => {
                login('spectrum1user', '12345');
              }}
            >
              {'Login'}
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  loginContainer: {justifyContent: 'center', alignItems: 'center'},
  loginCoverImage: {width: 200, height: 250},
  formContainer: {width: '100%', marginTop: 25},
  container: {flex: 1, padding: 25},
});

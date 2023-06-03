import React from 'react';

import {Text} from '@rneui/themed';

import {PublicScreenProps} from '../app/navigation/types';

const Login = (props: PublicScreenProps<'Login'>) => {
  const {navigation} = props;

  return (
    <>
      <Text>{'Login'}</Text>
    </>
  );
};

export default Login;

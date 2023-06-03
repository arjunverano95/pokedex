import React from 'react';

import {Button} from '@rneui/themed';

import {PublicScreenProps} from '../app/navigation/types';
import {useAuthStore} from '../app/stores';

const Login = (props: PublicScreenProps<'Login'>) => {
  const {navigation} = props;

  const {login} = useAuthStore();
  return (
    <>
      <Button
        onPress={() => {
          login('spectrum1user', '12345');
        }}
      >
        {'Login'}
      </Button>
    </>
  );
};

export default Login;

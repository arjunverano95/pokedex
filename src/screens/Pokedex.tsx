import React from 'react';

import {PrivateScreenProps} from '../app/navigation/types';
import {Gallery} from '../components/Gallery';
import Header from '../components/Header';

const Pokedex = (props: PrivateScreenProps<'Pokedex'>) => {
  const {navigation} = props;

  return (
    <>
      <Header title="Pokedex" navigation={navigation} />
      <Gallery />
    </>
  );
};

export default Pokedex;

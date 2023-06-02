import React from 'react';

import {ScreenProps} from '../app/navigation/types';
import {Gallery} from '../components/Gallery';
import Header from '../components/Header';

const Pokedex = (props: ScreenProps<'Pokedex'>) => {
  const {navigation} = props;

  return (
    <>
      <Header title="Pokedex" navigation={navigation} />
      <Gallery />
    </>
  );
};

export default Pokedex;

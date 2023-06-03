import Pokedex from '../../../screens/Pokedex';
import {PrivateNavigationParamList, PrivateScreenProps} from '../types';

interface PrivateRoutes {
  name: keyof PrivateNavigationParamList;
  label: string;
  icon: number;
  component: (
    props: PrivateScreenProps<keyof PrivateNavigationParamList>,
  ) => JSX.Element;
}

export const PrivateRoutes: PrivateRoutes[] = [
  {
    name: 'Pokedex',
    label: 'Pokedex',
    icon: require('../../../../assets/pokeball.png'),
    component: Pokedex,
  },
];
// export const initialRoute: keyof PrivateNavigationParamList = 'Pokedex';

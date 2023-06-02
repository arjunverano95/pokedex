import Pokedex from '../../../screens/Pokedex';
import {NavigationParamList, ScreenProps} from '../types';

interface Routes {
  name: keyof NavigationParamList;
  label: string;
  icon: number;
  component: (props: ScreenProps<keyof NavigationParamList>) => JSX.Element;
}

const Routes: Routes[] = [
  {
    name: 'Pokedex',
    label: 'Pokedex',
    icon: require('../../../../assets/pokeball.png'),
    component: Pokedex,
  },
];
export const initialRoute: keyof NavigationParamList = 'Pokedex';
export default Routes;

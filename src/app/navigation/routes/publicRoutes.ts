import Login from '../../../screens/Login';
import {PublicNavigationParamList, PublicScreenProps} from '../types';

interface PublicRoutes {
  name: keyof PublicNavigationParamList;
  component: (
    props: PublicScreenProps<keyof PublicNavigationParamList>,
  ) => JSX.Element;
}

export const PublicRoutes: PublicRoutes[] = [
  {
    name: 'Login',
    component: Login,
  },
];
// export const initialRoute: keyof PublicNavigationParamList = 'Login';

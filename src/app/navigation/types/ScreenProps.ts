import {DrawerScreenProps} from '@react-navigation/drawer';

import {
  PrivateNavigationParamList,
  PublicNavigationParamList,
} from './NavigationParamList';

export type PrivateScreenProps<
  Screen extends keyof PrivateNavigationParamList,
> = DrawerScreenProps<PrivateNavigationParamList, Screen>;

export type PublicScreenProps<Screen extends keyof PublicNavigationParamList> =
  DrawerScreenProps<PublicNavigationParamList, Screen>;

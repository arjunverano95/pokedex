import {DrawerNavigationProp} from '@react-navigation/drawer';

import {
  PrivateNavigationParamList,
  PublicNavigationParamList,
} from './NavigationParamList';

export type PrivateNavigationProp<
  Screen extends keyof PrivateNavigationParamList,
> = DrawerNavigationProp<PrivateNavigationParamList, Screen>;

export type PublicNavigationProp<
  Screen extends keyof PublicNavigationParamList,
> = DrawerNavigationProp<PublicNavigationParamList, Screen>;

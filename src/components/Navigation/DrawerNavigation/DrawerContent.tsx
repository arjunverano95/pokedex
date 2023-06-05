import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';

import {Colors, Icons} from '../../../app/constants';
import {useAuthStore} from '../../../app/hooks';
import {PrivateRoutes} from '../../../app/navigation/routes';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const {logout} = useAuthStore();
  return (
    <View style={styles.container}>
      <View style={styles.drawerContentContainer}>
        <Image
          style={styles.drawerContentCoverImage}
          source={require('../../../../assets/cover.jpeg')}
        />
      </View>
      <View style={styles.container}>
        {PrivateRoutes.map((item) => (
          <DrawerItem
            key={item.name}
            icon={() => (
              <Image
                resizeMode={'contain'}
                style={styles.iconImg}
                source={item.icon}
              />
            )}
            label={item.label}
            onPress={() => {
              navigation.navigate(item.name);
            }}
          />
        ))}
        <DrawerItem
          key={'Logout'}
          icon={() => <Icon name={Icons.logout} color={Colors.black} />}
          label={'Logout'}
          onPress={() => {
            logout();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContentContainer: {
    height: 200,
    overflow: 'hidden',
    position: 'relative',
  },
  drawerContentCoverImage: {
    position: 'absolute',
    bottom: 0,
    height: 250,
    width: '100%',
  },
  container: {flex: 1},
  iconImg: {
    height: 25,
    width: 25,
  },
});
export default DrawerContent;

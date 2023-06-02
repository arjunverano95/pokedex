import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';

import Routes from '../../../app/navigation/routes';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerContentContainer}>
        <Image
          style={styles.drawerContentCoverImage}
          source={require('../../../../assets/cover.jpeg')}
        />
      </View>
      <View style={styles.routesContainer}>
        {Routes.map((item) => (
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
  routesContainer: {flex: 1},

  iconImg: {
    height: 25,
    width: 25,
  },
});
export default DrawerContent;

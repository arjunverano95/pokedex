import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, Icon} from '@rneui/themed';

import {Colors, Icons} from '../app/constants';
import {NavigationParamList, NavigationProp} from '../app/navigation/types';

interface HeaderProps {
  navigation: NavigationProp<keyof NavigationParamList>;
  title: string;
  showBackButton?: boolean;
}
const Header = (props: HeaderProps) => {
  const {navigation, title, showBackButton} = props;
  return (
    <View
      style={[
        styles.headerContainer,
        showBackButton ? {backgroundColor: Colors.transparent} : {},
      ]}
    >
      {showBackButton ? (
        <Button
          containerStyle={styles.toggleDrawerContainer}
          buttonStyle={styles.toggleDrawerButton}
          type="clear"
          onPress={async () => {
            navigation.goBack();
          }}
        >
          <Icon name={Icons.arrow_left} color={Colors.black} />
        </Button>
      ) : (
        <Button
          containerStyle={styles.toggleDrawerContainer}
          buttonStyle={styles.toggleDrawerButton}
          type="clear"
          onPress={async () => {
            navigation.openDrawer();
          }}
        >
          <Icon name={Icons.menu} color="white" />
        </Button>
      )}

      <View style={styles.headerContentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Button
          containerStyle={styles.logoutButtonContainer}
          buttonStyle={styles.headerButton}
          type="clear"
          onPress={() => {
            console.log('Logout');
          }}
        >
          <Icon name={Icons.logout} color="white" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // paddingTop: 50,
    backgroundColor: Colors.headerBg,
    flexDirection: 'row',
  },
  toggleDrawerContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  toggleDrawerButton: {
    height: 46,
  },
  headerContentContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 21,
    color: Colors.white,
  },
  logoutButtonContainer: {
    marginTop: 10,
    marginRight: 8,
  },
  headerButton: {
    height: 46,
  },
});
export default Header;

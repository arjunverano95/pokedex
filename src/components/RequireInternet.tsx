import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useNetInfo} from '@react-native-community/netinfo';
import {Button, Icon, Text} from '@rneui/themed';

import {Colors, Icons} from '../app/constants';
import Overlay from './Overlay';

const RequireInternet = () => {
  const netInfo = useNetInfo();
  const isLoading = false; // TODO Use Mobx

  return (
    <>
      <Overlay
        showClose={false}
        isVisible={isLoading || !netInfo.isConnected}
        toggleOverlay={() => {
          // console.log('toggleOverlay');
        }}
      >
        <View style={styles.container}>
          {isLoading ? (
            <Button type="clear" loading loadingProps={{size: 25}} />
          ) : (
            <>
              <Icon name={Icons.no_internet} size={50} />
              <Text h4>{'Conection Error'}</Text>
              <Text>{'Please check your network connectivity'}</Text>
              <Text>{'and try again.'}</Text>
            </>
          )}
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default RequireInternet;

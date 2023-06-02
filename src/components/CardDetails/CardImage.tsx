import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

import {Colors, PokeAPIBaseUrl} from '../../app/constants';
import {PokemonCard} from '../../models/PokemonCard';

interface CardImageProps {
  data: PokemonCard;
}

const CardImage = (props: CardImageProps) => {
  const {data} = props;

  if (data.imageUrl)
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: data.imageUrl,
          }}
          resizeMode={'contain'}
        />
      </View>
    );
  else
    return (
      <>
        <WebView
          injectedJavaScript={`document.querySelectorAll('.gsc-positioningWrapper').forEach(el=> el.style.display = 'none')`}
          style={styles.imageWebview}
          source={{
            uri: `${PokeAPIBaseUrl}/cse.html#gsc.tab=1&gsc.q=${data.name}`,
          }}
        />
      </>
    );
};
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 15,
    backgroundColor: Colors.white,
  },
  image: {
    flex: 1,
    // height: null,
    resizeMode: 'contain',
    // width: null,
  },
  imageWebview: {flex: 1, margin: 20, backgroundColor: Colors.white},
});
export default CardImage;

import React, {useState} from 'react';
import {
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {Skeleton} from '@rneui/base';

interface GalleryImageProps {
  imageUrl?: string;
  style: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const GalleryImage = (props: GalleryImageProps) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const [imageScaleValue] = useState(new Animated.Value(0));
  const onLoadEnd = () => {
    Animated.timing(imageScaleValue, {
      toValue: 1,
      duration: 150,
      delay: 5,
      useNativeDriver: true,
    }).start();
  };
  const onError = () => {
    setImageLoadFailed(true);
  };
  return (
    <View style={props.containerStyle}>
      <Animated.View style={{opacity: imageScaleValue, flex: 1}}>
        <Image
          style={props.style}
          // defaultSource={<Skeleton />}
          source={
            !props.imageUrl || imageLoadFailed
              ? require('../../../assets/no-image.png')
              : {
                  uri: props.imageUrl,
                }
          }
          resizeMode={'cover'}
          onError={onError}
          onLoadEnd={onLoadEnd}
        />
      </Animated.View>
      <Skeleton style={styles.skeleton} />
    </View>
  );
};
const styles = StyleSheet.create({
  skeleton: {
    opacity: 0.3,
    height: '100%',
    aspectRatio: 1,
    position: 'absolute',
    zIndex: -1,
    // width: '100%',
  },
});
export default GalleryImage;

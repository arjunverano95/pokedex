import React, {useRef, useState} from 'react';
import {Platform, StyleSheet, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {FlashList} from '@shopify/flash-list';

import {Colors, Sizes} from '../../app/constants';
import {usePokemon} from '../../app/hooks/usePokemon';
import {PokemonCard} from '../../models/PokemonCard';
import CardDetails from '../CardDetails';
import Overlay from '../Overlay';
import GalleryItem from './GalleryItem';

export const Gallery = () => {
  const {width} = useWindowDimensions();
  const {data: galleryData, isLoading, loadMore, refresh} = usePokemon();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const selectedCard = useRef<PokemonCard>(undefined);
  let galleryColNo = 2;

  if (width < Sizes.sm) {
    galleryColNo = 3;
  } else if (width >= Sizes.sm && width < Sizes.md) {
    galleryColNo = 5;
  } else if (width >= Sizes.md && width < Sizes.lg) {
    galleryColNo = 6;
  } else {
    galleryColNo = 9;
  }

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      <SafeAreaView style={styles.galleryContainer}>
        <FlashList
          data={galleryData}
          numColumns={galleryColNo}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
          renderItem={({item}) => (
            <GalleryItem
              data={item}
              onPress={(item) => {
                selectedCard.current = item;
                toggleOverlay();
              }}
            />
          )}
          refreshing={isLoading}
          onRefresh={() => {
            refresh();
          }}
          onEndReached={() => {
            loadMore();
          }}
        />
      </SafeAreaView>
      <Overlay isVisible={isOverlayVisible} toggleOverlay={toggleOverlay}>
        {selectedCard && <CardDetails data={selectedCard.current} />}
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    paddingBottom: Platform.select({web: 0, native: 10}),
    backgroundColor: Colors.background,
  },
});

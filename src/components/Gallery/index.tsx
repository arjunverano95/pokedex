import React, {useRef, useState} from 'react';
import {ActivityIndicator, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {FlashList} from '@shopify/flash-list';

import {Colors} from '../../app/constants';
import {usePokemon} from '../../app/hooks/usePokemon';
import {PokemonCard} from '../../models/PokemonCard';
import CardDetails from '../CardDetails';
import Overlay from '../Overlay';
import GalleryItem from './GalleryItem';

export const Gallery = () => {
  const {data: galleryData, isLoading, loadMore, refresh} = usePokemon();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const selectedCard = useRef<PokemonCard>(undefined);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      <Overlay isVisible={isOverlayVisible} toggleOverlay={toggleOverlay}>
        {selectedCard && <CardDetails data={selectedCard.current} />}
      </Overlay>
      <SafeAreaView style={styles.galleryContainer}>
        <FlashList
          data={galleryData}
          numColumns={3}
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
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            isLoading ? <ActivityIndicator size={25} /> : null
          }
        />
      </SafeAreaView>
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

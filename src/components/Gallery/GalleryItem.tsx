import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import {Badge, Card, Text} from '@rneui/themed';

import {Colors, Types} from '../../app/constants';
import {PokemonCard} from '../../models/PokemonCard';
import GalleryImage from './GalleryImage';

interface GalleryItemProps {
  data: PokemonCard;
  onPress: (value: PokemonCard) => void;
}
const GalleryItem = (props: GalleryItemProps) => {
  const {data, onPress} = props;
  return (
    <Card containerStyle={styles.cardContainer}>
      <Pressable
        onPress={() => {
          onPress(data);
        }}
      >
        <View>
          <View style={styles.rightBadgeContainer}>
            {data.types.map((type) =>
              Types[type] ? (
                <Image
                  key={type}
                  resizeMode={'contain'}
                  style={styles.iconImg}
                  source={Types[type]}
                />
              ) : (
                <Badge
                  key={type}
                  badgeStyle={styles.badge}
                  textStyle={styles.badgeText}
                  value={type.slice(0, 3)}
                  status="success"
                />
              ),
            )}
          </View>
          <GalleryImage style={styles.image} imageUrl={data.imageUrl} />
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{`${data.name}`}</Text>
            {/* <Text style={styles.cardSubTitle}></Text> */}
          </View>
          <View>
            <Text style={styles.textContent}>{data.id}</Text>
          </View>
        </View>
      </Pressable>
    </Card>
  );
};
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  cardContainer: {
    borderWidth: 0,
    shadowColor: Colors.transparent,
    // maxWidth: '50%',
    flex: 1,
    margin: 0,
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 0,
  },
  cardTitleContainer: {flexDirection: 'row'},
  rightBadgeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    flexDirection: 'row-reverse',
    width: '100%',
    padding: 3,
  },
  badge: {
    height: 20,
    minWidth: 40,
    paddingHorizontal: 1,
    marginRight: 5,
    fontSize: 9,
  },
  badgeText: {fontWeight: 'bold'}, // alignSelf: 'flex-start'}
  cardTitle: {flex: 1, textAlign: 'left', fontSize: 12},
  cardSubTitle: {textAlign: 'right', fontSize: 12, fontWeight: 'bold'},
  textContent: {fontSize: 11, color: Colors.greyOutline},
  cardFooter: {paddingHorizontal: 8, paddingVertical: 3},
  iconImg: {
    height: 25,
    width: 25,
  },
});
export default GalleryItem;

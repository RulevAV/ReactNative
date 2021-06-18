import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {w} from './Constants';
import i from '../../ava-twitch-32.jpg';
const ImageCard = ({Title}) => {
  const {h1, cover, container, sub} = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={i} />
      </View>
      <Text style={h1}>{Title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'gold',
    width: w / 2.1,
  },
  sub: {
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});
export default ImageCard;

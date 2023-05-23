import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {COLORS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

export default function MediaHeader({
  imageUrl,
  title,
  //   totalTracks,
  followers,
  releaseDate = '',
  mediaDescription = '',
  type,
}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6B6B', '#556270']}
        style={styles.linearGradient}>
        <Text>Vertical Gradient</Text>
      </LinearGradient>
      <Image resizeMode="cover" source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleText}>{releaseDate}</Text>
      {/* <Text>{totalTracks}</Text> */}
      <Text style={styles.titleText}>{followers}</Text>
      <Text style={styles.titleText}>{mediaDescription}</Text>
      <Text style={styles.titleText}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 520,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  titleText: {
    color: COLORS.white,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
    position: 'relative',
    bottom: 120,
  },
  linearGradient: {
    position: 'absolute',
  },
});

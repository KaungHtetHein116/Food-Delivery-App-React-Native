import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default function RestaurantCard({item, onTap}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image source={{uri: `${item.images[0]}`}} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: screenWidth - 30,
    height: 200,
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    color: 'grey',
  },
});

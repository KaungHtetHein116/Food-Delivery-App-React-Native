import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function CategoryCard({item, onTap}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
      <Image source={{uri: `${item.icon}`}} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 140,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    color: 'grey',
  },
});

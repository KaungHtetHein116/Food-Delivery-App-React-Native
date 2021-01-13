import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ButtonWithIcon({onTap, icon, width, height}) {
  return (
    <TouchableOpacity
      style={(styles.btn, {width, height})}
      onPress={() => onTap()}>
      <Image style={{width: width - 2, height: height - 2}} source={icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: 60,
    height: 40,
  },
});

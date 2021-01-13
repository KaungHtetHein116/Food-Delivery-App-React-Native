import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ButtonAddRemove({onAdd, unit, onRemove}) {
  if (unit > 0) {
    return (
      <View style={styles.optionsView}>
        <TouchableOpacity
          style={styles.btnPlusMinus}
          onPress={() => onRemove()}>
          <Text style={{fontSize: 18, color: 'black'}}>-</Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: 30,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center'}}>
            {unit}
          </Text>
        </View>
        <TouchableOpacity style={styles.btnPlusMinus} onPress={() => onAdd()}>
          <Text style={{fontSize: 18, color: 'black'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={styles.btn} onPress={() => onAdd()}>
        <Text style={{fontSize: 18, color: 'black', textAlign: 'center'}}>
          Add
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 80,
    height: 40,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: 'tomato',
  },
  optionsView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnPlusMinus: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderWidth: 0.5,
    height: 38,
    width: 38,
    borderRadius: 50,
  },
});

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import ButtonAddRemove from '../components/ButtonAddRemove';
import {onUpdateCart} from '../redux/actions/userActions';

function FoodCard({item, onTap, onUpdateCart}) {
  const didUpdateCart = (unit) => {
    item.unit = unit;
    onUpdateCart(item);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${item.images[0]}`}}
        style={{width: 100, height: 100, borderRadius: 20}}
      />
      <TouchableOpacity
        onPress={onTap}
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            padding: 10,
            flex: 1,
          }}>
          <Text numberOfLines={2}>{item.name}</Text>
          <Text style={{fontSize: 10}}>{item.category}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>$ {item.price}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            padding: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <ButtonAddRemove
            onAdd={() => {
              let unit = isNaN(item.unit) ? 0 : item.unit;
              didUpdateCart(unit + 1);
            }}
            onRemove={() => {
              let unit = isNaN(item.unit) ? 0 : item.unit;
              didUpdateCart(unit > 0 ? unit - 1 : unit);
            }}
            unit={item.unit}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    height: 100,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
});

export default connect(null, {onUpdateCart})(FoodCard);

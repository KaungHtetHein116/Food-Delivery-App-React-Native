import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import FoodCard from '../components/FoodCard';
import {onUpdateCart} from '../redux/actions/userActions';
import {checkExistence} from '../utils/CartHelper';

function CartScreen(props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const navigation = useNavigation();
  const {Cart} = props.userReducer;

  useEffect(() => {
    if (Array.isArray(Cart)) {
      onCalculateAmount();
    }
  }, [Cart]);

  const onCalculateAmount = () => {
    let total = 0;
    Cart.map((food) => {
      total = food.price * food.unit;
    });
    setTotalAmount(total);
  };

  const onTapFood = (item) => {
    navigation.navigate('FoodDetailScreen', {item});
  };

  if (Cart.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}></View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Cart}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <FoodCard
              onTap={() => onTapFood(item)}
              onUpdateCart={props.onUpdateCart}
              item={checkExistence(item, Cart)}
            />
          )}
        />
        <View style={styles.footer}>
          <View style={styles.amountView}>
            <Text style={{fontSize: 18}}>Total</Text>
            <Text style={{fontSize: 18}}>{totalAmount}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Your Cart is Empty
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  navigation: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'cyan',
  },
  amountView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

const mapStateToProps = (state) => ({
  shoppingReducer: state.shoppingReducer,
  userReducer: state.userReducer,
});

export default connect(mapStateToProps, {onUpdateCart})(CartScreen);

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import ButtonWithIcon from '../components/ButtonWithIcon';
import {useRoute, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import FoodCard from '../components/FoodCard';
import {checkExistence} from '../utils/CartHelper';
import {onUpdateCart} from '../redux/actions/userActions';

function FoodDetailScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const {Cart} = props.userReducer;

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <ButtonWithIcon
          icon={require('../images/back_arrow.png')}
          onTap={() => navigation.goBack()}
          width={42}
          height={60}
        />
        <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 80}}>
          {item.name}
        </Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={{uri: `${item.images[0]}`}}
          style={{
            width: Dimensions.get('screen').width,
            height: 300,
            justifyContent: 'flex-end',
          }}>
          <View style={{height: 120, backgroundColor: 'grey', padding: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: '700',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: '700',
              }}>
              {item.category}
            </Text>
          </View>
        </ImageBackground>
        <View style={{display: 'flex', height: 300, padding: 20}}>
          <Text>Food will be ready in {item.readyTime} minutes</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={{height: 120}}>
          <FoodCard
            item={checkExistence(item, Cart)}
            onTap={() => {}}
            onUpdateCart={props.onUpdateCart}
          />
        </View>
      </View>
    </View>
  );
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
  body: {},
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

const mapStateToProps = (state) => ({
  shoppingReducer: state.shoppingReducer,
  userReducer: state.userReducer,
});

export default connect(mapStateToProps, {onUpdateCart})(FoodDetailScreen);

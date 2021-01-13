import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {connect} from 'react-redux';
import {onAvaliability, onSearchFoods} from '../redux/actions';
import SearchBar from '../components/SearchBar';
import ButtonWithIcon from '../components/ButtonWithIcon';
import {useNavigation} from '@react-navigation/native';
import CategoryCard from '../components/CategoryCard';
import {FlatList} from 'react-native-gesture-handler';
import RestaurantCard from '../components/RestaurantCard';

function HomeScreen(props) {
  const navigation = useNavigation();
  const {availability} = props.shoppingReducer;
  const {categories, foods, restaurants} = availability;

  useEffect(() => {
    props.onAvaliability();
    props.onSearchFoods();
  }, []);

  const onTapRestaurant = (item) => {
    navigation.navigate('RestaurantScreen', {restaurant: item});
  };
  const onTapFood = (item) => {
    navigation.navigate('FoodDetailScreen', {item});
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <SearchBar
          didTouch={() => {
            navigation.navigate('SearchScreen');
          }}
          onTextChange={() => {}}
        />
        <ButtonWithIcon
          onTap={() => {}}
          icon={require('../images/hambar.png')}
          width={50}
          height={40}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => (
            <CategoryCard
              item={item}
              onTap={() => {
                alert('hey');
              }}
            />
          )}
        />
        <Text style={styles.text}>Top Restaurants</Text>
        <FlatList
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          renderItem={({item}) => (
            <RestaurantCard item={item} onTap={onTapRestaurant} />
          )}
        />
        <Text style={styles.text}>30 Minute Foods</Text>
        <FlatList
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foods}
          renderItem={({item}) => (
            <RestaurantCard item={item} onTap={onTapFood} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: 20,
  },
  container: {
    backgroundColor: '#ebf2ed',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

const mapStateToProps = (state) => ({
  shoppingReducer: state.shoppingReducer,
});

export default connect(mapStateToProps, {onAvaliability, onSearchFoods})(
  HomeScreen,
);

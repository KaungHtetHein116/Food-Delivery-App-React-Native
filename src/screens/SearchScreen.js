import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonWithIcon from '../components/ButtonWithIcon';
import SearchBar from '../components/SearchBar';
import {FlatList} from 'react-native-gesture-handler';
import FoodCard from '../components/FoodCard';
import {onUpdateCart} from '../redux/actions/userActions';
import {checkExistence} from '../utils/CartHelper';

function SearchScreen(props) {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [keyword, setKeyword] = useState('');

  const {availableFoods} = props.shoppingReducer;
  const {Cart} = props.userReducer;

  const onTapFood = (item) => {
    navigation.navigate('FoodDetailScreen', {item});
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <ButtonWithIcon
          icon={require('../images/back_arrow.png')}
          onTap={() => navigation.goBack()}
          width={42}
          height={60}
        />
        <SearchBar
          onTextChange={setKeyword}
          onEndEditing={() => setIsEditing(false)}
          didTouch={() => setIsEditing(true)}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={
          isEditing
            ? availableFoods.filter((item) => {
                return item.name.includes(keyword);
              })
            : availableFoods
        }
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <FoodCard
            onTap={() => onTapFood(item)}
            onUpdateCart={props.onUpdateCart}
            item={checkExistence(item, Cart)}
          />
        )}
      />
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
});

const mapStateToProps = (state) => ({
  shoppingReducer: state.shoppingReducer,
  userReducer: state.userReducer,
});

export default connect(mapStateToProps, {onUpdateCart})(SearchScreen);

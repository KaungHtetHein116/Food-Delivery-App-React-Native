import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import CartScreen from './src/screens/CartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused
              ? require('./src/images/home_icon.png')
              : require('./src/images/home_n_icon.png');
          } else if (route.name === 'Offer') {
            iconName = focused
              ? require('./src/images/offer_icon.png')
              : require('./src/images/offer_n_icon.png');
          } else if (route.name === 'CartScreen') {
            iconName = focused
              ? require('./src/images/cart_icon.png')
              : require('./src/images/cart_n_icon.png');
          } else if (route.name === 'Account') {
            iconName = focused
              ? require('./src/images/account_icon.png')
              : require('./src/images/account_n_icon.png');
          }
          return <Image source={iconName} style={styles.tabIcon} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Offer" component={HomeScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="Account" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});

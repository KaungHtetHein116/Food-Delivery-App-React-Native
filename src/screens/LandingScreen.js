import React, {useState, useReducer, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState(1);
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      console.log(info.coords.longitude, info.coords.latitude);
      setAddress(info.coords.latitude, info.coords.longitude);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('HomeScreen')} title="go" />
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image
          source={require('../images/delivery_icon.png')}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}> {address}</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,242,242,1)',
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7D7D7D',
  },
  addressText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#4F4F4F',
  },

  footer: {
    flex: 1,
  },
});

export default LandingScreen;

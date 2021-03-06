import React from 'react';
import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function ShoppingCartIcon(props) {
  Ionicons.loadFont();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{ marginRight: 10 }}
    >
      <Ionicons name="ios-cart" size={32} color="#101010" />
    </TouchableOpacity>
  )
}


export default ShoppingCartIcon;
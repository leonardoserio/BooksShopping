import React from 'react';
import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/FontAwesome'

function ShoppingCartIcon(props) {
  return (
    <TouchableOpacity
      onPress={() => alert('Press me')}
      style={{ maginRight: 10 }}
    >
      <Ionicons name="ios-cart" size={32} color="#101010" />
    </TouchableOpacity>
  )
}
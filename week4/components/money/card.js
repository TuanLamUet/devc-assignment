import React from 'react';
import {View, Image, Text} from 'react-native';

const Card = ({type, price, color}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 7,
        paddingVertical: 12,
        paddingHorizontal: 15,
      }}>
      <Text style={{color: '#fff', fontSize: 12, marginBottom: 8}}>{type}</Text>
      <Text style={{color: '#fff', fontSize: 18}}>{price}</Text>
    </View>
  );
};

export default Card;

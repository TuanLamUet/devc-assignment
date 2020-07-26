import React from 'react';
import {View, Image, Text} from 'react-native';

import Card from './card';
const ListAccount = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>List of Account</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        <Card type="Bank account" price="$2500.00" color="#E437BC" />
        <Card type="Credit Card" price="$1500.00" color="#EFA75A" />
        <Card type="Cash" price="$800.00" color="#23E3D6" />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 7,
        }}>
        <Text style={{color: '#FF958F', fontSize: 24}}>$4800.00</Text>
        <Text style={{color: '#A6B1C0', fontSize: 18}}>Total Balance</Text>
      </View>
    </View>
  );
};

export default ListAccount;

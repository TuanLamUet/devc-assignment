import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import Helper from '../helper/index';

const WrapButton = ({choose, setChoose, computer, setComputer}) => {
  const handleOnPress = (type) => {
    setComputer(Math.floor(Math.random() * 3) + 1);
    setChoose(type);
  };

  const Button = (type) => {
    return (
      <TouchableOpacity
        onPress={() => {
          return handleOnPress(type);
        }}
        style={{
          width: 200,
          backgroundColor: '#640D14',
          marginBottom: 5,
          marginTop: 5,
          padding: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          {Helper.getName(type)}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      {Button(1)}
      {Button(2)}
      {Button(3)}
    </View>
  );
};

export default WrapButton;

import React from 'react';
import {View, Image, Text} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
      }}>
      <Image
        source={require('../assets/Icons/menu.png')}
        style={{height: 20, width: 30}}
      />
      <Text style={{fontSize: 20}}>Dashboard</Text>
      <Image
        source={require('../assets/Icons/notify.png')}
        style={{width: 25, height: 25}}
      />
    </View>
  );
};

export default Header;

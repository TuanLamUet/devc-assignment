import React from 'react';
import {Text, View} from 'react-native';

const Header = ({choose, computer}) => {
  return (
    <View style={{marginVertical: 30}}>
      {((choose === 1 && computer === 3) ||
        (choose === 2 && computer === 1) ||
        (choose === 3 && computer === 2)) && (
        <Text
          style={{
            color: 'green',
            fontWeight: '700',
            fontSize: 24,
            textAlign: 'center',
          }}>
          {' '}
          Victory
        </Text>
      )}
      {((choose === 1 && computer === 2) ||
        (choose === 2 && computer === 3) ||
        (choose === 3 && computer === 1)) && (
        <Text
          style={{
            color: 'red',
            fontWeight: '700',
            fontSize: 24,
            textAlign: 'center',
          }}>
          {' '}
          Defat
        </Text>
      )}
      {choose === computer && choose !== 0 && (
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 22,
          }}>
          Tie game
        </Text>
      )}
      {choose === 0 && computer === 0 && (
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 22,
          }}>
          Choose your weaspon
        </Text>
      )}
    </View>
  );
};

export default Header;

import React from 'react';
import {View, Text, Image} from 'react-native';
import Helper from '../helper';

const Body = ({choose, computer}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 300,
        borderWidth: 1,
        borderColor: '#c1c1c1',
        marginBottom: 30,
        marginHorizontal: 5,
      }}>
      <Element type={choose} name="Player" />
      <Text>vs</Text>
      <Element type={computer} name="Computer" />
    </View>
  );
};

const Element = ({type, name}) => {
  return (
    <View>
      <Text style={{fontWeight: '700', textAlign: 'center', fontSize: 22}}>
        {name}
      </Text>
      <Image
        style={{width: 100, height: 100}}
        source={{uri: Helper.getUrl(type)}}
      />
      <Text style={{textAlign: 'center'}}>{Helper.getName(type)}</Text>
    </View>
  );
};

export default Body;

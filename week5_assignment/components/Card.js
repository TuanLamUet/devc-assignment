import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import moment from 'moment';

const ICard = ({item}) => {
  return (
    <>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#e8e8e8',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            fontWeight: '700',
            paddingVertical: 10,
          }}>
          {item.title}
        </Text>
        <Image
          style={{width: '100%', height: 150}}
          source={{uri: item.urlToImage}}
        />
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              paddingHorizontal: 10,
            }}>
            Source
          </Text>
          <Text style={{color: 'gray'}}>{item.source.name}</Text>
        </View>
        <Text style={{paddingHorizontal: 10}}>{item.content}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          <Text style={{fontWeight: 'bold', marginRight: 10}}>Published</Text>
          <Text style={{color: 'gray'}}>
            {moment(item.publishAt).format('LLL')}
          </Text>
        </View>
        <View style={{paddingHorizontal: 10, marginBottom: 15}}>
          <TouchableOpacity
            style={{backgroundColor: 'green', paddingHorizontal: 10}}>
            <Text
              style={{
                color: 'white',
                paddingVertical: 10,
                textAlign: 'center',
              }}>
              Read more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ICard;

import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ScreenTwo = () => {
  return (
    <>
      <View>
        <Image
          style={{
            width: '100%',
            height: 360,
            borderBottomRightRadius: 45,
            borderBottomLeftRadius: 45,
          }}
          source={{
            uri:
              'https://i.pinimg.com/originals/e3/4d/db/e34ddb2eece6885385c9f7e340faa4bb.jpg',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 30,
          paddingHorizontal: 20,
        }}>
        <View>
          <Text style={{fontSize: 24, fontWeight: '700'}}>Eiffel tower</Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Icon name="location" color="#c1c1c1" size={18} />
            <Text style={{color: '#c1c1c1'}}>Paris, Franch</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(71,113,246)',
            width: 55,
            height: 55,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="cloud-download" color="#fff" size={18} />
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          marginVertical: 30,
        }}>
        <Text
          style={{
            backgroundColor: '#f0f0f0',
            color: '#c1c1c1',
            padding: 3,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            marginRight: 10,
          }}>
          #photography
        </Text>
        <Text
          style={{
            backgroundColor: '#f0f0f0',
            color: '#c1c1c1',
            padding: 3,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          #seo
        </Text>
      </View>
      <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
        <Icon name="heart" color="#b1b1b1" size={22} style = {{marginRight: 20}}/>
        <Icon name="chatbubble" color="#b1b1b1" size={22} />
        <Icon name="bookmark" color="#b1b1b1" size={22} style = {{position:'absolute' ,right: 0}}  />
      </View>
    </>
  );
};

export default ScreenTwo;

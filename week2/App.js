/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const photos = [
  {id: 1, uri: 'https://avatarfiles.alphacoders.com/782/78200.png'},
  {id: 2, uri: 'https://avatarfiles.alphacoders.com/106/106723.png'},
  {id: 3, uri: 'https://avatarfiles.alphacoders.com/959/thumb-95927.png'},
  {id: 4, uri: 'https://avatarfiles.alphacoders.com/111/thumb-111427.jpg'},
  {id: 5, uri: 'https://avatarfiles.alphacoders.com/927/thumb-92722.jpg'},
  {id: 6, uri: 'https://avatarfiles.alphacoders.com/155/thumb-155588.png'},
  {id: 7, uri: 'https://avatarfiles.alphacoders.com/155/thumb-155588.png'},
  {id: 8, uri: 'https://avatarfiles.alphacoders.com/155/thumb-155588.png'},
  {id: 9, uri: 'https://avatarfiles.alphacoders.com/155/thumb-155588.png'},
  {id: 10, uri: 'https://avatarfiles.alphacoders.com/155/thumb-155588.png'},
];
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 30,
              paddingHorizontal: 30,
            }}>
            <View style={{flex: 1}}>
              <Image
                style={{width: 90, height: 90, borderRadius: 90 / 2}}
                source={require('./assets/avatar.png')}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center', left: 20}}>
              <View>
                <Text style={{fontWeight: '700', fontSize: 20}}>
                  Floyd Hayes
                </Text>
              </View>
              <View>
                <Text
                  style={{color: '#c3c3c3', paddingVertical: 10, fontSize: 15}}>
                  Photographer
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgb(71,113,246)',
                    borderRadius: 20,
                    paddingVertical: 4,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgb(120,213,250)',
                    borderRadius: 20,
                    width: 50,
                    marginLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="send" color="#fff" size={18} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: '700', fontSize: 18}}>210</Text>
              <Text>photos</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: '700', fontSize: 18}}>15k</Text>
              <Text>follower</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: '700', fontSize: 18}}>605</Text>
              <Text>following</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginVertical: 30}}>
            <FlatList
              data={photos}
              renderItem={({item}) => (
                <View style={{padding: 5}}>
                  <Image
                    source={{uri: item.uri}}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 10,
                      aspectRatio: 1,
                    }}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

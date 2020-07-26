/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import Header from './components/header';
import ListAccount from './components/money/index';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <View style={{padding: 10, backgroundColor: '#F2F4F7'}}>
          <Header />
          <ListAccount />
        </View> */}
        <View></View>
      </SafeAreaView>
    </>
  );
};

export default App;

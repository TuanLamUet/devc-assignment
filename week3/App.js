/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import WrapButton from './components/Button';

const App = () => {
  const [choose, setChoose] = useState(0);
  const [computer, setComputer] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header choose={choose} computer={computer} />
      <Body choose={choose} computer={computer} />
      <WrapButton
        setChoose={setChoose}
        setComputer={setComputer}
        choose={choose}
        computer={computer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default App;

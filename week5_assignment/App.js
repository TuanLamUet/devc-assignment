import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';

import moment from 'moment';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let fetchData = async () => {
    try {
      let result = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=002c92d9595d491b82f20a578708b30b',
      );
      setArticles(articles.concat(result.data.articles));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    <Loading loading={loading} />;
  }
  if (error) {
    <Error />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{padding: 5}}>
          {!loading && <CountPage articles={articles} />}
          <FlatList
            data={articles}
            renderItem={ICard}
            keyExtractor={(item) => item.title + Math.random()}
            onEndReached={fetchData}
            onEndReachedThreshold={1}
            ListFooterComponent={
              <ActivityIndicator
                size="large"
                loading={loading}
                color="#00ff00"
              />
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const Loading = ({loading}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <ActivityIndicator size="large" loading={loading} color="#00ff00" />
    </View>
  );
};

const Error = () => {
  <View style={{justifyContent: 'center', alignItems: 'center', height: 600}}>
    <Text style={{color: 'red', fontSize: 22}}>Error !</Text>
  </View>;
};

const CountPage = ({articles}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Articles Count: </Text>
      <Text style={{fontSize: 18}}> {articles.length}</Text>
    </View>
  );
};

const ICard = ({item}) => {
  const onPress = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };
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
            onPress={() => {
              onPress(item.url);
            }}
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

export default App;

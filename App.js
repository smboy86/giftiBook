/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {WebView} from 'react-native-webview';
import RNBootSplash from 'react-native-bootsplash';

const App: () => React$Node = () => {
  let init = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    RNBootSplash.hide({duration: 750}); // fade
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback style={{flex: 1, paddingHorizontal: 16}}>
        <WebView
          style={{flex: 1, backgroundColor: '#000'}}
          startInLoadingState={true}
          source={{
            uri:
              'http://dalgong.devpoi.com/page/giftibook/samples/basic/index.html',
            // 'http://naver.com',
          }}
        />
      </TouchableWithoutFeedback>
    </>
  );
};

export default App;

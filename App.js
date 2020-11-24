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
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigator from './src/navigation/RootNavigator';

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
      <RootNavigator />
    </>
  );
};

export default App;

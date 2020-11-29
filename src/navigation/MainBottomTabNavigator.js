import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';

import {AppScreens} from './AppScreens';
import IntroScreen from '../screens/Intro';

const tempMain = () => {
  return (
    <TouchableWithoutFeedback style={{flex: 1, paddingHorizontal: 16}}>
      <WebView
        style={{flex: 1, backgroundColor: '#000'}}
        startInLoadingState={true}
        source={{
          uri:
            'http://nas.devpoi.com:35080/page/giftibook/samples/basic/index.html',
        }}
      />
    </TouchableWithoutFeedback>
  );
};
const tempComment = () => {
  return (
    <View>
      <Text>임시 코멘트</Text>
    </View>
  );
};

const tempScreen = () => {
  return (
    <View>
      <Text>임시 스크린</Text>
    </View>
  );
};

const BottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function RootDetailStack() {
  return (
    <Stack.Navigator
      screenOptions={({route}) => {
        return {
          headerShown: true,
          headerTitle:
            route.params !== undefined && route.params.title !== undefined
              ? route.params.title
              : route.name,
          headerStyle: {
            backgroundColor: '#181818',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
            fontSize: 16,
          },
        };
      }}>
      <Stack.Screen name={AppScreens.TEMP_DETAIL} component={tempScreen} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName={AppScreens.HOME}
      activeColor="#ffe178"
      inactiveColor="#868686"
      shifting={true}
      backBehavior="none"
      barStyle={{backgroundColor: '#181818'}}>
      <BottomTab.Screen
        name={AppScreens.INTRO}
        component={IntroScreen}
        options={{
          tabBarLabel: '서문',
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name={'md-home'}
              size={20}
              color={focused ? '#ffe178' : '#868686'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppScreens.MAIN}
        component={tempMain}
        options={{
          tabBarLabel: '본문',
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name={'md-home'}
              size={20}
              color={focused ? '#ffe178' : '#868686'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppScreens.COMMENTS}
        component={tempComment}
        options={{
          tabBarLabel: '코멘트',
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name={'md-home'}
              size={20}
              color={focused ? '#ffe178' : '#868686'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

class MainBottomTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({route}) => {
            return {
              headerShown: false,
              headerTitle:
                route.params !== undefined && route.params.title !== undefined
                  ? route.params.title
                  : route.name,
              headerStyle: {
                backgroundColor: '#181818',
              },
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 14,
              },
            };
          }}>
          <Stack.Screen name={AppScreens.ROOT_HOME} component={BottomTabs} />
          <Stack.Screen
            name={AppScreens.ROOT_DETAIL}
            component={RootDetailStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainBottomTabNavigator;

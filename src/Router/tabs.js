/*
 * @Author: blue
 * @Date: 2021-08-24 17:54:11
 * @FilePath: /reactNativeBaseView/src/Router/tabs.js
 */
import * as React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import HomeView from '../Views/Home/index'
import MessageView from '../Views/Message'
import ServiceView from '../Views/Service'
import About from '../Views/About'

const tabs = {
  Home: {
    name: 'Home',
    text: '首页',

  },
  Message: {
    name: 'Message',
    text: '消息',
  },
  Service: {
    name: 'Service',
    text: '客服',
  },
  Center: {
    name: 'Center',
    text: '个人中心',
  }
}

const Tabs = () => {
  
  return (
    <Tab.Navigator screenOptions={({ route, navigation }) => ({
      tabBarIcon: () => {

        return (
          <View style={{width: 20, height: 20, backgroundColor: 'green'}}>
            {/* <Text>{tabs[route.name].text}</Text> */}
          </View>
        )
      },
      tabBarOptions:{
       // showLabel: false,
        tabStyle: css.tab,
        style: css.tabWrap,
      }
      
    })}
    >
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Message" component={MessageView} />
        <Tab.Screen name="Service" component={ServiceView} />
        <Tab.Screen name="Center" component={About} />
    </Tab.Navigator>
  )

}

const screen = (
  <Stack.Screen
    name="Tabs"
    component={Tabs}
    options={{
      headerShown: false,
    }}
  />
);

const css = StyleSheet.create({
  
})

export default screen
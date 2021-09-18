/*
 * @Author: blue
 * @Date: 2021-08-24 17:55:43
 * @FilePath: /reactNativeBaseView/src/Views/index.js
 */
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  UIManager,
  findNodeHandle,
  Text,
  Modal,
  Platform,
  DeviceEventEmitter,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text >Home</Text>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Browser')
      }}
      style={{
        width: 100,
        height: 30,
        lineHeight: 30,
        backgroundColor: 'red'
      }}><Text>浏览器</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home
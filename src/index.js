/*
 * @Author: blue
 * @Date: 2021-08-24 17:00:21
 * @FilePath: /reactNativeBaseView/src/index.js
 */
import React, { useEffect, useRef, useState,  } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Router from './Router';

const App = () => {

  return (
    <View style={css.container}>
      <Router />
    </View>
  )
}

const css = StyleSheet.create({
  container : {
    height: '100%', 
    position: 'relative',
  }
})

export default App
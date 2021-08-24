/*
 * @Author: blue
 * @Date: 2021-08-24 17:54:17
 * @FilePath: /reactNativeBaseView/src/Router/main.js
 */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import About from '../Views/About'

const Stack = createStackNavigator()

const main = (
  <>
     <Stack.Screen name="About" component={About} options={{
      headerShown: false,
      gestureEnabled: false
    }} />
  </>
)

export default main
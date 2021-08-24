/*
 * @Author: blue
 * @Date: 2021-08-24 17:52:16
 * @FilePath: /reactNativeBaseView/src/Router/index.js
 */
import React, {
  useEffect,
  useRef
} from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import tabs from './tabs.js'
import main from './main.js'

const Stack = createStackNavigator()

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {tabs}
        {main}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
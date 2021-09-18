/*
 * @Author: blue
 * @Date: 2021-08-24 17:55:43
 * @FilePath: /reactNativeBaseView/src/Views/index.js
 */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';

import { SafeAreaView } from 'react-native-safe-area-context';
const Browser = () => {
  const url = "http://172.16.21.202:8080/"
  return (
    <SafeAreaView edges={['top', 'bottom']} style={{ backgroundColor: '#fff', flex: 1 }}>
    <View style={css.wrap}>
      <WebView
        originWhitelist={['*']} // 也可以让 onShouldStartLoadWithRequest 接管，因为不在白名单内的 URL 不经过 onShouldStartLoadWithRequest
        source={{ uri: url }}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        allowsBackForwardNavigationGestures={true}
        allowsFullscreenVideo={true}
        decelerationRate="normal"
      />
    </View>
    </SafeAreaView>
  )
}

const css = StyleSheet.create({
  wrap :{
    flex: 1
  }
})

export default Browser
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {useState} from 'react'
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'
export default function Brows (){
  const [url, seturl] = useState("");
    return (
      <>
      <View >
        <TextInput  //Text para pegar a URL do site
      value={url}
      placeholder="URL"
      onChangeText={t => seturl(t)}
      style={{paddingTop: Constants.statusBarHeight}}
      />
      </View>
      <WebView
        source={{uri: url}}
        
      />
      </>
    )
  
}
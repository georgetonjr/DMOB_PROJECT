import React, { Component } from 'react';
import { View, WebView, TextInput } from 'react-native';

const Brows = () =>{
  const [url, seturl] = useState(String);
    return (

      <View>
        <TextInput  
      value={url}
      onChangeText={t => setUrl(r)}
      />
      <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
      />
      </View>
    )
  
}
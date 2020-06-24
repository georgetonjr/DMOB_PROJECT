import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import {useState} from 'react'
import Constants from 'expo-constants'



const calc= () =>{
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0); 
  const [res, setres] = useState(0);
  soma = ()=>{
    setres(parseFloat(n1)+parseFloat(n2))
  }
  sub = ()=>{
    setres(n1-n2)
    
  }
  mult = ()=>{
    setres(n1*n2)
  }
  div = ()=>{
    setres(n1/n2)
  }

  return(
    <View style={{paddingTop: Constants.statusBarHeight}}>
        <Text >Numero 01:</Text>
        <TextInput
        onChangeText = {t => setn1(t)}/>
        <Text>Numero 02:</Text>
        <TextInput
        onChangeText={t => setn2(t)}/>
        <Button
        title = 'soma'
        onPress={soma}/>
        <Button
        title = 'Subtração'
        onPress={sub}/>
        <Button
        title = 'divisão'
        onPress={div}/>
        <Button
        title = 'Multiplicação'
        onPress={mult}/>
        <Text>{res}</Text>
        
      </View>
  )
}

export default calc;
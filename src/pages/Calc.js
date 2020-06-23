import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'



const calc= () =>{
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0); 
  const [res, setres] = useState(0);
  soma = (n1,n2)=>{
    setres(n1-n2)
  }
  sub = (n1,n2)=>{
    setres(n1-n2)
    
  }
  mult = (n1,n2)=>{
    setres(n1*n2)
  }
  div = (n1,n2)=>{
    setres(n1/n2)
  }

  return(
    <View>
        <Text>Numero 01:</Text>
        <TextInput
        onChangeText={t => setn1(Number(t)}/>
        <Text>Numero 02:</Text>
        <TextInput
        onChangeText={t => setn2(Number(t)}/>
        <Button
        Text = 'soma'
        onPress={soma}/>
        <Button
        Text = 'Subtração'
        onPress={sub}/>
        <Button
        Text = 'divisão'
        onPress={div}/>
        <Button
        Text = 'Multiplicação'
        onPress={mult}/>
        <Text>{res}</Text>
        
      </View>
  )
}
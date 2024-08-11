import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Link({ title, onPress }){
  return(
    <Pressable onPress={ ()=> onPress() }>
      <Text style={ styles.text }>{ title }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    cursor: 'pointer',
    fontSize: 20
  }
})

import { View, Pressable, StyleSheet, Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function Navbar({ setShowModal }){
  const opacityAnim = useRef(new Animated.Value(0)).current

  useEffect(()=>{
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start()
  }, [opacityAnim])

  return (
    <View style={ styles.container }>
      <Animated.Text style={ [styles.text, { opacity: opacityAnim }] }>OTRA OPINIÓN</Animated.Text>
      <Animated.View style={ [styles.menu, { opacity: opacityAnim }] }>
        <Pressable onPress={ ()=> setShowModal() }>
          <Entypo
            name='menu'
            size={ 20 }
            color='#fff'
          />
        </Pressable>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 5,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    flex: 1,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff'
  },
  menu: {
    position: 'absolute',
    right: 5,
    cursor: 'pointer',
  }
})

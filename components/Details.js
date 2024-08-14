import Page from "./Page";
import { View, Image, Text, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";

const Content = ({ img, opinion })=>{
  let anim = useRef(new Animated.Value(0)).current
  
  useEffect(()=>{
    Animated.timing(anim,{
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }, [anim])

  return (
    <View style={ styles.container }>
      <Image source={ img } style={{ width: 200, height: 200, opacity: anim }} />
      <Text>{ opinion }</Text>
    </View>
  )
}

export default function Details({route, navigation}){
  const { img, opinion } = route.params
  return <Page navigation={navigation} children={ <Content  img={ img } opinion={ opinion } /> } />
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    width: '50%' 
  }
})

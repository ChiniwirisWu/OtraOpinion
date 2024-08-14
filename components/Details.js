import Page from "./Page";
import { View, Image, Text, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";

const Content = ({ img, opinion })=>{
  const anim = useRef(new Animated.Value(0)).current 
  useEffect(()=>{
    Animated.timing(anim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [anim])
  return (
    <Animated.View style={[ styles.container, { opacity: anim, transform: [{translateY: anim.interpolate({inputRange:[0,1], outputRange:[0, -100]})}] } ]}>
      <Image source={ img } style={{ width: 200, height: 200 } } />
      <Text>{ opinion }</Text>
    </Animated.View>
  )
}

export default function Details({route, navigation}){
  const { img, opinion } = route.params
  return <Page navigation={navigation} children={ <Content  img={ img } opinion={ opinion } /> } />
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    width: '50%' 
  }
})

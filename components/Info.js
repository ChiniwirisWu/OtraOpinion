import Page from './Page'
import { Text, StyleSheet, View } from 'react-native'

const Information = ()=>{
  return (
    <View style={ styles.container }>
      <Text>Hi and welcome! this application was made to practice React.js, currently i'm following the React "getting started" (https://reactnative.dev/docs/getting-started), this is the practice of Navigation and Animation. I'm using Animated from React-native with useRef and useEffect, and navigation with Navigation from react-native as well. In this application I will be writting my opinions on the whatever I see on internet, now I am thinking about "clothing", I'm not the most fashion person in this room and I don't have to, so I will write what I think and maybe I will disagree 10%, 50%, 69%, or even 100% later about my opinions but that's the point, to see how I change across time.</Text>
      <Text>This page was designed to be in spanish and as I'm writting I'm thinking about letting this "Info page" content in english. Why? I already started and I'm, for some reason, more confortable writting this in english.   </Text>
      <Text>I hope that you, person that is looking at this app will like it although that surely will be me.</Text>
      <Text>If the person that is reading this knows me and her name begins with "Pat" and ends with "ia", if you see some gramatical errors within this text let me know please.</Text>
    </View>
  )
}

export default function Info({ navigation }){
  return <Page children={ <Information /> } navigation={ navigation } />
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }, 
  text: {
    fontSize: 15,
    color: '#000',
  }
})

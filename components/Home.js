import Page from './Page'
import { Text, StyleSheet, View, FlatList, Image, TouchableHighlight, Platform } from 'react-native'
import { useState } from 'react'

const Information = ({ navigation })=>{
  const [cats] = useState([
    { img: require('../assets/cat1.jpeg'), opinion: 'Infuencer cat, he is taking a photograph for her followers.' },
    { img: require('../assets/cat2.jpeg'), opinion: 'Hugger, who doesnt need a hug?' },
    { img: require('../assets/cat3.jpeg'), opinion: 'This creature is craving for attention.' },
    { img: require('../assets/cat4.jpeg'), opinion: 'Orange cat taking sun, maybe you should do the same...' },
    { img: require('../assets/cat5.jpeg'), opinion: 'Bro wanted to lick the camara.' },
    { img: require('../assets/cat6.jpeg'), opinion: 'Kind of dumb face to be honest.' },
    { img: require('../assets/cat7.jpeg'), opinion: 'This cat has more swag than anybody else.' },
    { img: require('../assets/cat8.jpeg'), opinion: 'Art, deepth, life and death.' },
  ]) 
  let columns = (Platform.OS == 'web') ? 4 : 2
  return (
    <View style={ styles.container }>
      <FlatList
        data={ cats }
        numColumns={ columns }
        contentContainerStyle={ styles.itemsContainer }
        renderItem={({ item, index })=>(
          <View style={ styles.itemContainer }>
            <Image source={ item.img } style={ styles.image } />
            <TouchableHighlight style={ styles.touchable } onPress={ ()=> navigation.navigate('details', {img:item.img, opinion:item.opinion}) }>
              <Text style={ { color: '#fff' } }>Ver opinion</Text>
            </TouchableHighlight>
          </View> 
        )} 
        keyExtractor={ item => item.id }
      />
    </View>
  )
}

export default function Home({ navigation }){
  return <Page children={ <Information navigation={ navigation } /> } navigation={ navigation } />
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }, 
  image: {
    width: 100,
    height: 100,
  },
  itemsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  itemContainer: {
    marginRight: 10,
  },
  touchable: {
    backgroundColor: '#333',
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15
  }
})

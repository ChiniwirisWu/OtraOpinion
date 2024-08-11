import React, { useState } from "react";
import { View, StyleSheet, Modal, Pressable } from "react-native";
import Navbar from "./Navbar";
import { Entypo } from "@expo/vector-icons";
import Link from "./Link";

export default function Page({ navigation, children }){
  const [showModal, setShowModal] = useState(true)

  return (
    <View style={ styles.container }>
      <Navbar setShowModal={ ()=> setShowModal(!showModal) } />
      { children }
      <Modal animationType='fade' transparent={ true } visible={ showModal }>
        <View style={ styles.modal }>
          <Pressable style={ styles.button } onPress={ ()=> setShowModal(!showModal) }>
            <Entypo
              name='menu'
              size={ 20 }
              color='#fff'
            />
          </Pressable>
          <View style={ styles.linksContainer }>
            <Link title="Home" onPress={()=> navigation.navigate('home')} />  
            <Link title="Info" onPress={()=> navigation.navigate('info')} />  
          </View>
        </View>
      </Modal>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  modal: {
    position: 'absolute',
    backgroundColor: '#000',
    width: 200,
    height: '100%',
    right: 0,
    marginTop: 70,
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 20,
  },
  linksContainer: {
    marginTop: 70,
    padding: 5,
    rowGap: 10,
  }
})

import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import Navbar from "./Navbar";

export default function Page({ navigator, children }){
  const [showModal, setShowModal] = useState(false)

  return (
    <View>
      <Navbar setShowModal={ ()=> setShowModal(!showModal) } />
      { children }
      <Modal animationType='slide' transparent={ false } visible={ showModal } style={ styles.modal }></Modal>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  modal: {
    backgroundColor: '#000'
  }
})

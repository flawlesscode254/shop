import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Shoe from './assets/shoe.png'


const Shoes = () => {
    return (
        <View style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 150,
            height: 200,
            borderRadius: 15,
            backgroundColor: "#FFF",
            marginBottom: 20
          }}>
            <View style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 10,
              marginTop: 10
            }}>
              <Ionicons style={{
                marginRight: 35
              }} name="heart-outline" size={20} color="blak" />
              <Ionicons style={{
                marginLeft: 35
              }} name="add" color="orange" size={20} />
            </View>
            <Image style={{
              width: 100,
              height: 50,
              marginTop: 20
            }} source={Shoe} />
            <Text style={{
              marginTop: 5,
              letterSpacing: 3
            }}>Nike</Text>
            <Text style={{
              marginTop: 5,
              letterSpacing: 3
            }}>New Papua</Text>
            <Text style={{
              fontWeight: "bold",
              color: "orange",
              fontSize: 15,
              marginTop: 5,
              letterSpacing: 3
            }}>$250</Text>
          </View>

    )
}

export default Shoes

const styles = StyleSheet.create({})

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Shoe from './assets/shoe.png'
import Shoes from './Shoes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
          <>
                <View style={styles.head}>
                    <View style={{
                        marginTop: 30,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        width: "100%"
                    }}>
                        <TouchableOpacity>
                            <Ionicons name="person-circle" color="purple" size={30} />
                        </TouchableOpacity>                        
                        <Text style={{
                          fontWeight: "bold",
                          fontSize: 17,
                          letterSpacing: 5
                        }}>Catalog</Text>
                        <Ionicons name="search" color="black" size={24} />
                    </View>
                </View>

            <ScrollView style={{
              backgroundColor: "#e6e3dc",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginBottom: -5
            }} contentContainerStyle={{ paddingTop: 15 }}>
              
              
              <View style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: 20,
                marginBottom: 20
              }}>

                <Shoes />
                <Shoes />
                <Shoes />
                <Shoes />
                <Shoes />
                <Shoes />

              </View>

                  
            </ScrollView>

            <View style={styles.footer}>
              <Text style={{
                color: "#FFF",
                fontWeight: "bold",
                letterSpacing: 3
              }}>Cart</Text>
              <View style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row"
              }}>
                <Image style={{
                  width: 30,
                  height: 30,
                  borderRadius: 999,
                  marginRight: 20,
                  backgroundColor: "#FFF"
                }} source={Shoe} />
                <Ionicons style={{
                  marginRight: 20
                }} name="arrow-forward-circle-outline" color="yellow" size={35}  />
              </View>
            </View>
          </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10
  },
  head: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#e6e3dc"
  }
});

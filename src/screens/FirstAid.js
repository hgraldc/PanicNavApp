import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  { id: '1', title: 'Perdarahan', image: require("../assets/images/Perdarahan.png") },
  { id: '2', title: 'Cedera Tulang', image: require("../assets/images/Cedera tulang.png") },
  { id: '3', title: 'Pingsan', image: require("../assets/images/Pingsan.png") },
  { id: '4', title: 'Sesak Napas', image: require("../assets/images/Sesak napas.png") },
  { id: '5', title: 'Muntah', image: require("../assets/images/Muntah.png") },
  { id: '6', title: 'Shock', image: require("../assets/images/Syok.png") },
  { id: '7', title: 'Luka Tusuk', image: require("../assets/images/Luka Tusuk.png") },
  { id: '8', title: 'Luka Bakar', image: require("../assets/images/Luka Bakar.png") },
  { id: '9', title: 'Luka Memar', image: require("../assets/images/Luka memar.png") },
  { id: '10', title: 'Gasping', image: require("../assets/images/Gasping.png") },
  { id: '11', title: 'Henti Jantung', image: require("../assets/images/Henti jantung.png") },
];

export default function FirstAid() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF',
    padding: 20,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    margin: 8,
    width: 160,
    height: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginTop: 10
  },
});

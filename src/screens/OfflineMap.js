import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function OfflineMap() {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: -6.2088, // Ganti dengan lokasi awal yang diinginkan
    longitude: 106.8456,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const emergencyLocations = [
    {
      id: 1,
      title: "Emergency Shelter",
      latitude: -6.2095,
      longitude: 106.8462,
    },
    {
      id: 2,
      title: "Hospital",
      latitude: -6.2102,
      longitude: 106.8450,
    },
  ];

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000);
    }
  };

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
      >
        {emergencyLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
          />
        ))}
      </MapView>

      {/* Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={centerMap}>
          <AntDesign name="enviromento" size={24} color="black" />
          <Text style={styles.buttonText}>Pusatkan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Feather name="volume-2" size={24} color="black" />
          <Text style={styles.buttonText}>Bunyikan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#004D40",
    padding: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  map: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#DFF6FF",
    paddingVertical: 10,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    marginTop: 5,
    color: "black",
  },
});

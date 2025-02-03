import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import MapView, { Marker } from "react-native-maps";

export default function EvacuationNavigation() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [disasterLocation, setDisasterLocation] = useState("(Terhubung dengan Maps)");
  const [evacuationSite, setEvacuationSite] = useState(null);

  const evacuationOptions = [
    { label: "POSKO 1", value: "1" },
    { label: "POSKO 2", value: "2" },
    { label: "POSKO 3", value: "3" },
    { label: "POSKO 4", value: "4" },
  ];

  const handleSubmit = () => {
    if (!name || !evacuationSite) {
      Alert.alert("Peringatan", "Silakan lengkapi semua data sebelum menyimpan.");
      return;
    }
    Alert.alert("Sukses", "Data tersimpan!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: "https://your-background-image-url.com" }} style={styles.backgroundImage} />
      <View>
        <Text style={styles.title}>Inputkan Data Anda</Text>

        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nama Anda"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Lokasi Bencana</Text>
        {/* Peta dengan marker lokasi akurat */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -7.0365, // UNIMUS
            longitude: 110.4381,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {/* Marker UNIMUS */}
          <Marker coordinate={{ latitude: -7.0365, longitude: 110.4381 }} title="1" />

          {/* Marker Posko Evakuasi */}
          <Marker coordinate={{ latitude: -7.0368, longitude: 110.4383 }} title="POSKO 2" />
          <Marker coordinate={{ latitude: -6.9822, longitude: 110.4146 }} title="POSKO 3" />
          <Marker coordinate={{ latitude: -6.9830, longitude: 110.4091 }} title="POSKO 4" />
        </MapView>

        <Text style={styles.label}>Tujuan Evakuasi</Text>
        <Dropdown
          style={styles.dropdown}
          data={evacuationOptions}
          labelField="label"
          valueField="value"
          placeholder="Pilih Posko"
          value={evacuationSite}
          onChange={item => setEvacuationSite(item.value)}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF6FF",
    padding: 20,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004D40",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  dropdown: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  submitButton: {
    backgroundColor: "#00897B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  map: {
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
});

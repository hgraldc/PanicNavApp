import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Audio } from "expo-av";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const DangerWarning = () => {
  // Fungsi untuk memutar suara notifikasi
  const playNotificationSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/danger alarm.mp3") // Ganti dengan file suara di assets
      );
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing sound:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Judul Peringatan */}
      <View style={styles.header}>
        <MaterialIcons name="warning" size={28} color="white" />
        <Text style={styles.headerText}>PERINGATAN</Text>
      </View>

      {/* Notifikasi 1: Gempa */}
      <View style={styles.alertBox}>
        <FontAwesome name="exclamation-triangle" size={28} color="red" />
        <Text style={styles.alertText}>Terdeteksi Gempa 6,5 SR di dekat Lokasi Anda</Text>
      </View>

      {/* Notifikasi 2: Rute Macet */}
      <View style={styles.alertBox}>
        <FontAwesome name="exclamation-triangle" size={28} color="red" />
        <Text style={styles.alertText}>Rute A Mengalami Kemacetan, Gunakan Rute B</Text>
      </View>

      {/* Tombol untuk Bunyi Notifikasi */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={playNotificationSound}>
          <FontAwesome name="bell" size={32} color="black" />
          <Text style={styles.buttonText}>Bunyikan Notifikasi</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

// StyleSheet untuk desain tampilan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF6FF",
    alignItems: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D90429",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
    marginVertical: 5
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
    elevation: 5, // Efek shadow untuk Android
    shadowColor: "#000", // Efek shadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  alertText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
});

export default DangerWarning;
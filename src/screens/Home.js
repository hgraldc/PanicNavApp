import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/anonymous avatar.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Hafizh Geraldy</Text>
          <Text style={styles.location}>Kadungmundu, Semarang, Jawa Tengah</Text>
        </View>
      </View>

      <Image
        source={require("../assets/images/Logo.jpg")}
        style={styles.logo}
      />

      <View style={styles.menuContainer}>
        <MenuButton title="Navigasi Evakuasi" icon="arrow-forward" color="#FFD700" screen="Navigasi Evakuasi" />
        <MenuButton title="Peta Darurat" icon="map" color="#1E90FF" screen="Peta Darurat" />
        <MenuButton title="Peringatan Bahaya" icon="notifications" color="#DC143C" screen="Peringatan Bahaya" />
        <MenuButton title="Mode Offline" icon="wifi-off" color="#333" screen="Peta Darurat (Offline Mode)" />
        <MenuButton title="Pertolongan Pertama" icon="medical-services" color="#006400" screen="Pertolongan Pertama" />
        <MenuButton title="Logout" icon="logout" color="red" screen="Login" />
      </View>
    </SafeAreaView>
  );
}

const MenuButton = ({ title, icon, color, screen }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={[styles.menuButton, { backgroundColor: color }]} onPress={() => navigation.navigate(screen)}>
      <MaterialIcons name={icon} size={30} color="white" />
      <Text style={styles.menuText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 25,
    padding: 10,
    paddingTop: 50,
    marginTop: -50,
    marginHorizontal: -20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Ramabhadra-Regular",
  },
  location: {
    fontSize: 14,
    color: "gray",
  },
  logo: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
    marginBottom: 20,
    borderRadius: 15,
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuButton: {
    width: "48%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  menuText: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
    fontFamily: "Ramabhadra-Regular",
  },
});
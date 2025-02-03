import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import * as Icons from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
  
  const Login = () => {
    const navigation = useNavigation();

    const handlerLogin = () => {
        navigation.navigate("Home");
    }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/images/Background.jpg")}
          resizeMode="cover"
          style={styles.imgBackground}
        >
          <View style={styles.formContainer}>
            {/* Logo inside the form container with borderRadius */}
            <Image
              source={require("../assets/images/Logo.jpg")}
              style={styles.imgLoginLogoContainer}
            />
  
            {/* Username Input with User Icon */}
            <View style={styles.inputContainer}>
              <Icons.User width={25} stroke="black" strokeWidth={1.5} />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#888"
              />
            </View>
  
            {/* Password Input with Lock Icon */}
            <View style={styles.inputContainer}>
              <Icons.Lock width={25} stroke="black" strokeWidth={1.5} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
              />
            </View>
  
            {/* Login Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handlerLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imgBackground: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center", // Center the content vertically
    },
    formContainer: {
      width: "80%", // Form takes 80% of screen width
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight white background for contrast
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
    },
    inputContainer: {
      flexDirection: "row", // Align icon and input horizontally
      alignItems: "center", // Center the items vertically within the container
      width: "100%", // Make the container take full width
      height: 50,
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 15,
      paddingLeft: 15, // Add padding for spacing between icon and input text
      backgroundColor: "#fff"
    },
    imgLoginLogoContainer: {
      width: 250, // Keep the original width of the logo
      height: 250, // Keep the original height of the logo
      resizeMode: "stretch",
      marginBottom: 20, // Add margin for spacing between logo and inputs
      borderRadius: 15, // Add borderRadius to logo to round the corners
    },
    input: {
      flex: 1,
      height: "100%",
      fontSize: 16,
      backgroundColor: "#fff",
      paddingLeft: 10, // Add some padding for the input text
    },
    button: {
      width: "100%",
      height: 50,
      backgroundColor: "#1E90FF",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
  export default Login;
  
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import EvacuationNavigation from './src/screens/EvacuationNavigation';
import EmergencyMap from './src/screens/EmergencyMap';
import DangerWarning from './src/screens/DangerWarning';
import OfflineMap from './src/screens/OfflineMap';
import FirstAid from './src/screens/FirstAid';

const Stack = createStackNavigator();

export default function App() {
  // Load custom fonts
  const [fontLoaded] = useFonts({
    "Ramabhadra-Regular": require("./src/assets/fonts/Ramabhadra-Regular.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null; // or a loading spinner while fonts are loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Navigasi Evakuasi'
          component={EvacuationNavigation}
        />
        <Stack.Screen
          name='Peta Darurat'
          component={EmergencyMap}
        />
        <Stack.Screen
          name='Peringatan Bahaya'
          component={DangerWarning}
        />
        <Stack.Screen
          name='Peta Darurat (Offline Mode)'
          component={OfflineMap}
        />
        <Stack.Screen
          name='Pertolongan Pertama'
          component={FirstAid}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/Screens/HomeScreen';
import DataPosyanduScreen from './src/Screens/DataPosyanduScreen';
import TambahDataScreen from './src/Screens/TambahDataScreen';
import ProfilScreen from './src/Screens/ProfilScreen';
import DataKaderScreen from './src/Screens/DataKaderScreen';
import DataBalitaScreen from './src/Screens/DataBalitaScreen';
import EditDataScreen from './src/Screens/EditDataScreen';
import TambahPosyanduScreen from './src/Screens/TambahPosyanduScreen';
import FirstScreen from './src/Screens/FirstScreen';
import LoginScreen from './src/auth/LoginScreen'; 

const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);           


  useEffect(() => {
      setTimeout(() => {
          setIsSplashVisible(false);
      }, 3000); 
  }, []);

  const [dataKader, setDataKader] = useState([]);
  const [dataBalita, setDataBalita] = useState([]);
  const [dataPosyandu, setDataPosyandu] = useState([]);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FirstScreen">
          {/* Splash Screen */}
          {isSplashVisible ? (
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
          ) : (
            
            isLoggedIn ? (
            
              <>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="TambahPosyanduScreen">
                  {props => <TambahPosyanduScreen {...props} setDataPosyandu={setDataPosyandu} />}
                </Stack.Screen>
                <Stack.Screen name="DataPosyanduScreen">
                  {props => <DataPosyanduScreen {...props} dataPosyandu={dataPosyandu} />}
                </Stack.Screen>
                <Stack.Screen name="Tambah Data">
                  {props => <TambahDataScreen {...props} setDataKader={setDataKader} setDataBalita={setDataBalita} />}
                </Stack.Screen>
                <Stack.Screen name="Data Kader">
                  {props => <DataKaderScreen {...props} dataKader={dataKader} />}
                </Stack.Screen>
                <Stack.Screen name="Data Balita">
                  {props => <DataBalitaScreen {...props} dataBalita={dataBalita} />}
                </Stack.Screen>
                <Stack.Screen name="Profil" component={ProfilScreen} />
                <Stack.Screen name="EditDataScreen">
                  {props => <EditDataScreen {...props} setDataBalita={setDataBalita} />}
                </Stack.Screen>
              </>
            ) : (
              
              <Stack.Screen name="LoginScreen">
                {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
            )
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
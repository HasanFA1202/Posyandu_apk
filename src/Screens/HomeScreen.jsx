import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sistem Informasi Posyandu</Title>
      <Button mode="contained" onPress={() => navigation.navigate('TambahPosyanduScreen')} style={styles.button}>
        Tambah Posyandu
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('DataPosyanduScreen')} style={styles.button}>
        Data Posyandu
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Tambah Data')} style={styles.button}>
        Tambah Data
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Data Kader')} style={styles.button}>
        Lihat Data Kader
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Data Balita')} style={styles.button}>
        Lihat Data Balita
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Profil')} style={styles.button}>
        Profil
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
  },
  button: {
    marginBottom: 15,
    width: '80%',
    paddingVertical: 8,
  },
});

export default HomeScreen;

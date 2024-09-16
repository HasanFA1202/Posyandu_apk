import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Profil Posyandu</Title>
      <Text>Nama: Posyandu Jabung</Text>
      <Text>Alamat: Desa Jabung, Malang</Text>
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
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfilScreen;

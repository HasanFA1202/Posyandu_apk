import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const TambahPosyanduScreen = ({ setDataPosyandu }) => {
  const [namaPosyandu, setNamaPosyandu] = useState('');
  const [desa, setDesa] = useState('');
  const [kecamatan, setKecamatan] = useState('');

  const tambahPosyandu = () => {
    // Tambahkan data posyandu ke state
    setDataPosyandu(prevData => [...prevData, { namaPosyandu, desa, kecamatan }]);
    alert('Data Posyandu berhasil ditambahkan!');
    
    // Reset input fields
    setNamaPosyandu('');
    setDesa('');
    setKecamatan('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nama Posyandu"
        value={namaPosyandu}
        onChangeText={setNamaPosyandu}
        style={styles.input}
      />
      <TextInput
        label="Desa"
        value={desa}
        onChangeText={setDesa}
        style={styles.input}
      />
      <TextInput
        label="Kecamatan"
        value={kecamatan}
        onChangeText={setKecamatan}
        style={styles.input}
      />
      <Button mode="contained" onPress={tambahPosyandu} style={styles.button}>
        Simpan Data Posyandu
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
  },
});

export default TambahPosyanduScreen;

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, RadioButton, Text } from 'react-native-paper';

const EditDataScreen = ({ route, navigation, setDataBalita }) => {
  const { balita, index } = route.params; // Data balita dan index dari item yang akan diubah

  const [nama, setNama] = useState(balita.nama);
  const [ibuBalita, setIbuBalita] = useState(balita.ibuBalita);
  const [berat, setBerat] = useState(balita.berat);
  const [tinggi, setTinggi] = useState(balita.tinggi);
  const [usia, setUsia] = useState(balita.usia);
  const [statusNormal, setStatusNormal] = useState(balita.statusNormal);

  const simpanPerubahan = () => {
    // Update data balita
    setDataBalita(prevData => {
      const newData = [...prevData];
      newData[index] = { nama, ibuBalita, berat, tinggi, usia, statusNormal };
      return newData;
    });

    alert('Data berhasil diubah!');
    navigation.goBack(); // Kembali ke layar sebelumnya
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nama"
        value={nama}
        onChangeText={setNama}
        style={styles.input}
      />
      <TextInput
        label="Ibu Balita"
        value={ibuBalita}
        onChangeText={setIbuBalita}
        style={styles.input}
      />
      <TextInput
        label="Berat (kg)"
        value={berat}
        onChangeText={setBerat}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Tinggi (cm)"
        value={tinggi}
        onChangeText={setTinggi}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Usia (bulan)"
        value={usia}
        onChangeText={setUsia}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Status Gizi:</Text>
      <RadioButton.Group onValueChange={newValue => setStatusNormal(newValue)} value={statusNormal}>
        <View style={styles.radioItem}>
          <RadioButton value="normal" />
          <Text>Normal</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="tidak" />
          <Text>Tidak Normal</Text>
        </View>
      </RadioButton.Group>

      <Button mode="contained" onPress={simpanPerubahan} style={styles.button}>
        Simpan Perubahan
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
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default EditDataScreen;

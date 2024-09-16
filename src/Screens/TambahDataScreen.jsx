import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, RadioButton, TextInput } from 'react-native-paper';

const TambahDataScreen = ({ setDataKader, setDataBalita }) => {
  const [checked, setChecked] = useState('kader');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [ibuBalita, setIbuBalita] = useState('');
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [usia, setUsia] = useState('');
  const [statusNormal, setStatusNormal] = useState('normal'); // untuk pilihan status balita

  const tambahData = () => {
    if (checked === 'kader') {
      setDataKader(prevData => [...prevData, { nama, alamat }]);
    } else {
      setDataBalita(prevData => [...prevData, { nama, ibuBalita, berat, tinggi, usia, statusNormal }]);
    }
    alert(`Data ${checked === 'kader' ? 'Kader' : 'Balita'} berhasil ditambahkan!`);
    setNama('');
    setAlamat('');
    setIbuBalita('');
    setBerat('');
    setTinggi('');
    setUsia('');
    setStatusNormal('normal');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Pilih Data yang Akan Ditambahkan:</Text>
        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
          <View style={styles.radioItem}>
            <RadioButton value="kader" />
            <Text>Data Kader</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="balita" />
            <Text>Data Balita</Text>
          </View>
        </RadioButton.Group>

        <TextInput
          label="Nama"
          value={nama}
          onChangeText={setNama}
          style={styles.input}
        />

        {checked === 'balita' && (
          <>
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
          </>
        )}

        <Button mode="contained" onPress={tambahData} style={styles.button}>
          Simpan Data
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default TambahDataScreen;

import React from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';

const DataBalitaScreen = ({ dataBalita, navigation }) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Nama</Text>
      <Text style={styles.headerText}>Ibu Balita</Text>
      <Text style={styles.headerText}>Berat (kg)</Text>
      <Text style={styles.headerText}>Tinggi (cm)</Text>
      <Text style={styles.headerText}>Usia (bulan)</Text>
      <Text style={styles.headerText}>Status Gizi</Text>
      <Text style={styles.headerText}>Aksi</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nama}</Text>
      <Text style={styles.cell}>{item.ibuBalita}</Text>
      <Text style={styles.cell}>{item.berat}</Text>
      <Text style={styles.cell}>{item.tinggi}</Text>
      <Text style={styles.cell}>{item.usia}</Text>
      <Text style={styles.cell}>{item.statusNormal === 'normal' ? 'Normal' : 'Tidak Normal'}</Text>
      <Button
        title="Ubah"
        onPress={() => navigation.navigate('EditDataScreen', { balita: item, index })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={dataBalita}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default DataBalitaScreen;

import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const DataPosyanduScreen = ({ dataPosyandu }) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Nama Posyandu</Text>
      <Text style={styles.headerText}>Desa</Text>
      <Text style={styles.headerText}>Kecamatan</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.namaPosyandu}</Text>
      <Text style={styles.cell}>{item.desa}</Text>
      <Text style={styles.cell}>{item.kecamatan}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={dataPosyandu}
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

export default DataPosyanduScreen;

import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const DataKaderScreen = ({ dataKader }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataKader}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.nama}</Text>
            <Text style={styles.text}>Alamat: {item.alamat}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default DataKaderScreen;

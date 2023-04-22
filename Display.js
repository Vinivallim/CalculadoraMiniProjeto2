import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
    padding: 20,
  },
  value: {
    fontSize: 48,
    color: 'white',
  },
});

export default Display;
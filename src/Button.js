import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default Button;
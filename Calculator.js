import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [value, setValue] = useState('');

  const handleButtonPress = (title) => {
    switch (title) {
      case 'C':
        setValue('');
        break;
      case '=':
        try {
          const result = eval(value);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      default:
        setValue(value + title);
    }
  };

  return (
    <View style={styles.container}>
      <Display value={value} />
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button title="C" onPress={() => handleButtonPress('C')} />
          <Button title="%" onPress={() => handleButtonPress('%')} />
          <Button title="^" onPress={() => handleButtonPress('**')} />
          <Button title="/" onPress={() => handleButtonPress('/')} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleButtonPress('7')} />
          <Button title="8" onPress={() => handleButtonPress('8')} />
          <Button title="9" onPress={() => handleButtonPress('9')} />
          <Button title="*" onPress={() => handleButtonPress('*')} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} />
          <Button title="5" onPress={() => handleButtonPress('5')} />
          <Button title="6" onPress={() => handleButtonPress('6')} />
          <Button title="-" onPress={() => handleButtonPress('-')} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} />
          <Button title="2" onPress={() => handleButtonPress('2')} />
          <Button title="3" onPress={() => handleButtonPress('3')} />
          <Button title="+" onPress={() => handleButtonPress('+')} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleButtonPress('0')} />
          <Button title="." onPress={() => handleButtonPress('.')} />
          <Button title="=" onPress={() => handleButtonPress('=')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  buttonsContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: '#1B1B1a'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Calculator;
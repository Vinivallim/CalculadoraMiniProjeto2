import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import Display from './Display';
import {
  decimalToBinary,
  binaryToDecimal,
  decimalToOctal,
  octalToDecimal,
  decimalToHexadecimal,
  hexadecimalToDecimal,
} from './Aritmetica/Converter';
import { sin, cos, tan } from './Trigonometria/Trigonometry';

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
      case 'Bin':
        try {
          const decimalValue = eval(value);
          const binaryValue = decimalToBinary(decimalValue);
          setValue(binaryValue.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Oct':
        try {
          const decimalValue = eval(value);
          const octalValue = decimalToOctal(decimalValue);
          setValue(octalValue.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Hex':
        try {
          const decimalValue = eval(value);
          const hexadecimalValue = decimalToHexadecimal(decimalValue);
          setValue(hexadecimalValue.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Sin':
        try {
          const angle = eval(value);
          const result = sin(angle);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Cos':
        try {
          const angle = eval(value);
          const result = cos(angle);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Tan':
        try {
          const angle = eval(value);
          const result = tan(angle);
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
      <View style={styles.row}>
        <Button title="C" onPress={() => handleButtonPress('C')} />
        <Button title="(" onPress={() => handleButtonPress('(')} />
        <Button title=")" onPress={() => handleButtonPress(')')} />
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
      <View style={styles.row}>
        <Button title="Bin" onPress={() => handleButtonPress('Bin')} />
        <Button title="Oct" onPress={() => handleButtonPress('Oct')} />
        <Button title="Hex" onPress={() => handleButtonPress('Hex')} />
        <Button title="Sin" onPress={() => handleButtonPress('Sin')} />
        <Button title="Cos" onPress={() => handleButtonPress('Cos')} />
        <Button title="Tan" onPress={() => handleButtonPress('Tan')} />
      </View>
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202020',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
  });
  
  export default Calculator;
  
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, SafeAreaView } from 'react-native';
import { colors } from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function VerifyPin({ handlePress,onPress, handleDelete, setInput, input,loading }) {
  const renderInputText = () => {
    const inputLength = input.length;
    const asterisks = '*'.repeat(inputLength);
    return <Text style={styles.input}>{asterisks}</Text>;
  };




  return (
    <SafeAreaView style={styles.container}>

      {loading ? <ActivityIndicator style={{marginVertical:18}} color={colors.primary} size={'large'} /> : renderInputText()}

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonv} onPress={()=>{
          // handleDelete()
          onPress()
        }}>
          <MaterialCommunityIcons name={'arrow-right-thin'} size={45} color={colors.white} />

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default VerifyPin;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 34,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: 'white',
    width: Dimensions.get('screen').width / 4,
    height: 70,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Add elevation for shadow effect
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonv: {
    marginHorizontal: 5,
    backgroundColor: colors.primary,
    width: Dimensions.get('screen').width / 4,
    height: 70,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Add elevation for shadow effect
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonText: {
    fontSize: 24,
    color: colors.primary
  },
});
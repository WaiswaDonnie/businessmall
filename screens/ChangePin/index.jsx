import React, { useContext, useEffect, useRef, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';
import PrimaryButton from '../../components/PrimaryButton';
import Numpad from '../../components/numpad';
import { useToast } from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../../Context/GlobalContext';

function ChangePin({ navigation }) {
  const toast = useToast();
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmedNewPin, setConfirmedNewPin] = useState('');
  const [localUserInfo, setLocalUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  const { createPin } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState('enterCurrentPin'); // Track the current stage of PIN change
  const [userNewPin,setUserNeWPin] = useState("")
  const getUser = async () => {
    const res = await AsyncStorage.getItem('@auth_user');
    const token = await AsyncStorage.getItem('@auth_token');
    if (token && res) {
      setLocalUserInfo(JSON.parse(res));
      setToken(token);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handlePress = (value) => {
    if (stage === 'enterCurrentPin') {
      setCurrentPin((prevInput) => prevInput + value);
    } else if (stage === 'enterNewPin') {
      setNewPin((prevInput) => prevInput + value);
    } else if (stage === 'confirmNewPin') {
      setConfirmedNewPin((prevInput) => prevInput + value);
    }
  };

  useEffect(() => {
    if (currentPin.length === 4 && stage === 'enterCurrentPin') {
      validateCurrentPin();
    }

    // if (newPin.length === 4 && confirmedNewPin.length === 4) {
    //   handleNext();
    // }
    if(newPin.length === 4 || confirmedNewPin.length === 4){
        console.log("new",newPin,"cind",confirmedNewPin)
        handleNext()
    }

  }, [currentPin, newPin, confirmedNewPin]);

  const handleDelete = () => {
    if (stage === 'enterCurrentPin') {
      setCurrentPin((prevInput) => prevInput.slice(0, -1));
    } else if (stage === 'enterNewPin') {
      setNewPin((prevInput) => prevInput.slice(0, -1));
    } else if (stage === 'confirmNewPin') {
      setConfirmedNewPin((prevInput) => prevInput.slice(0, -1));
    }
  };

  const clearText = () => {
    setUserNeWPin(newPin)
    setCurrentPin('');
    setNewPin('');
    setConfirmedNewPin('');
 
   
  };

  const validateCurrentPin = () => {
    // Simulate API call to validate the current PIN
    // Replace 'YOUR_CURRENT_PIN' with the actual current PIN stored securely
    if (currentPin === '1234') {
      setStage('enterNewPin');
      clearText();
    } else {
      toast.show('Invalid current PIN', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
      clearText();
    }
  };

  const handleNext = () => {
    if (stage === 'enterNewPin') {
      setStage('confirmNewPin');
      clearText();
    } else if (stage === 'confirmNewPin') {
      if (userNewPin === confirmedNewPin) {
        // New PINs match, update the PIN
        // Call the function to update the PIN (you can implement it as needed)
        // createPin(newPin, token, setLoading, navigation);

        toast.show('PIN updated successfully!', {
          type: 'success',
          placement: 'bottom',
          duration: 4000,
          offset: 30,
          animationType: 'slide-in',
        });

        // Clear the states and navigate to a different screen (e.g., dashboard)
        clearText();
        setStage('enterCurrentPin'); // Reset stage to the initial state
        navigation.replace('Dashboard'); // Replace 'Dashboard' with the actual screen name
      } else {
        console.log(newPin,confirmedNewPin)
        // New PINs don't match, display an error
        toast.show('New PINs do not match', {
          type: 'danger',
          placement: 'bottom',
          duration: 4000,
          offset: 30,
          animationType: 'slide-in',
        });
        clearText();
        setStage('enterNewPin')
      }
    }
  };

  return (
    <ImageBackground style={{ flex: 1, padding: 10 }} source={require('../../assets/images/watermark.png')}>
      <ScrollView>
        <TouchableOpacity
          style={{ flexDirection: 'row', height: 150, width: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image style={{ height: 50, width: 50, borderRadius: 50, marginRight: 10 }} source={require('../../assets/images/logo.png')} />
          <Text style={{ fontSize: 18, color: colors.primary }}>Hello {localUserInfo?.legalName}</Text>
        </TouchableOpacity>

        {stage === 'enterCurrentPin' && (
          <View>
            <Text style={styles.title}>Enter Current PIN</Text>
            <Numpad loading={loading} handlePress={handlePress} handleDelete={handleDelete} input={currentPin} />
          </View>
        )}

        {stage === 'enterNewPin' && (
          <View>
            <Text style={styles.title}>Enter New PIN</Text>
            <Numpad loading={loading} handlePress={handlePress} handleDelete={handleDelete} input={newPin} />
          </View>
        )}

        {stage === 'confirmNewPin' && (
          <View>
            <Text style={styles.title}>Confirm New PIN</Text>
            <Numpad loading={loading} handlePress={handlePress} handleDelete={handleDelete} input={confirmedNewPin} />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

export default ChangePin;

const styles = StyleSheet.create({
  logo: {
    width: 168,
    height: 45,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: colors.primary,
    alignSelf: 'center',
  },
});

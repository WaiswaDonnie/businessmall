import React, { useContext, useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';
import PrimaryButton from '../../components/PrimaryButton';
import OTPTextInput from 'react-native-otp-textinput';
import NumberPad, { Input, Display } from 'react-native-numpad';
import Numpad from '../../components/numpad';
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../../Context/GlobalContext';
function CreatePin({ navigation }) {
  const toast = useToast();
  const [pin, setPin] = useState('');
  const [confirmedPin, setConfirmedPin] = useState('');
  const [state, setState] = useState('create');
  const [response, setReponse] = useState('')
  const [input, setInput] = useState('');
  const otpInputRef = useRef(null);
  const [token,setToken] = useState(null)
  const [localUserInfo, setLocalUserInfo] = useState(null)
  const {createPin} = useContext(GlobalContext)
  const [loading,setLoading] = useState(false)


  const getUser = async () => {
    const res = await AsyncStorage.getItem('@auth_user');
    const token =  await AsyncStorage.getItem('@auth_token');
    if(token && res){
      setLocalUserInfo(JSON.parse(res))
      setToken(token)
    }

  }

  useEffect(() => {
    getUser()
  }, [])

  const handlePress = (value) => {
    if (state === "create") {
      setPin((prevInput) => prevInput + value)
    } else {
      setConfirmedPin((prevInput) => prevInput + value);
    }
  };

  useEffect(() => {

    if (state === "create" && pin.length === 4) {
      handleNext()
    }

    if (state === "confirm" && confirmedPin.length === 4) {
      handleNext()
    }

  }, [pin, confirmedPin])

  useEffect(() => {

  }, []);


  const handleDelete = () => {

    setConfirmedPin((prevInput) => prevInput.slice(0, -1));
    setPin((prevInput) => prevInput.slice(0, -1));
  };

  const clearText = () => {
    // otpInputRef.current.clear();
    setInput('')
  };

  const setText = () => {
    otpInputRef.current.setValue('');
  };

  const handlePinInputChange = (pin) => {
    setPin(pin);
    handlePress(pin)

  };

  const handleConfirmPinInputChange = (confirmedPin) => {
    setConfirmedPin(confirmedPin);
    handlePress(confirmedPin)

  };

  const handleNext = () => {

    if (state === 'create') {
      setState('confirm');
      clearText();
    } else if (state === 'confirm') {
      if (pin === confirmedPin) {
        // PINs match, do something with the confirmed PIN
        // navigation.replace('Dashboard')
        setReponse('PINs  match');
        createPin(pin, token, setLoading,navigation)
        setState('create');
       
      } else {
        // PINs don't match, display an error or handle it as desired
        console.log(pin, confirmedPin);

        toast.show("PINs do not match",
          {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
          });

        clearText();
        setPin('');
        setConfirmedPin('');
        setState('create');
      }
    }
  };

  return (
    <ImageBackground style={{ flex: 1, padding: 10 }} source={require('../../assets/images/watermark.png')}>
      <ScrollView>
        <TouchableOpacity style={{ flexDirection: 'row', height: 150, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
          <Image style={{ height: 50, width: 50, borderRadius: 50, marginRight: 10 }} source={require('../../assets/images/logo.png')} />
          <Text style={{ fontSize: 18, color: colors.primary }}>Hello {localUserInfo?.legalName}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{state === 'create' ? 'Choose A PIN' : 'Re-enter your PIN'}</Text>
        <View >
          <Numpad loading={loading} handlePress={handlePress} handleDelete={handleDelete} input={state === "create" ? pin : confirmedPin} setInput={state === "create" ? handlePinInputChange : handleConfirmPinInputChange} />

        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default CreatePin;

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
  subtitle: {
    fontWeight: '700',
    fontSize: 11,
    color: colors.primary,
    alignSelf: 'center',
  },
  input: {
    marginVertical: 5,
  },
});

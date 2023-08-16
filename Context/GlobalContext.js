import React, { createContext, useEffect, useState } from 'react';
import { PRODUCTION_URL } from '../api';
import { collection, deleteDoc, limit, increment, collectionGroup, getDocs, getDoc, doc, setDoc, updateDoc, onSnapshot, serverTimestamp, query, where, addDoc, orderBy, arrayUnion } from 'firebase/firestore';
import { db, auth, storage,firebaseFunctions } from '../firebase'
import { getAuth, sendPasswordResetEmail, updateEmail, sendEmailVerification, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signOut, RecaptchaVerifier, updateProfile, signInWithPhoneNumber, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)
  const toast = useToast();



  const getUserData = async() => {
     const userToken = await AsyncStorage.getItem('@auth-token');
    var myHeaders = new Headers();
    myHeaders.append("auth-token", userToken);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
     fetch(`${PRODUCTION_URL}/user/getUserData`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        if(result.success) {
          setUser(result.data)
         
          await AsyncStorage.setItem('@auth-user', JSON.stringify(result.data))
        }else{
          console.log("asdas",result)
        }

      })
      .catch(error => console.log('error', error));
  }


  const createUser = async (userInfo, setLoading, navigation) => {
    console.log(userInfo);
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('auth-token', 'NULL');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      legalName: userInfo?.legalName,
      email: userInfo?.email,
      phone: userInfo?.phone,
      password: userInfo?.password,
      referralCode: 'GA09UA8X',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${PRODUCTION_URL}/auth/register`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        setLoading(false);
        console.log(result);
        if (result.success) {
          toast.show(result?.message, {
            type: 'success',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
          await AsyncStorage.setItem('@auth_token', result?.data?.token);
          await AsyncStorage.setItem('@auth_user', raw);
          navigation.push('CreatePin');
        } else {
          toast.show(result.error?.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      })
      .catch(error => {
        setLoading(false);
        toast.show(error?.message, {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          offset: 30,
          animationType: 'slide-in',
        });
        console.log('error', error);
      });
  };
  

  



  const updateProfile = async (userInfo, setLoading, navigation) => {
    console.log(userInfo);
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('auth-token', 'NULL');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      legalName: userInfo?.legalName,
      newEmail: userInfo?.email,
      newPhone: userInfo?.phone,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${PRODUCTION_URL}/settings/updateProfile`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        setLoading(false);
        console.log(result);
        if (result.success) {
          toast.show('Profile Updated successfully.', {
            type: 'success',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
          await AsyncStorage.setItem('@auth_user', raw);
          navigation.goBack();
        } else {
          toast.show(result.error?.message||result.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      })
      .catch(error => {
        setLoading(false);
        toast.show(error?.message, {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          offset: 30,
          animationType: 'slide-in',
        });
        console.log('error', error);
      });
  };

  const createPin = async (pin, token, setLoading, navigation) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('auth-token', 'NULL');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      pin: pin,
      token: token,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${PRODUCTION_URL}/auth/createPIN`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        setLoading(false);
        if (result.success) {
          toast.show(result.message, {
            type: 'success',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
          console.log(result)
          await AsyncStorage.setItem('createdPin', 'true');
          await AsyncStorage.setItem('isLoggedIn', 'true');
          getUserData()
          navigation.replace('Dashboard');
        } else {
          toast.show(result.error?.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      })
      .catch(error => {
        setLoading(false);

        console.log('error', error);
      });
  };

  const login = async (userInfo, setLoading, navigation) => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email: userInfo?.email,
      password: userInfo?.password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${PRODUCTION_URL}/auth/login`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        setLoading(false);
        if (result.success) {
          toast.show(result.message, {
            type: 'success',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
          navigation.replace('VerifyLogin');
          await AsyncStorage.setItem('@auth_token', result.data.loggedInToken)
          await AsyncStorage.setItem('isLoggedIn', 'false');
          await AsyncStorage.setItem('createdIn', 'true');
        } else {
          toast.show(result.error?.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      })
      .catch(error => {
        setLoading(false);

        console.log('error', error);
      });
  };
  
  const verifyLogin = async (pin, token, setLoading, navigation) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      pin: pin,
      token: token,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${PRODUCTION_URL}/auth/verifyLogin`, requestOptions)
      .then(response => {
        response.json();
      })
      .then(async result => {
        setLoading(false);
        if (result?.success) {
          toast.show(result.message, {
            type: 'success',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
          await AsyncStorage.setItem('createdPin', 'true');
          await AsyncStorage.setItem('@auth-token', result.data.authToken);
          await AsyncStorage.setItem('isLoggedIn', 'true');
          getUserData()
          navigation.replace('Dashboard');
        } else {
          console.log(result)
          toast.show(result.error?.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false);
      });
  };
  const verifyPin = async (pin, setLoading, handleNext) => {
    const token = await AsyncStorage.getItem('@auth_token')
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('auth-token', 'NULL');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      pin: pin,
      token: token,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${PRODUCTION_URL}/auth/verifyLogin`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        setLoading(false);
        if (result.success) {
          toast.show('Verified', {
            type: 'success',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
          await AsyncStorage.setItem('isLoggedIn', 'true');
          handleNext();
        } else {
          toast.show(result.error?.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 2000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false);
      });
  };

  const resetPassword = async (
    password,
    confirmPassword,
    token,
    setLoading,
  ) => {
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append('auth-token', 'NULL');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      token: token,
      password: password,
      confirmPassword: confirmPassword,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://127.0.0.1:5000/api/auth/resetPassword', requestOptions)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        console.log(result);
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false);
      });
  };
  useEffect(() => { getUser() }, [])

  const getUser = async () => {
    const res = await AsyncStorage.getItem('@auth_user');
    if (res) {
      setUser(JSON.parse(res))
      console.log(JSON.parse(res))
    }

  }

 
  return (
    <GlobalContext.Provider
      value={{
        login,
        getUserData,
        updateProfile,
        verifyPin,
        verifyLogin,
        createUser,
        createPin,
        resetPassword,
        user,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

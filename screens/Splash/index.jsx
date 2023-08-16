import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, Animated, Easing } from 'react-native';
import { colors } from '../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
    const rotationValue = useRef(new Animated.Value(0)).current;
    const animateLogo = () => {
        Animated.loop(
            Animated.timing(rotationValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };
    const rotateInterpolate = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const handleRedirect = async() =>{
        const localUser = await AsyncStorage.getItem('@auth_user')
        const token = await AsyncStorage.getItem('@auth_token')
        const viewedIntro = await AsyncStorage.getItem('@viewed')
        const createdPin = await AsyncStorage.getItem('createdPin')
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
        // await AsyncStorage.removeItem('@auth_user')
        // await AsyncStorage.removeItem('createdPin')
        // await AsyncStorage.removeItem('@auth_token')
        // await AsyncStorage.removeItem('isLoggedIn')
        
        setTimeout(()=>{
            // navigation.replace('Dashboard')
             if(createdPin && token && isLoggedIn==="true" ){
                navigation.replace('Dashboard')
            }
            else if(!createdPin && token && localUser){
                navigation.replace('CreatePin')
            }
            else if(token && createdPin && isLoggedIn && isLoggedIn !=="true"){
                navigation.replace('VerifyLogin')
            }
            else {
                navigation.replace('Login')
            }
            
        },3000)
    }

    useEffect(()=>{
        handleRedirect()
        setInterval(()=>{
            animateLogo();
        },1000)
    },[])

    return (
    


        <View style={styles.container}>
        <StatusBar backgroundColor={colors.primary} />
        <Animated.Image
                source={require('../../assets/images/logowhite.png')}
                style={[styles.logo, { transform: [{ rotate: rotateInterpolate }] }]}
            />
    </View>
           
   );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position:'relative' // Set the background color to white
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
      
      },
      stretchedText: {
        color: colors.primary,
        fontSize: 60,
        transform: [{ rotate: '270deg' }],
        position: 'absolute',
        left: -120,
 
    },

});

export default Splash;

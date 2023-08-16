import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import NavigationHeader from '../../components/NavigationHeader'
import { colors } from '../../constants/colors'
import CustomInput from '../../components/CustomInput'
import PrimaryButton from '../../components/PrimaryButton'


function Reset({navigation}){
    const [email,setEmail] = useState("")
    
    return(
        <SafeAreaView style={{backgroundColor:colors.white,flex:1,paddingHorizontal:15}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
    <NavigationHeader showBack={true} label={'Reset Password'} onPress={()=>navigation.goBack()} />
    <View style={{marginTop:50}}>
        <Text style={{color:colors.black,fontWeight:'500'}}>Don't worry, we understand that memory slips happen.Please enter your registered email address or phone number 
            to reset your password.</Text>
    </View>
    <View style={{marginVertical:20}}>
        <CustomInput value={email} placeholder={'Enter your email or phone number'} onChange={(text)=>setEmail(text)}/>
    </View>
    <View>
        <PrimaryButton onPress={()=>{navigation.push('Otp')}} title={'Reset Password'}/>
    </View>
    </SafeAreaView>
    )
}

export default Reset;
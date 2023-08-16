import React, { useState ,useRef} from 'react'
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import NavigationHeader from '../../components/NavigationHeader'
import { colors } from '../../constants/colors'
import CustomInput from '../../components/CustomInput'
import PrimaryButton from '../../components/PrimaryButton'
import OTPTextInput from 'react-native-otp-textinput'

function Otp({navigation}){
    const [email,setEmail] = useState("")
    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }
    return(
        <SafeAreaView style={{backgroundColor:colors.white,flex:1,paddingHorizontal:15}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
    <NavigationHeader label={'OTP Verification'} onPress={()=>navigation.goBack()} />
    <View style={{justifyContent:'space-between',flex:1,marginVertical:10}}>
    <View style={{marginTop:50}}>
        <Text style={{color:colors.black,fontWeight:'500'}}>We have sent an an OTP to your phone and your email.</Text>
        <View style={{marginVertical:20}}>
        <OTPTextInput ref={e => (otpInput = e)} textInputStyle={{
            borderWidth:2,

        }} inputCount={6} autoFocus tintColor={colors.primary}/>
        <View style={{alignSelf:'flex-end'}}>
            <TouchableOpacity><Text style={{color:colors.primary,fontWeight:'600'}}>Resend OTP</Text></TouchableOpacity>
        </View>
     </View>
    </View>
    
    <View>
        <PrimaryButton onPress={()=>{navigation.push('UpdatePassword')}} title={'Continue'}/>
    </View>
    </View>
    </SafeAreaView>
    )
}

export default Otp;
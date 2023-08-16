import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import NavigationHeader from '../../components/NavigationHeader'
import { colors } from '../../constants/colors'
import CustomInput from '../../components/CustomInput'
import PrimaryButton from '../../components/PrimaryButton'


function ChangePassword({navigation,}){
    const [cpassword,setCpassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [password,setPassword] = useState("")
    
    return(
        <SafeAreaView style={{backgroundColor:colors.white,flex:1,paddingHorizontal:15}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
    <NavigationHeader showBack={true} label={'Change Password'} onPress={()=>navigation.goBack()} />
   
    <View style={{}}>
        <Text style={{color:colors.black,fontWeight:'500',marginVertical:5,fontFamily:'Poppins'}}>Old Password</Text>
        <CustomInput value={password} placeholder={'Enter Old Password'} onChange={(text)=>setPassword(text)}/>
    </View>
    <View style={{}}>
        <Text style={{color:colors.black,fontWeight:'500',marginVertical:5,fontFamily:'Poppins'}}>New Password</Text>
        <CustomInput value={password} placeholder={'Enter New Password'} onChange={(text)=>setPassword(text)}/>
    </View>
    <View style={{}}>
    <Text style={{color:colors.black,fontWeight:'500',marginVertical:5,fontFamily:'Poppins'}}>Confirm Password</Text>
    <CustomInput value={cpassword} placeholder={'Re-enter Password'} onChange={(text)=>setCpassword(text)}/>
    </View>
    <View>
        <PrimaryButton onPress={()=>{navigation.push('EnterPin',{status:"changePassword"})}} title={'Continue'}/>
    </View>
    </SafeAreaView>
    )
}

export default ChangePassword;
import React, { useState } from 'react'
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton'
import { colors } from '../../constants/colors'

function ResetResponse({route,navigation}) {
   
    const [status,setStatus] = useState()
    return (
        <ImageBackground style={{ flex: 1, padding: 10,justifyContent:'space-between' }} source={require('../../assets/images/watermark.png')}>
            <StatusBar backgroundColor={'transparent'}/>
            <View>

            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{ color: colors.black, fontSize: 28, fontWeight: '700', }}>Password Reset</Text>
                <Text style={{ color: colors.black, fontSize: 28, fontWeight: '700', }}>{!status?'Successful!':'Failed!'}</Text>
                <Text style={{ color: colors.black, fontSize: 13, fontWeight: '500', }}>{!status?'Your password has been changed sucessfully.':'There is a temporary problem with this service, try again later.'}</Text>
            </View>
            <View>
                {!status && <PrimaryButton onPress={() => { navigation.replace('Login')}} title={'Back to Login'} />}
                {status && <PrimaryButton onPress={() => { }} title={'Try Again'} />}
                
            </View>
        </ImageBackground>
    )
}

export default ResetResponse
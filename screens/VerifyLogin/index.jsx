import React, { useContext, useState } from 'react'
import { View, Text, Image } from 'react-native'
import VerifyPin from '../../components/verifyPin'
import { colors } from '../../constants/colors'
import { SafeAreaView } from 'react-native'
import { GlobalContext } from '../../Context/GlobalContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

function VerifyLogin({navigation}) {
    const [input, setInput] = useState("")
    const [loading,setLoading]=useState(false)
    const {verifyLogin} = useContext(GlobalContext)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{marginTop:50, flex: 1,alignItems:'center' }}>

                <View style={{  flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/default.png')} />
                    <Text style={{fontSize:19,fontFamily:'Poppins',fontWeight:'600'}}>Hello</Text>
                </View>
                <View style={{ flex: 1, marginTop:50}}>
                    <Text style={{ fontWeight: '800', alignSelf: 'center', color: colors.primary, fontSize: 20, fontFamily: 'Poppins' }}>Enter your PIN</Text>
                    <VerifyPin
                    loading={loading}
                        onPress={async() => {
                            const token = await AsyncStorage.getItem('@auth_token')
                            // pin, token, setLoading,navigation
                            console.log("token",token)
                            verifyLogin(input, token,setLoading,navigation)
                              }
                            }
                        handlePress={(p) => {
                            setInput((prevInput) => prevInput + p)
                        }} handleDelete={() => {
                            setInput((prevInput) => prevInput.slice(0, -1));

                        }} setInput={setInput} input={input} />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default VerifyLogin
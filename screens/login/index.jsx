import React, { useContext, useState } from 'react'
import { Text, View, SafeAreaView, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';
import PrimaryButton from '../../components/PrimaryButton';
import { GlobalContext } from '../../Context/GlobalContext';

function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(GlobalContext)
    const [loading,setLoading]  = useState(false);

    return (
        <SafeAreaView>
            <StatusBar  backgroundColor={colors.primary}/>
            <View style={{
                justifyContent:'center',
                alignItems:'center'
            }}>
                {/* <View  style={styles.bgimage} /> */}
                {/* <Image style={styles.bgimage} source={require('../../assets/images/background.png')} /> */}
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            </View>

            <View style={styles.form}>
                <Text style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Text style={{ fontSize: 20, color: colors.black, fontWeight: '700' }}>Welcome<Image style={{ width: 27, height: 27 }} source={require('../../assets/images/hand.png')} /> </Text>
                </Text>
                <View>
                    <CustomInput placeholder={'Email or phone number'} value={email} onChange={(e) => { setEmail(e)}} style={styles.input} />
                    <CustomInput placeholder={'Password'} value={password} onChange={(e) => { setPassword(e)}} style={styles.input} />
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Reset')}><Text style={{ color: colors.primary, fontWeight: '600', alignSelf: 'flex-end' }}>Forgot Password?</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <PrimaryButton loading={loading} onPress={() => {
                        login({email:email,password:password},setLoading,navigation)
                     }} title={'Login'} />

                   <View style={{marginTop:40,}}>
                   <Text style={{color:colors.black, fontWeight:'600'}}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{textAlign:'center',color:colors.primary, fontWeight:'600'}}>Create new account</Text>
                    </TouchableOpacity>
                   </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    bgimage: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 3,
        position: 'relative'
    },
    logo: {
        width: 210,
        height:170,
        // position: 'absolute',
          alignSelf:'center',
         marginTop:100
         
    },
    form: {
        marginHorizontal: 10
    },
    input: {
        marginVertical: 5
    },

})
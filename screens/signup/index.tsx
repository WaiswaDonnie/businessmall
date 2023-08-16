import React, { useContext, useRef, useState } from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';
import PrimaryButton from '../../components/PrimaryButton';
import { GlobalContext } from '../../Context/GlobalContext';

function Signup({ navigation }) {
    const { userInfo,createUser } = useContext(GlobalContext)
    const [loading,setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [referralCode,setRerralCode] = useState("")

    function generateStrongPassword() {
        const length = 20;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        setPassword(password);
    }

    return (
        <ImageBackground style={{ flex: 1, padding: 10, }} source={require('../../assets/images/watermark.png')}>
            <ScrollView>
                <View style={{
                    height: 200,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                </View>

                <Text style={styles.title}>Let's get you started</Text>

                <View style={{ marginVertical: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%'
                    }}>
                        <CustomInput placeholder={'Full legal Name'} value={name} onChange={(e) => { setName(e) }} style={[styles.input, { width: '100%', }]} />

                    </View>
                    <CustomInput placeholder={'Email address'} value={email} onChange={(e) => { setEmail(e) }} style={styles.input} />
                    <View>
                        <CustomInput placeholder={'Phone number'} type={"phone"} value={phone} onChange={(e) => { setPhone(e) }} style={[styles.input]} />
                    </View>

                    <View>
                        <CustomInput placeholder={'Password'} type={"password"} value={password} onChange={(e) => { setPassword(e) }} style={[styles.input]} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text>A minimum of 8 characters</Text>
                            {/* <TouchableOpacity onPress={() => generateStrongPassword()}> <Text style={{ color: colors.primary }}>Autogenerate</Text></TouchableOpacity> */}
                        </View>
                    </View>

                    <View>
                        <PrimaryButton loading={loading} onPress={() => { 
                            let info = {
                                "legalName": name,
                                "email": email,
                                "phone": phone,
                                "password": password,
                                "referralCode": referralCode
                              
                            }
                            createUser(info,
                            setLoading,navigation) 
                            }} title={'Continue'} />
                        <View style={{
                            width: 290,
                            alignSelf: 'center',
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}>
                            <Text style={{ textAlign: 'center', fontWeight: '600', color: colors.black }}>By clicking <Text style={{ color: colors.primary }}>Continue</Text>, you agree to cash's <Text style={{ color: colors.primary }}>Terms of service</Text> and acknowledge the <Text style={{ color: colors.primary }}>privacy policy</Text></Text>
                            <View style={{ marginVertical: 31 }}>
                                <Text style={{ color: colors.black, fontWeight: '600' }}>You have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ alignSelf: 'center' }}><Text style={{ color: colors.primary, fontWeight: '600' }}> Login</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </View>

            </ScrollView>

        </ImageBackground>

    )
}

export default Signup;
const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 100,
    },
    title: {
        fontWeight: '700',
        size: 16,
        color: colors.black
    },
    input: {
        marginVertical: 5
    },
})
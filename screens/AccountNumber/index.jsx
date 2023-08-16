import React, { useRef, useState } from 'react'
import { SafeAreaView, StatusBar, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { colors } from '../../constants/colors'
import { Text } from 'react-native'
import NavigationHeader from '../../components/NavigationHeader'
import Clipboard from '@react-native-clipboard/clipboard';
import { useToast } from "react-native-toast-notifications";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AccountNumber({navigation}) {
    const [hasAccountNumber, setHasAccountNumber] = useState(true)
    const [hasKyc, setHasKyc] = useState(true)
    const modalizeRef = useRef(null);
    const onOpen = () => {
        modalizeRef.current.open();
    };
    const toast = useToast()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar backgroundColor={colors.primary} />
            <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={'Account Number'} />
            <View style={{ padding: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    {hasAccountNumber ?
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                             <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                     alignItems: 'center',
                            }}
                                onPress={() => {
                                    Clipboard.setString('Lorem Ipsum');
                                    toast.show("Copied to clipboard.",
                                        {
                                            type: 'default',
                                            placement: "bottom",
                                            duration: 4000,
                                            offset: 30,
                                            animationType: "slide-in",
                                        });
                                }}
                            >
                    <Text style={{color:colors.primary,fontFamily:'Poppins',fontWeight:'600',fontSize:40}}>233887889T9 <MaterialCommunityIcons name={'clipboard-multiple-outline'} size={25} color={colors.black} /> </Text>

                            </TouchableOpacity>

                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#717070', fontFamily: 'Poppins' }}> Bank Name</Text>
                            <Text style={{ marginTop: 20, marginBottom: -50, textAlign: 'center', fontFamily: 'Poppins', color: colors.black, fontWeight: '600' }}>Money transfers sent to this number will automatically top up your  wallet.</Text>
                        </View>
                        : <Text style={{ marginVertical: 20, textAlign: 'center', fontFamily: 'Poppins', color: colors.black, fontWeight: '600' }}>Seems like you have not generated your account number. Please click on the button below to generate</Text>

                    }
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => { 
                            if (hasAccountNumber) {

                            } else {
                                if (!hasKyc) {
                                    // onOpen()
                                    setHasKyc(false)
                                }
                            }
                        }}
                        style={styles.button}>
                        <Text style={styles.text}>{hasAccountNumber && hasKyc?"Share Details":'Generate'}</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
            {!hasKyc && <View style={{
                height: 180,
                width: Dimensions.get('screen').width,
                backgroundColor: '#FF3A3A',
                // justifyContent:'center',
                // alignItems:'center',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                padding: 10
            }}>
                <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, fontWeight: '700' }}>Error</Text>
                <Text style={{ color: 'white', fontFamily: 'Poppins' }}>Seems you have not completed your KYC.Please complete your KYC.</Text>
                <TouchableOpacity

                    style={styles.buttonv}>

                    <Text style={styles.textv}>KYC</Text>
                </TouchableOpacity>
            </View>}
        </SafeAreaView>
    )
}

export default AccountNumber;
const styles = StyleSheet.create({
    button: {
        height: 47,
        width: Dimensions.get('screen').width - 20,
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // marginHorizontal:5
    },
    buttonv: {
        height: 47,
        width: Dimensions.get('screen').width - 20,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // marginHorizontal:5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins'
    },
    textv: {
        color: '#FF3A3A',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins'
    },
})
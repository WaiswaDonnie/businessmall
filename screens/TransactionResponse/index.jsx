import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton'
import { colors } from '../../constants/colors'
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import { useToast } from "react-native-toast-notifications";

function TransactionResponse({ route, navigation }) {
    const toast = useToast();
    // const [status,setStatus] = useState('failed')
    const { status } = route.params;
    return (

        <View style={{ flex: 1, padding: 10, justifyContent: 'space-between', backgroundColor: 'white' }}  >
            <View>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {status === "success" ? <Octicons name={'verified'} size={100} color={'#008B0E'} /> : <MaterialCommunityIcons name={'alert-decagram'} size={100} color={'#BB0B0B'} />}
                <Text style={{ color: status !== "success" ? '#BB0B0B' : '#008B0E', fontSize: 20, fontWeight: '700', fontFamily: 'Poppins' }}>{status !== "success" ? 'Transaction failed' : 'Transaction Successful'}</Text>
                <Text style={{ color: colors.black, fontSize: 16, fontWeight: '500', fontFamily: 'Poppins' }}>{status === "success" ? 'Your Transaction has been processed sucessfully ' : 'We could not process this transaction at the moment.'}</Text>
            </View>

            {status !== "success" && <View style={{ backgroundColor: '#F4F4F4', height: 180, borderRadius: 20, padding: 20 }}>
                <Text style={{ fontWeight: '800', fontSize: 18, fontFamily: 'Poppins', color: colors.primary }}>Next Step:</Text>
                <Text style={{ fontWeight: '700', color: colors.black, marginVertical: 10, fontSize: 14, alignSelf: 'center', textAlign: 'center' }}>Contact support with the transaction ID below and your issue will be resolved in <Text>24 hours</Text></Text>
                <TouchableOpacity
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
                    style={{
                        height: 47,
                        width: '100%',
                        backgroundColor: colors.white,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                    <Text style={{ color: colors.primary, fontFamily: 'Poppins', fontWeight: '600', fontSize: 14 }}>233887889T989900E0 <MaterialCommunityIcons name={'clipboard-multiple'} size={15} color={colors.primary} /> </Text>

                </TouchableOpacity>
            </View>}


            <View style={{ marginTop: 20 }} >
                {status === "success" && <TouchableOpacity
                onPress={()=>{
                    navigation.push('TransactionReceipt')
                }}
                style={styles.button}>
                    <Text style={styles.text}>View Receipt</Text>
                </TouchableOpacity>}

                <View>
                    {status === "failed" && <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Support</Text>
                    </TouchableOpacity>}
                    {status === "failed" && <TouchableOpacity onPress={() => {
                        navigation.replace('Dashboard')
                    }} style={styles.buttonv}>
                        <Text style={styles.textv}>Home</Text>
                    </TouchableOpacity>}
                </View>

            </View>
        </View>

    )
}

export default TransactionResponse
const styles = StyleSheet.create({
    button: {
        height: 47,
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // marginHorizontal:5
    },
    buttonv: {
        height: 47,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: colors.primary,

        marginBottom: 70,
        // marginHorizontal:5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins'
    },
    textv: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins'
    },
})
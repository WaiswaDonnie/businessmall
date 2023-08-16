import { Text } from '@rneui/base'
import React, { useRef } from 'react'
import { View, ScrollView, Image, SafeAreaView, StatusBar, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Wallet from '../../components/wallet'
import { colors } from '../../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import TransactionList from '../../components/transactionList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationHeader from '../../components/NavigationHeader'
import CustomInput from '../../components/CustomInput'
import PrimaryButton from '../../components/PrimaryButton'
import CustomSelect from '../../components/customSelect'

function SendBank({ navigation }) {
    const banks = ["Equity Bank","Stanbic Bank"]
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar backgroundColor={colors.primary} />
            <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={'Send to Bank Account'} />
           <View style={{justifyContent:'space-between',flex: 1,padding: 10 }}>
           <ScrollView style={{  }}>
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View>
                        <View style={{ marginTop: 20, justifyContent: 'space-between', }}>
                            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                            <Text>Select Bank</Text>
                            <Text style={{color:colors.primary,fontWeight:'700',fontFamily:'Poppins'}}>Balance: <Text style={{color:colors.primary,fontWeight:'bold',fontFamily:'Poppins'}}>123123</Text></Text>
                            </View>
                            <CustomSelect options={banks} value={''} style={{ width: '100%', borderColor: colors.primary, borderWidth: 2, height: 40 }} />
                            {/* <CustomInput autoFocus={true} type={'number-pad'} placeholder={'@username'} value={''} onChange={(text) => {
                                console.log(text)
                            }} style={{ width: '100%', borderColor: colors.primary, borderWidth: 2, height: 40 }} /> */}

                        </View>
                        <View style={{ marginTop: 20, justifyContent: 'space-between', }}>
                            <CustomInput placeholder={'Account Number'} value={''} style={{ width: '100%',borderWidth: 1, height: 40 }} />
                            <Text style={{marginTop:10,color:colors.primary,fontFamily:'Poppins',fontWeight:'700'}}>Simon</Text>
                        </View>
                        <View style={{ marginTop: 10, justifyContent: 'space-between', }}>
                             <CustomInput autoFocus={true} type={'number-pad'} placeholder={'Amount'} value={''} onChange={(text) => {
                                console.log(text)
                            }} style={{ width: '100%', borderWidth: 1, height: 40 }} />

                        </View>
                        <View style={{ marginTop: 20, justifyContent: 'space-between', }}>
                             <CustomInput placeholder={'Narration'} value={''} onChange={(text) => {
                                console.log(text)
                            }} style={{ width: '100%', borderWidth: 1, height: 40 }} />

                        </View>
                    </View>



                </View>




            </ScrollView>


            <TouchableOpacity onPress={()=>navigation.push('ConfirmTransaction')} style={styles.button}>
                <Text style={styles.text}>SEND</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}

export default SendBank;
const styles = StyleSheet.create({
    button: {
        height: 47,
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
       
        // marginHorizontal:5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Poppins'
    },
    container: {
        height: 58,
        backgroundColor: colors.primary,
        borderRadius: 8,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginVertical: 6,

    },
    amount: {
        fontSize: 12,
        color: colors.primary,
        fontWeight: '800',
        fontFamily: 'Poppins'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        height: 30,
        width: 30,
        borderRadius: 50,
        backgroundColor: '#D3DCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBackground: {
        height: 18,
        width: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 12,
        width: 12,
    },
    detailsContainer: {
        marginLeft: 5,
    },
    name: {
        fontWeight: '700',
        fontSize: 14,
        color: colors.white,
        fontFamily: 'Poppins'
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 10,
        color: '#C6C6C6',
        fontFamily: 'Poppins'
    },
    // Additional styles
})
import { Text } from '@rneui/base'
import React, { useRef, useState } from 'react'
import { View, ScrollView, Image, SafeAreaView, StatusBar, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'
import NavigationHeader from '../../../../components/NavigationHeader'
import CustomInput from '../../../../components/CustomInput'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function MobileMoney({ navigation,route }) {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const [country,setCountry] = useState("Uganda")
    const [phone,setPhone] = useState("")
    const pickerRef = useRef();
    const {name} = route.params

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
            <StatusBar backgroundColor={colors.primary} />
            <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={`Mobile Money`} />
           <View style={{justifyContent:'space-between',flex: 1,padding: 10 }}>
           <ScrollView style={{  }}>
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View>

                        {/* <Text style={{fontSize:15,color:colors.black,fontWeight:'700'}}>Enter your {name} mobile money number</Text> */}
                        <TouchableOpacity  style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.iconContainer}>
                                <View style={styles.iconBackground}>
                                    <MaterialIcons name={'phone-iphone'} size={18} color={colors.primary} />
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={{fontSize:12}}>Add a new payment method</Text>
                            </View>
                        </View>
                        <MaterialIcons name={'edit'} size={14} color={colors.primary} />
                    </TouchableOpacity>
                        <View style={{ marginTop: 20, justifyContent: 'space-between', }}>
                            <Text style={{color:colors.black,fontWeight:'500'}}>Enter Phone Number</Text>
                            <CustomInput placeholder={'Phone number'} type={"phone"} value={phone} onChange={(e) => { setPhone(e) }} style={[styles.input]} />
 
                        </View>
                    </View>
                </View>
            </ScrollView>


            <TouchableOpacity onPress={()=>{
                if(country==="Nigeria"){
                    navigation.push('AddPaymentMethodNigeria')
                }else{
                    navigation.push('AddPaymentMethod')
                }
            }} style={styles.button}>
                <Text style={styles.text}>CONTINUE</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}

export default MobileMoney;
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
        padding:20,
        // backgroundColor: colors.primary,
        borderRadius: 8,
        // shadowColor: 'gray',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 2,
        // elevation: 14,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // paddingHorizontal: 10,
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
        marginRight:20
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
        color: colors.primary,
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
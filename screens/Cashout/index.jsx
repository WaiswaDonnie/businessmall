import { Text } from '@rneui/base'
import React, { useRef, useState } from 'react'
import { View, ScrollView, Image, SafeAreaView, StatusBar, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import NavigationHeader from '../../components/NavigationHeader'
import CustomInput from '../../components/CustomInput'
import PrimaryButton from '../../components/PrimaryButton'
import CustomSelect from '../../components/customSelect'

function Cashout({ navigation }) {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const [country,setCountry] = useState("Uganda")
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
            <StatusBar backgroundColor={colors.primary} />
            <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={'Cash Out'} />
           <View style={{justifyContent:'space-between',flex: 1,padding: 10 }}>
           <ScrollView style={{  }}>
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View>

                        <Text style={{fontSize:15,color:colors.black,fontWeight:'700'}}>Add funds with your favorite payment method</Text>

                        <View style={{ marginTop: 20, justifyContent: 'space-between', }}>
                            <Text style={{color:colors.black,fontWeight:'500'}}>Enter amount</Text>
                            <CustomInput autoFocus={true} type={'number-pad'} placeholder={'Enter amount'} value={''} onChange={(text) => {
                                console.log(text)
                            }} style={{ width: '100%', marginVertical:5,borderColor: colors.primary, borderWidth: 2, height: 40 }} />

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

export default Cashout;
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
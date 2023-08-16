import React from 'react'
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import NavigationHeader from '../../components/NavigationHeader'
import { Text } from 'react-native'
import { colors } from '../../constants/colors'

function Referrals({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationHeader showBack={true} label={'Referrals'} onPress={() => navigation.goBack()} />
            <Image style={{ alignSelf: 'center' }} source={require('../../assets/images/refer.png')} />
            <Text style={{ color: colors.primary, fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Refer and Earn</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ color: colors.primary, fontFamily: 'Poppins', fontWeight: 'bold' }}>with</Text>
                <Image style={{ marginHorizontal: 5, width: 100, height: 25 }} source={require('../../assets/images/logo.png')} />


            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{ color: colors.primary, fontFamily: 'Poppins', fontWeight: 'bold' }}>Refer to your friends and family to  </Text>
                <Text style={{ color: colors.primary,alignSelf:'center', fontFamily: 'Poppins', fontWeight: 'bold' }}>and  get rewarded for every signup</Text>
            </View>
            <View style={{margin:25,alignSelf:'center',padding:25,backgroundColor:'#001E9A24',borderRadius:10}}>
                <Text style={{color: colors.primary,alignSelf:'center', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                Earn a $1 reward for each new user 
who registers using your unique referral 
code and completes a transaction.
                 </Text>
            </View>
            <View style={{padding:25}}>
            <TouchableOpacity onPress={()=>navigation.push('Referrals')} style={styles.button}>
                <Text style={styles.text}>CONTINUE</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Referrals;
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
})
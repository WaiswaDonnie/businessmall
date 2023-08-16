import { Text } from '@rneui/base'
import React from 'react'
import { View, ScrollView, Image, SafeAreaView, StatusBar, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Wallet from '../../components/wallet'
import { colors } from '../../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import TransactionList from '../../components/transactionList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationHeader from '../../components/NavigationHeader'

function Send({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar backgroundColor={colors.primary} />
                <NavigationHeader showBack={true} onPress={()=>{
                    navigation.goBack()
                   
                }} label={'Send Money'} />
            <ScrollView style={{ padding: 10 }}>

                <Wallet />


                <View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 15, color: colors.black }}>Send</Text>

                    </View>

                    <TouchableOpacity onPress={()=>{
                            navigation.push('SendUser')
                            // console.log(navigation)
                    }} style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.iconContainer}>
                                <View style={styles.iconBackground}>
                                <MaterialCommunityIcons name={'account'} size={14} color={colors.primary} />
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>Send to User</Text>
                                <Text style={styles.subtitle}>Send to any  Cash User for free</Text>
                            </View>
                        </View>
                     </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        navigation.push('SendBank')
                        // console.log(navigation)
                }} style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.iconContainer}>
                                <View style={styles.iconBackground}>
                                <MaterialCommunityIcons name={'bank-check'} size={14} color={colors.primary} />
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>Send to Bank account</Text>
                                <Text style={styles.subtitle}>Send money to a local bank account</Text>
                            </View>
                        </View>
                     </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                        navigation.push('Cashout')
                        // console.log(navigation)
                }} style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.iconContainer}>
                                <View style={styles.iconBackground}>
                                    <Image source={require('../../assets/images/cashout.png')} style={styles.icon} />
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>Cash  Out</Text>
                                <Text style={styles.subtitle}>Cash out money from your account</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>




            </ScrollView>
        </SafeAreaView>
    )
}

export default Send;
const styles = StyleSheet.create({
    button: {
        height: 80,
        width: Dimensions.get('screen').width / 2.2,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal:5
    },
    text: {
        color: colors.white,
        fontSize: 9,
        fontWeight: '600'
    },
    container: {
        height: 58,
        backgroundColor: '#fff',
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
        marginVertical: 6
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
        color: colors.black,
        fontFamily: 'Poppins'
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 10,
        color: '#717070',
        fontFamily: 'Poppins'
    },
    // Additional styles
})
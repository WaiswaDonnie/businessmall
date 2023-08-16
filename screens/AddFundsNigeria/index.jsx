import { Text } from '@rneui/base'
import React from 'react'
import { View, ScrollView, Image, SafeAreaView, StatusBar, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Wallet from '../../components/wallet'
import { colors } from '../../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import TransactionList from '../../components/transactionList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavigationHeader from '../../components/NavigationHeader'

function AddFundsNigeria({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar backgroundColor={colors.primary} />
                <NavigationHeader onPress={()=>navigation.goBack()}  showBack={true} label={'Add funds'} />
            <ScrollView style={{ padding: 10 }}>

                <View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 15, color: colors.black,marginBottom:20 }}>Choose a Funding method</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        navigation.push('AccountNumber')
                    }} style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.iconContainer}>
                                <View style={styles.iconBackground}>
                                <MaterialIcons name={'phone-iphone'} size={14} color={colors.primary} />
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>Phone Number</Text>
                             </View>
                        </View>
                        <MaterialIcons name={'chevron-right'} size={24} color={colors.primary} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.push('AccountNumber')} style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.iconContainer}>
                                <View style={styles.iconBackground}>
                                <MaterialCommunityIcons name={'account'} size={14} color={colors.primary} />
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>Account Number</Text>
                            </View>
                        </View>
                        <MaterialIcons name={'chevron-right'} size={24} color={colors.primary} />
                     </TouchableOpacity>
                   

                </View>




            </ScrollView>
        </SafeAreaView>
    )
}

export default AddFundsNigeria;
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
        color: colors.primary,
        fontFamily: 'Poppins',
        marginLeft:30
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 10,
        color: '#717070',
        fontFamily: 'Poppins'
    },
    // Additional styles
})
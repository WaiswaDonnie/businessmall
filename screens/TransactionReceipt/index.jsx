import React from 'react'
import { ScrollView, StyleSheet, View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors'
import Octicons from 'react-native-vector-icons/Octicons';

function TransactionReceipt({navigation}) {
    return (
        <ScrollView >
            <StatusBar backgroundColor={colors.primary} />
            <View style={{ flex: 1,padding: 10}}>
                {/* <View> */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
                        <Image style={{width:150,height:100}} source={require('../../assets/images/logo.png')} />
                    </View>
                    <View>
                        <View style={styles.list}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Octicons name={'verified'} size={24} color={'#008B0E'} />
                                <Text style={{ fontWeight: '600', fontSize: 17, color: '#008B0E', marginHorizontal: 5 }}>Success</Text>
                            </View>
                            <Text style={styles.label}>{new Date().toISOString()}</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.info}>From</Text>
                            <Text style={styles.label}>To</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.info}>To</Text>
                            <Text style={styles.label}>All workers</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.info}>Amount</Text>
                            <Text style={styles.label}>Exchange rate</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.label}>Transaction Type</Text>
                            <Text style={styles.info}>Bulk Payments</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.label}>Transaction ID</Text>
                            <Text style={styles.info}>642332342</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.label}>Transaction Date</Text>
                            <Text style={styles.info}>{new Date().toISOString()}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Comment</Text>
                            <Text style={styles.label}>You have sucessfully paid all your workers.</Text>
                        </View>
                    </View>

                    <View style={{marginTop:50}}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Download Receipt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            navigation.replace('Dashboard')
                        }} style={styles.buttonv}>
                            <Text style={styles.textv}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* </View> */}
        </ScrollView>
    )
}

export default TransactionReceipt
const styles = StyleSheet.create({
    info: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Poppins',
        color: colors.black
    },
    label: {

        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Poppins',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingBottom: 5,
        marginVertical: 4
    },
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
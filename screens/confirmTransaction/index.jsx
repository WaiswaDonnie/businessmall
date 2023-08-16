import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from 'react-native'
import NavigationHeader from '../../components/NavigationHeader'
import { colors } from '../../constants/colors'
import VerifyPin from '../../components/verifyPin'
import ProcessingTransaction from '../../components/ProcessingTransaction'

function ConfirmTransaction({navigation,route}) {
    const [input, setInput] = useState("")
    const [loading,setLoading] = useState(false)
    const {total,users} = route?.params

    useEffect(()=>{
     },[])


     if(loading)
     return <ProcessingTransaction navigation={navigation} />


     const handleVerification = ()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            navigation.replace('TransactionResponse',{status: 'success'})
        },3000)
     }

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
            <StatusBar backgroundColor={colors.primary} />
            <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={'Confirm Transaction'} />
            <View style={{ padding: 10 }}>
                <View style={styles.list}>
                    <Text style={styles.label}>From</Text>
                    <Text style={styles.info}>Business WALLET</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.label}>Rate</Text>
                    <Text style={styles.info}>0.01</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.label}>Amount</Text>
                    <Text style={styles.info}>{total?.toLocaleString()}</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.label}>No of workers</Text>
                    <Text style={styles.info}>{users}</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.label}>Reason</Text>
                    <Text style={styles.info}>Salary</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '800', alignSelf: 'center', color: colors.primary, fontSize: 20, fontFamily: 'Poppins' }}>Enter your PIN</Text>
                <VerifyPin
                onPress={handleVerification}
                handlePress={(p) => {
                    setInput((prevInput) => prevInput + p)
                }} handleDelete={() => {
                    setInput((prevInput) => prevInput.slice(0, -1));

                }} setInput={setInput} input={input} />

            </View>
        </SafeAreaView>
    )
}

export default ConfirmTransaction;
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
    }
})
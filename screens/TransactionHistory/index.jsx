import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import TransactionList from '../../components/transactionList'
import CustomInput from '../../components/CustomInput'
import NavigationHeader from '../../components/NavigationHeader'

function TransactionHistory({ navigation }) {
    const transactions = [1,1,1,1,1,,1,1,2,2,2,2,2,2,1,1,1,1,1,]
    const [searchTerm,setSearchTerm] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationHeader onPress={()=>navigation.replace('Dashboard')}  showBack={true} label={'Transaction History'}/>
            <ScrollView style={{padding:10}}>
            <CustomInput style={{height:40}} placeholder={'Search'} value={searchTerm} onChange={()=>setSearchTerm('the')} />

                {transactions.map((transaction,index) => (
                    <TransactionList key={index} onPress={() => navigation.push('TransactionReceipt')} />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default TransactionHistory
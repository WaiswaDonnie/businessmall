import { Text } from '@rneui/base'
import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, Image, SafeAreaView, FlatList, StatusBar, Touchable, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Wallet from '../../components/wallet'
import { colors } from '../../constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionList from '../../components/transactionList'
import { GlobalContext } from '../../Context/GlobalContext'

function Home({ navigation }) {
    const [country, setCountry] = useState("Uganda")
    const { user, getUserData } = useContext(GlobalContext)

    const banking = [
        { name: 'Pay workers', icon: <FontAwesome5 name={'hand-holding-usd'} size={30} color={colors.yellow} />, screen: 'SendUser' },
        { name: 'Card', icon:<Ionicons name={'wallet'} size={35} color={colors.yellow} />},
        { name: 'Top-up', icon: <FontAwesome5 name={'coins'} size={30} color={colors.yellow} />, screen: 'AddFunds' },
        { name: 'Credit', icon: <FontAwesome5 name={'money-check-alt'} size={25} color={colors.yellow} />, screen: 'SendUser' },
    ]
    // 
    useEffect(() => {
        getUserData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFEF2' }}>
            <StatusBar backgroundColor={colors.primary} />
            <Wallet navigation={navigation} country={country} />
            <ScrollView >
             


                <Text style={{ fontSize: 25, justifyContent: 'center', alignSelf: 'center', fontWeight: '700', marginTop: 40 }}>SERVICES</Text>

                <View style={{ paddingVertical: 10,paddingHorizontal:80 }}>
                    <FlatList
                        data={banking}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(prop) => (
                            <View>
                                <TouchableOpacity onPress={() => navigation.push(prop.item.screen)} style={syles.button}>
                                    <View>
                                        <View style={{ width: 50, alignSelf: 'center', height: 50, justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:colors.yellow,borderRadius:50}}>
                                            {/* <AntDesign name={'pluscircleo'} size={25} color={colors.yellow} /> */}
                                            {prop.item.icon}
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <Text style={syles.text}>{prop.item.name}</Text>
                            </View>
                        )}
                        horizontal={false}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />

                </View>

                {/* <View style={{ borderColor: colors.primary, borderWidth: 1, marginVertical: 10 }} /> */}




                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{width:'35%', borderColor: colors.primary, borderWidth: 1, marginVertical: 10 }} />
                        <Text style={{marginHorizontal:5,}}>Recent Transactions</Text>
                        <View style={{width:'50%', borderColor: colors.primary, borderWidth: 1, marginVertical: 10 }} />

                    </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>


                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Sent Carla</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/55.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Paid Sam</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/65.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Paid Martin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/85.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Paid Sheila</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/15.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Paid Sunita</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Paid Mark</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center' }}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                            <Text>Paid Steve</Text>
                        </TouchableOpacity>


                    </ScrollView>

                </View>
                   
                {/* <TouchableOpacity onPress={()=>navigation.push('Send')} style={syles.button}>
                        <View>
                            <View style={{ width: 33,alignSelf:'center', marginBottom:8, height: 33, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: colors.white }}>
                                <AntDesign name={'pluscircleo'} size={25} color={colors.primary} />
                            </View>
                            <Text style={syles.text}>Send Money</Text>
                        </View>
                    </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={()=>{
                        if(country==="Nigeria")
                        navigation.push('AddFundsNigeria')
                        else
                        navigation.push('AddFunds')
                    }}  style={syles.button}>
                        <View>
                            <View style={{ width: 33,alignSelf:'center', marginBottom:8, height: 33, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: colors.white }}>
                                <AntDesign name={'pluscircleo'} size={25} color={colors.primary} />
                            </View>
                            <Text style={syles.text}>Add Money</Text>
                        </View>
                    </TouchableOpacity> */}
                {/* <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'500',fontSize:15,color:colors.black}}>Recent Transactions</Text>
                   <TouchableOpacity onPress={() => navigation.push('History')}>
                   <Text style={{fontWeight:'500',fontSize:12,color:colors.primary}}>View all</Text>
                   </TouchableOpacity>
                </View>

                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                <TransactionList onPress={() => navigation.push('TransactionReceipt')} />
                 
                </View> */}




            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
const syles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 10
    },
    text: {
        color: '#667',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: '700'
    }
})
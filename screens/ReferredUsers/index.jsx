import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { colors } from '../../constants/colors';
import NavigationHeader from '../../components/NavigationHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Clipboard from '@react-native-clipboard/clipboard';
import { useToast } from "react-native-toast-notifications";
import Share from 'react-native-share';

const ReferredUsers = ({ navigation }) => {
    const toast = useToast()
    // Sample data
    const data = [
        ['John Doe', 'USA', '2022-02-28'],
        ['Jane Smith', 'Canada', '2022-03-15'],
        ['Mark Johnson', 'Australia', '2022-04-01'],
        // Add more rows as needed
    ];

    // Table headers
    const tableHead = ['Name', 'Country', 'Date'];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationHeader label={'Referrals'} showBack={true} onPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <ImageBackground style={{ height: 80, marginTop: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} source={require('../../assets/images/walletbg.png')}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 12, color: colors.white, }}>Referral code</Text>
                        <TouchableOpacity onPress={() => {
                            Clipboard.setString('Lorem Ipsum');
                            toast.show("Copied to clipboard.",
                                {
                                    type: 'default',
                                    placement: "bottom",
                                    duration: 2000,
                                    offset: 30,
                                    animationType: "slide-in",
                                });
                        }}>

                            <Text style={{ fontSize: 30, color: colors.white, fontWeight: 'bold' }}>simon1234
                                <MaterialCommunityIcons name='content-copy' size={20} />

                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => {
                            Share.open({
                                title: 'cash referral Code',
                                message: 'simon1234'
                            })
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    err && console.log(err);
                                });
                        }} style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5
                        }}>



                            <Text style={{ fontSize: 15, color: colors.white, flexDirection: 'row', alignItems: 'center' }}>
                                share
                                <MaterialCommunityIcons name='share' size={20} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 20
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        heoght: 50,
                        width: Dimensions.get('screen').width / 2.2,
                        borderRadius: 10,
                        marginHorizontal: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10
                    }}>
                        <Text style={{ fontSize: 30, color: colors.white, fontWeight: 'bold' }}>45</Text>
                        <Text style={{ color: colors.white }}>Total Referrals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        heoght: 50,
                        width: Dimensions.get('screen').width / 2.2,
                        borderRadius: 10,
                        marginHorizontal: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10
                    }}>
                        <Text style={{ fontSize: 30, color: colors.white, fontWeight: 'bold' }}>45</Text>
                        <Text style={{ color: colors.white }}>Total Referrals</Text>
                    </TouchableOpacity>

                </View>
                <Table borderStyle={styles.borderStyle}>
                    <Row data={tableHead} style={styles.header} textStyle={styles.headerText} />
                    {data.map((rowData, index) => (
                        <Row key={index} data={rowData} style={styles.row} textStyle={styles.text} />
                    ))}
                </Table>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    borderStyle: { borderWidth: 1, borderColor: '#C1C0B9' },
    header: { height: 40, backgroundColor: '#f1f8ff' },
    headerText: { textAlign: 'center', fontWeight: 'bold' },
    row: { height: 30, },
    text: { textAlign: 'center', color: colors.primary },
});

export default ReferredUsers;

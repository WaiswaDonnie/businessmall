import { Text } from '@rneui/base';
import React, { useEffect,useState} from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Wallet({navigation,country}) {
    const [localUser,setLocalUser] = useState(null)
    const getUser = async () => {
        const res = await AsyncStorage.getItem('@auth_user');
        const token = await AsyncStorage.getItem('@auth_token');
         if (token && res) {
          setLocalUser(JSON.parse(res));
          setToken(token);
        }
      };
      useEffect(()=>{
        getUser()
      },[])
    return (
        <View style={styles.container} source={require('../../assets/images/walletbg.png')}>
 
                <View style={{ flexDirection: 'row',padding:20, alignItems: 'center',justifyContent:'space-between' }}>
                    {/* <Image style={{ width: 23, height: 16 }} source={require('../../assets/images/kenyaflag.png')} /> */}
                    <Text style={{color:'white',fontWeight:'700'}}>{localUser?.legalName}</Text>
                    <View style={{paddingHorizontal:20,paddingVertical:5,alignSelf:'center',backgroundColor:colors.secondary,borderRadius:20}}>
                        <Text style={{color:colors.primary}}>Business</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',padding:20,alignItems:'center',justifyContent:'space-between',}}>
                    <Text style={{color:colors.secondary,fontSize:25}}>****</Text>
                    <Text style={{color:colors.secondary,fontSize:25}}>****</Text>
                    <Text style={{color:colors.secondary,fontSize:25}}>****</Text>
                    <Text style={{color:colors.secondary,fontSize:25}}>8975</Text>
                </View>
                <View style={{height:100,backgroundColor:colors.primary,borderRadius:10,padding:20}}>
                <Text style={{color:'white',fontWeight:'700'}}>Balance</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:colors.yellow,fontWeight:'700',fontSize:20}}>UGX 4,000,000</Text>
              <Text style={{color:colors.yellow,fontWeight:'700',fontSize:15}}>08/23</Text>
              </View>

                </View>
                {/* <Text style={{fontSize:24,color:colors.secondary,fontWeight:'600'}}>{'UGX '+'4,000,000'.toLocaleString()}</Text> */}
            
            {/* <TouchableOpacity onPress={()=>{
                        if(country==="Nigeria")
                        navigation.push('AddFundsNigeria')
                        else
                        navigation.push('AddFunds')
                    }}  style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{color:'white',fontWeight:'700'}}>Add money</Text>
                <View style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:50,height:12,width:12,marginHorizontal:5,marginTop:4}}>
                <AntDesign name={'pluscircleo'} size={10} color={colors.primary} />
                </View>

            </TouchableOpacity> */}
        </View>
    )
}

export default Wallet;
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: Dimensions.get('screen').width - 10,
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:10,
        elevation:10,
        // flexDirection:'row',
        // justifyContent:'space-between',
        // alignItems:'center',
        // padding:20,
        backgroundColor:'#222E50E0'
    }
})
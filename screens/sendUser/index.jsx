import React, { useState } from 'react'; // Import useState
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Button,  // Import Button component
  Platform,
  ActivityIndicator, // 
} from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import { colors } from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationHeader from '../../components/NavigationHeader';
import PrimaryButton from '../../components/PrimaryButton';

function SendUser({ navigation }) {
  const [selectAll, setSelectAll] = useState(false); // State to manage Select All option
  const [loading,setLoading] = useState(false);
  const [loaded,setLoaded] = useState(false);
  const users = [
    { id: 1, name: 'Simon Ugorji', username: '@simon',salary:90000 },
    { id: 10, name: 'John Doe', username: '@john',salary:600000 },
    { id: 2, name: 'John Doe', username: '@john',salary:700000 },
    { id: 4, name: 'John Doe', username: '@john',salary:100000 },
    { id: 8, name: 'John Doe', username: '@john',salary:1500000 },
    // Add more users as needed
  ];

  const handleUserSelect = (user) => {
    // Implement user selection logic here
    console.log('Selected user:', user);
    navigation.push('SendUserOptions',{
      userInfo:{
        users:users,
        all:selectAll
      }
    })
  };


  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    // Implement logic to select/deselect all users here
  };

  const handleCSVUpload = async() => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    setLoading(true);
  if(res){
    setTimeout(()=>{
      setLoading(false);
            setLoaded(true);
    },4000)
  }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.primary} />
      <NavigationHeader onPress={() => navigation.goBack()} showBack={true} label={'Pay Workers'} />
      <ScrollView style={{ padding: 10 }}>
      <View style={styles.selectAllContainer}>
          {loaded && <TouchableOpacity onPress={handleSelectAll} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, selectAll && styles.checked]} />
            <Text style={styles.selectAllText}>Select All</Text>
          </TouchableOpacity>}
        </View>
        <View>
          {loaded? users.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => handleUserSelect(user)}
              style={{
                height: 58,
                backgroundColor: selectAll?colors.primary:colors.white,
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
              }}>
              <View style={styles.content}>
                <Image style={styles.iconContainer} source={require('../../assets/images/default.png')} />
                <View style={styles.detailsContainer}>
                  <Text style={{
                    fontWeight: '700',
                    fontSize: 14,
                    color: selectAll? colors.white:colors.primary,
                    fontFamily: 'Poppins'
                  }}>{user.name}</Text>
                  <Text style={styles.subtitle}>{user.username}</Text>
                </View>
              </View>
              <Text style={{ color: selectAll? colors.white:colors.primary,}}>UGX {user.salary.toLocaleString()} </Text>
              {/* <MaterialCommunityIcons name={'chevron-right'} size={25} color={colors.white} /> */}
            </TouchableOpacity>
          )):
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height/2,
            width: Dimensions.get('window').width,
          }}>
           {!loading &&  <Text>No workers selected</Text> }
          </View>
          }
        </View>
        {/* Rest of your code */}
      </ScrollView>
      <View style={styles.uploadButtonContainer}>
       
        {loading?<View>
          <ActivityIndicator size={40} />
          <Text>Analysing file...😊 </Text>
        </View>:<Button title="Upload CSV" onPress={handleCSVUpload} />}
      </View>
      <View>
        {loaded && <TouchableOpacity
        onPress={()=>{
          handleUserSelect()
        }}
        style={{
          backgroundColor:colors.primary,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          // width:Dimensions.get('screen').width-10,
          borderRadius:10,
          margin:50
        }}>
          <Text style={{color:"white"}}>PROCEED</Text>
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  );
}

export default SendUser;
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
    
    selectAllContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 10,
      },
      checkboxContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        alignSelf:'flex-end'
      },
      checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.primary,
        marginRight: 5,
      },
      checked: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
      },
      selectAllText: {
        fontSize: 14,
        color: colors.primary,
        fontWeight: '600',
      },
      uploadButtonContainer: {
        alignSelf: 'center',
        marginBottom: Platform.OS === 'ios' ? 20 : 200, // Adjust margin for iOS
      },
})
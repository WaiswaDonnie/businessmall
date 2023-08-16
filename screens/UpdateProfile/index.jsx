import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import PrimaryButton from '../../components/PrimaryButton';
import { GlobalContext } from '../../Context/GlobalContext';
import NavigationHeader from '../../components/NavigationHeader';
import { colors } from '../../constants/colors';

const UpdateProfile = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading,setLoading] =useState(false)

    const {updateProfile} = useContext(GlobalContext)

    const handleSave = () => {
        // Perform saving logic here
        console.log('Legal Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phone);
    };

    return (
     <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={'Profile'}/>
         <ScrollView >
          <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Legal Name</Text>
                <CustomInput
                    placeholder="Enter your legal name"
                    value={name}
                    onChange={(e)=>setName(e)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <CustomInput
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <CustomInput
                type={'phone'}
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e)=>setPhone(e)}
                    style={styles.input}
                />
            </View>
            <PrimaryButton loading={loading} onPress={() => {
                let info = {
                    "legalName": name,
                    "email": email,
                    "phone": phone,
                }
                updateProfile(info,
                    setLoading, navigation)
            }}
                title={'Update Profile'}

            />    
            
            </View>
      </ScrollView>
     </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
       
        marginBottom: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        color:colors.primary,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
    },
});

export default UpdateProfile;

import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, SafeAreaView} from 'react-native';
import { colors } from '../../constants/colors';
import NavigationHeader from '../../components/NavigationHeader';

const Settings = ({navigation}) => {
  // Array of values
  const settingsValues = [
    {
      name:'Profile',
      screen:"UpdateProfile",
    },
    {
      name:'Change Password',
      screen:"ChangePassword",
    },
    {
      name:'Change Transaction PIN',
      screen:"ChangePin",
    },
  ];

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <NavigationHeader onPress={()=>navigation.goBack()} showBack={true} label={'Settings'}/>
    <View style={styles.container}>
      {settingsValues.map((value, index) => (
        <TouchableOpacity onPress={()=>navigation.push(value.screen)} key={index} style={styles.settingsItemContainer}>
          <Text style={styles.settingsItem}>{value.name}</Text>
          { <View style={styles.separator} />}
        </TouchableOpacity>
      ))}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingsItemContainer: {
    marginBottom: 12,
  },
  settingsItem: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color:colors.primary,
    paddingVertical:10,
    fontWeight:'700'
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default Settings;

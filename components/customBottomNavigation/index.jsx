import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../constants/colors';

function CustomBottomNavigation({ navigation,activeTab,setActiveTab,screens,onPressTab}) {
 
 
// const onTabPress = (res)=>{
//     setActiveTab(res.name)
//     navigation.replace(res.name.toLowerCase())
// }
  return (
    <View style={styles.container}>
      {screens.map((screen) => {
        if(screen.type === 'default'){
          return(
            <TouchableOpacity
              key={screen.name}
              style={styles.tabContainer}
              onPress={()=>{
                // onPressTab()
                setActiveTab(screen.name)
              }}
            >
              {screen.icon}
              <Text style={[styles.label, activeTab === screen.name && styles.activeLabel]}>{screen.name}</Text>
            </TouchableOpacity>
          )
        }
      })}
    </View>
  );
}

export default CustomBottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical:5
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    color: 'black',
  },
  activeLabel: {
    color: colors.primary,
  },
});

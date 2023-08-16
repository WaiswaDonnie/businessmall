import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../constants/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function NavigationHeader({ onPress, label, showBack }) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 10

    }}>
      {showBack ? <TouchableOpacity onPress={onPress}>

        {/* <Image source={require('../../assets/images/back.png')} style={{ height: 15, width: 20 }} /> */}
        <MaterialCommunityIcons name={'keyboard-backspace'} size={25} color={colors.black} />

      </TouchableOpacity> : <Text></Text>}
      <Text style={{ alignSelf: 'center',fontFamily:'Poppins', fontWeight: '700', fontSize: 16, color: colors.black }}>{label}</Text>
      <Text></Text>

    </View>
  )
}

export default NavigationHeader
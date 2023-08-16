import React from 'react'
import { SafeAreaView, StatusBar, View, Text,ActivityIndicator} from 'react-native'
import { colors } from '../../constants/colors'
 
function ProcessingTransaction() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary,justifyContent:'center',alignItems:'center' }}>
            <StatusBar backgroundColor={colors.primary} />
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator color={colors.white} size={50} />

                <Text style={{color:colors.white,fontFamily:'Poppins',fontSize:20,fontWeight:'700'}}>Processing transaction</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProcessingTransaction
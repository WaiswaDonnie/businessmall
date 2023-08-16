import React,{useState} from 'react'
import { View,TouchableOpacity } from 'react-native'
import CustomBottomNavigation from '../../components/customBottomNavigation'
function DashboardLayout({children,navigation,activeTab,setActiveTab,screens}) {
  return (
    <View style={{position:'relative',flex:1}}>
        {children}
        <CustomBottomNavigation screens={screens} activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  )
}

export default DashboardLayout
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CustomBottomNavigation from '../../components/customBottomNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/colors';
import DashboardLayout from '../../components/DashboardLayout';
import Home from '../home';
import Send from '../send';
import SendUser from '../sendUser';
import SendUserOptions from '../sendUserOptions';
import ConfirmTransaction from '../confirmTransaction';
import TransactionSuccessfull from '../TransactionResponse';
import TransactionReceipt from '../TransactionReceipt';
import SendBank from '../SendBank';
import AddFundsNigeria from '../AddFundsNigeria';
import AccountNumber from '../AccountNumber';
import AddFunds from '../AddFunds';
import AddAmount from '../AddFunds/screens/AddAmount';
import AddPaymentMethod from '../AddFunds/screens/AddPaymentMethod';
import Cashout from '../Cashout';
import AddPaymentMethodNigeria from '../Cashout/screens/AddPaymentMethodNigeria';
import TransactionHistory from '../TransactionHistory';
import More from '../More';

function Dashboard({ navigation }) {
  const [activeTab, setActiveTab] = useState('Wallet');
  const screens = [
    {
      name: 'Wallet',
      icon: <Ionicons name={'wallet'} size={25} color={activeTab === 'Wallet' ? colors.primary : 'grey'} />,
      component: <Home  navigation={ navigation }/>,
      type:"default"
    },
    {
      name: 'History',
      icon: <MaterialCommunityIcons name={'clipboard-list-outline'} size={25} color={activeTab === 'History' ? colors.primary : 'grey'} />,
      component: <TransactionHistory navigation={navigation} />,
      type:"default"
    },
    {
      name: 'More',
      icon: <MaterialCommunityIcons name={'dots-grid'} size={25} color={activeTab === 'More' ? colors.primary : 'grey'} />,
      component: <More navigation={navigation} />,
      type:"default"
    },
    
  ];


  const renderActiveComponent = () => {
    const activeScreen = screens.find(screen => screen.name === activeTab);
    return activeScreen ? activeScreen.component : null;
  };

  return (
    <DashboardLayout  
    activeTab={activeTab}
    screens={screens}
    setActiveTab={setActiveTab} 
    navigation={navigation}
    // showBottomNavigation={}
    >
      {/* <CustomBottomNavigation
        activeTab={activeTab}
        screens={screens}
        setActiveTab={setActiveTab}
      /> */}

      {renderActiveComponent()}
    </DashboardLayout>
  );
}

export default Dashboard;

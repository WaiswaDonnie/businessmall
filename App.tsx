// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Reset from './screens/reset';
import Otp from './screens/otp';
import ResetResponse from './screens/resetResponse';
import Signup from './screens/signup';
import CreatePin from './screens/createPin';
import { ToastProvider } from 'react-native-toast-notifications';
import Dashboard from './screens/dashboard';
import Home from './screens/home';
import SendUser from './screens/sendUser';
import Send from './screens/send';
import SendUserOptions from './screens/sendUserOptions';
import ConfirmTransaction from './screens/confirmTransaction';
import TransactionResponse from './screens/TransactionResponse';
import TransactionReceipt from './screens/TransactionReceipt';
import SendBank from './screens/SendBank';
import Cashout from './screens/Cashout';
import AddPaymentMethodNigeria from './screens/Cashout/screens/AddPaymentMethodNigeria';
import AddPaymentMethod from './screens/AddFunds/screens/AddPaymentMethod';
import AddFunds from './screens/AddFunds';
import AddFundsNigeria from './screens/AddFundsNigeria';
import AccountNumber from './screens/AccountNumber';
import Splash from './screens/Splash';
import UpdatePassword from './screens/UpdatePassword';
import EnterPin from './screens/EnterPin';
import TransactionHistory from './screens/TransactionHistory';
import GlobalContextProvider from './Context/GlobalContext';
import Settings from './screens/Settings';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import VerifyLogin from './screens/VerifyLogin';
import Referrals from './screens/Referrals';
import ReferredUsers from './screens/ReferredUsers';
import More from './screens/More';
import ChangePin from './screens/ChangePin';
// import MobileMoney from './screens/AddFunds/screens/ChooseMobileMoney';
import ChooseMobileMoney from './screens/AddFunds/screens/ChooseMobileMoney';
import MobileMoney from './screens/AddFunds/screens/MobileMoney';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ToastProvider>
      <GlobalContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Referrals"
                component={ReferredUsers}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="ReferralIntro"
                component={Referrals}
                options={{ headerShown: false }}
            />
          
          <Stack.Screen
              name="CreatePin"  
              component={CreatePin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="EnterPin"
              component={EnterPin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Send"
              component={Send}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendUser"
              component={SendUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendUserOptions"
              component={SendUserOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdateProfile"
              component={UpdateProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmTransaction"
              component={ConfirmTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionResponse"
              component={TransactionResponse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionReceipt"
              component={TransactionReceipt}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cashout"
              component={Cashout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePin"
              component={ChangePin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileMoney"
              component={MobileMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseMobileMoney"
              component={ChooseMobileMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPaymentMethodNigeria"
              component={AddPaymentMethodNigeria}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPaymentMethod"
              component={AddPaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History"
              component={TransactionHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountNumber"
              component={AccountNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendBank"
              component={SendBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddFunds"
              component={AddFunds}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddFundsNigeria"
              component={AddFundsNigeria}
              options={{ headerShown: false }}
            />
           
            
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetResponse"
              component={ResetResponse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reset"
              component={Reset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdatePassword"
              component={UpdatePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyLogin"
              component={VerifyLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="More"
              component={More}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContextProvider>
    </ToastProvider>
  );
}

export default App;

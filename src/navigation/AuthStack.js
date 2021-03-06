import React from "react";
import {ForgetPassword, Login,
     NewAccount,
      OtpScreen, 
      PhoneLogin, 
      SetPassword
    } from "../Screens";
import navigationStrings from "./navigationStrings";


const AuthStack = (Stack) => {

    return(
        <>
        <Stack.Navigator>
        
        <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN}
                    component={Login} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.PHONE_LOGIN}
                    component={PhoneLogin} />
                    <Stack.Screen options={{ headerShown: false }} name={navigationStrings.NEW_ACCOUNT}
                    component={NewAccount} />
                     <Stack.Screen options={{ headerShown: false }} name={navigationStrings.SET_PASSWORD}
                    component={SetPassword} />
                     <Stack.Screen options={{ headerShown: false }} name={navigationStrings.OTP_SCREEN}
                    component={OtpScreen} />
                     <Stack.Screen options={{ headerShown: false }} name={navigationStrings.FORGET_PASSWORD}
                    component={ForgetPassword} />
                    
                    
                    </Stack.Navigator>
                    </>
    )



}
export default AuthStack;





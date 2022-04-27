import React from "react";
import { Login, NewAccount, PhoneLogin } from "../Screens";
import navigationStrings from "./navigationStrings";


const AuthStack = (Stack) => {

    return(
        <>
        <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN}
                    component={Login} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.PHONE_LOGIN}
                    component={PhoneLogin} />
                    <Stack.Screen options={{ headerShown: false }} name={navigationStrings.NEW_ACCOUNT}
                    component={NewAccount} />
                    </>
    )



}
export default AuthStack;





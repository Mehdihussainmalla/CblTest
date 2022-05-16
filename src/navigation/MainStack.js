import React from "react";
import { AddInfo, ChangePassword, EditProfileScreen, Home, PostDetail } from "../Screens";
import navigationStrings from "./navigationStrings";
import TabStack from "./TabStack";



const MainStack = (Stack) => {
    return (
        <>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={navigationStrings.TAB_STACK}
                    component={TabStack} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.EDIT_PROFILE_SCREEN}
                    component={EditProfileScreen} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.CHANGE_PASSWORD}
                    component={ChangePassword} />
                       <Stack.Screen options={{ headerShown: false }} name={navigationStrings.POST_DETAIL}
                    component={PostDetail} />
                         <Stack.Screen options={{ headerShown: false }} name={navigationStrings.ADD_INFO}
                    component={AddInfo} />
                    


            </Stack.Navigator>
        </>




    )
}
export default MainStack
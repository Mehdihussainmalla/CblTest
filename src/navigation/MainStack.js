import React from "react";
import { ChangePassword, EditProfileScreen, Home, PostAddScreen, PostDetail } from "../Screens";
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
                      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.POST_ADD_SCREEN}
                    component={PostAddScreen} />
                       <Stack.Screen options={{ headerShown: false }} name={navigationStrings.POST_DETAIL}
                    component={PostDetail} />


            </Stack.Navigator>
        </>




    )
}
export default MainStack
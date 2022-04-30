import React from "react";
import { Home } from "../Screens";
import HomeStack from './homeStack'
import navigationStrings from "./navigationStrings";
import TabStack from "./TabStack";



const MainStack = (Stack) => {
    return (
        <>

            <Stack.Navigator >
                <Stack.Screen name={navigationStrings.TAB_STACK}
                    component={TabStack} />

            </Stack.Navigator>
        </>




    )
}
export default MainStack
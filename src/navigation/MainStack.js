import React from "react";
import { Home } from "../Screens";
import HomeStack from './homeStack'
import navigationStrings from "./navigationStrings";



const MainStack = (Stack)=>{
    return(
        <> 

<Stack.Navigator >
<Stack.Screen  name={navigationStrings.HOME}
component={HomeStack} />

</Stack.Navigator>
        </>
            
                  
        
        
    )
}
export default MainStack
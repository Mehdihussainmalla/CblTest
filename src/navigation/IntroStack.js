import React from "react"
import { Slider } from "../Screens"
import navigationStrings from "./navigationStrings"

export default IntroStack=(Stack)=>{
    return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={navigationStrings.SLIDER} 
    component={Slider} />
    </Stack.Navigator>)
}
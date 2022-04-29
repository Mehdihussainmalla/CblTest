
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Home } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator()

// create a component
const HomeStack = () => {
    return (
       <>
       <Stack.Navigator>
       <Stack.Screen options={{ headerShown: false }} name={navigationStrings.HOME}
       component={Home} />
       </Stack.Navigator>
       </>
    );
};



//make this component available to the app
export default HomeStack;

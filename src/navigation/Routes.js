
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
import TabStack from './TabStack';




const Stack = createNativeStackNavigator();

const Routes = () => {
    const userData = useSelector((state)=>state?.auth?.userData);
console.log('user data from redux ', userData)

    return (
        <NavigationContainer>


            { userData != null ? TabStack() : AuthStack(Stack)}

        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {

    },
});

export default Routes;

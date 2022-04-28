
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';




const Stack = createNativeStackNavigator();
const userData = useSelector((state)=>state.auth?.userData);

const Routes = () => {
    return (
        <NavigationContainer>


            {userData !=null ? MainStack(Stack) : AuthStack(Stack)}

        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {

    },
});

export default Routes;

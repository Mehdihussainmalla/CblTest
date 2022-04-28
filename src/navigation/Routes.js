
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            
               
                {false ? MainStack(Stack):AuthStack(Stack)}
          
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {

    },
});

export default Routes;

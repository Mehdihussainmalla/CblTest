
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name={navigationStrings.LOGIN}
                component={Login}/> */}
                {AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {

    },
});

export default Routes;

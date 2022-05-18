
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CommentScreen, EditProfileScreen, Home } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator()

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
export default HomeStack;

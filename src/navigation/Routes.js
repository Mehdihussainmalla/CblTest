
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
import IntroStack from './IntroStack';
import { Intro } from '../redux/actions/auth';


const Stack = createNativeStackNavigator();

const Routes = () => {
    const userData = useSelector((state) => state?.auth?.userData);
    const { intro } = useSelector((state) => state);
    const appIntro = intro?.appIntroData
    console.log('user data from redux xxxxxxxxxxx', appIntro)

    return (
        <NavigationContainer>
            {!!appIntro ? IntroStack(Stack) : !!(userData || userData?.access_token) ? MainStack(Stack)
                : AuthStack(Stack)}
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {

    },
});

export default Routes;


import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import { Logout } from '../../redux/actions/auth';


const Home = () => {
    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            Logout();
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <View style={styles.container}>
            <ButtonComp onPress={signOut} ButtonText='hiii'/>
            <Text>Home</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default Home;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';


const Home = () => {
    return (
        <View style={styles.container}>
            <ButtonComp ButtonText='hiii'/>
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

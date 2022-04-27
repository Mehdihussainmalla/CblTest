//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import { styles } from './styles';

const NewAccount = () => {
    return (
        <WrapperContainer>
        <View style={styles.headerview}>
          <Header/>
        </View>
        <View >
                <View style={styles.textview}>
                    <View style={styles.createview}>
                    <Text style={styles.createtext}>{strings.CREATE_AN_ACCOUNT}</Text>
                    </View>
                    <View style={styles. accountview}>
                    <Text style={styles.bottomtext}>{strings.CONTINUE_ACCOUNT}</Text>
                    </View>
                </View>
                <View  style={styles.namesview}>
                <View style={styles.firstname}>
                   <TextInputComponent placeholder='first name'/>
                    </View>
                    <View style={styles.lastname}>
                    <TextInputComponent placeholder='lastname'/>
                    </View>
                </View>
            </View>
        </WrapperContainer>
    );
};




export default NewAccount;

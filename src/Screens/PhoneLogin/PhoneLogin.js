//import liraries
import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import strings from '../../constants/lang'
import TextInputComponent from '../../Components/TextInputComponent';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../navigation/navigationStrings';
import CountryCodePicker from '../../Components/CountryCodePicker';
import { moderateScale } from 'react-native-size-matters';



const PhoneLogin = ({ navigation }) => {
    return (
        <WrapperContainer>
  <View style={styles.container}>
            <View style={styles.headerview}>
                <Header />
            </View>
            <View style={styles.view1}>
                <View style={styles.welcomeview}>
                    <Text style={styles.welcometext}>{strings.WELCOME_BACK}</Text>
                </View>
                <View style={styles.bottomview}>
                    <Text style={styles.bottomtext}>{strings.HAPPY_TEXT}</Text>
                </View>
            </View>
           
            <View style={styles.codeview}>
                <View style={{flex:0.5}}>
            <CountryCodePicker/>
            </View>
            <View style={{flex:0.5}}>
            <TextInputComponent placeholder={strings.PHONE_NUMBER}/>
            </View>
            </View>
         


            <View style={styles.passview}>
                <View style={styles.btncomp}>
                    <TextInputComponent placeholder={strings.PASSWORD}
                        keyboardType={strings.NUMERIC} 
                        />
                </View>
              
                <Text style={styles.show}>{strings.SHOW}</Text>
           
            </View>
            <View style={styles.mainview}>
                <View style={styles.optview}>
                    <Text style={styles.otp}>{strings.OTP}</Text>
                </View>
                <View style={styles.passwordview}>
                    <Text style={styles.password}>{strings.FORGOT_PASSWORD}</Text>
                </View>

            </View>
           
            <View style={styles.alignstyle}>
                <ButtonComp onPress={() => navigation.navigate(navigationStrings.NEW_ACCOUNT)}
                    ButtonText={strings.LOGIN} />
            </View>
           

            </View>
        </WrapperContainer>

    );
};




export default PhoneLogin;

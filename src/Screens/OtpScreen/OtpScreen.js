
import React from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { height, moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';



const OtpScreen = ({ navigation }) => {
    return (
        <WrapperContainer>
            <ScrollView style={{ flex: 1, backgroundColor: colors.green }}>


                <Header />

                <View style={styles.otpmainstyle}>

                    <Text style={styles.codetext}>Enter the 4-digit code sent to you at 875 364 8947</Text>

                    {/* <View style={styles.numberstyle}> */}
                    <Text style={styles.eitview}>Edit my mobile number</Text>

                    {/* </View> */}
                </View>

                <View style={styles.otpview}>
                    <View style={styles.otp1}>
                        <TextInputComponent placeholder='' />
                    </View>
                    <View style={styles.otp2}>
                        <TextInputComponent placeholder='' />
                    </View>
                    <View style={styles.otp3}>
                        <TextInputComponent placeholder='' />
                    </View>
                    <View style={styles.otp4}>
                        <TextInputComponent placeholder='' />
                    </View>
                </View>

                <View style={styles.resendcodeview}>
                    <Text style={styles.codeotp}>
                        Resend code in 0:14
                    </Text>
                </View>
                <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                    <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>

                        <ButtonComp onPress={() => navigation.navigate(navigationStrings.HOME)} ButtonText='VERIFY' />

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

        </WrapperContainer>
    );
};




export default OtpScreen;
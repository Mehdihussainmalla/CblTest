
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import ButtonComp from '../../Components/ButtonComp';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { height, moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';



const OtpScreen = ({ navigation, route }) => {


    const phone = route?.params?.phone;
    const phonecode = route?.params?.code;
    console.log("phone and code are ", phonecode + " " + phone)

    const apiData = route?.params?.data;
    console.log("c", apiData);

    const otp = apiData?.otp;
    console.log("check otp", otp);

    const [code, setCode] = useState();


    const signupWithOtp = () => {

        if (otp == code) {
            // navigation.navigate(navigationStrings.PHONE_LOGIN)
            actions.saveUserData(apiData);
            alert("Login successfully")
        } else {
            alert("wrong OTP")
        }
    }

    return (
        <WrapperContainer>
            <ScrollView style={{ flex: 1 }}>


                <Header />

                <View style={styles.otpmainstyle}>
                    <View >
                        <Text style={styles.codetext}>{strings.OTP_2}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.eitview}>{strings.EDIT_NUMBER}</Text>
                    </View>


                </View>
                <View style={{ marginHorizontal: moderateScale(40), flex: 0.9, marginTop: 50 }}>
                    <SmoothPinCodeInput
                        value={code}
                        onTextChange={code => setCode(code)}
                        cellStyle={{
                            borderRadius: moderateScale(5),
                            marginLeft: moderateScale(15),
                            backgroundColor: colors.matterhorn
                        }}
                    />
                </View>



                <View style={styles.resendcodeview}>
                    <Text style={styles.codeotp}>
                        {strings.RESEND_CODE}
                    </Text>
                </View>
                <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                    <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>

                        {/* <ButtonComp onPress={() => navigation.navigate(navigationStrings.HOME)} ButtonText='VERIFY' /> */}

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <ButtonComp onPress={signupWithOtp} ButtonText='VERIFY' />

        </WrapperContainer>
    );
};




export default OtpScreen;
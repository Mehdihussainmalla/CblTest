
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


    const phone = route?.params?.data?.phone;
    console.log(phone, "phone is>>>>>")
    const phonecode = route?.params?.data?.phone_code;
    // console.log("phone-code is: ",phonecode)
    console.log("phone and code are ", phonecode + " " + phone)

    const apiData = route?.params?.data;
    console.l/og("check new data", apiData);

    const otp = apiData?.otp;


    const [code, setCode] = useState();


    const signupWithOtp = () => {

        if (otp == code) {

            actions.saveUserData(apiData);
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
                        <Text style={styles.codetext}>{strings.OTP_2}{phone}</Text>
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
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <ButtonComp onPress={signupWithOtp} ButtonText='VERIFY' />

        </WrapperContainer>
    );
};




export default OtpScreen;
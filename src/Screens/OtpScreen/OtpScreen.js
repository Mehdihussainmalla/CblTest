
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
import { saveUserData } from '../../redux/actions/auth';
import colors from '../../styles/colors';
import { height, moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';



const OtpScreen = ({ navigation, route }) => {
    // -------------------------------- Signup data ----------------------------//
    //................data from sign up screen.................//
    const data = route?.params.data;
    console.log(data, ">>>>>>>>");

    //--------------------------------forget data-------------//
    //.................data from login screen...............//
    const forgetPasswordData = route?.params?.forgetPasswordData;
    console.log(forgetPasswordData, "@@@@@@@@@")

    const [code, setCode] = useState();
    const signupWithOtp = () => {

        {
            data ? saveUserData(data)
                : navigation.navigate(navigationStrings.CHANGE_PASSWORD, { data: data })
        }

        // if (otp == code) {

        //     actions.saveUserData(apiData);
        // } else {
        //     alert("wrong OTP")
        // }
    }

    return (
        <WrapperContainer>
            <ScrollView style={{ flex: 1 }}>


                <Header isBackIcon={true} />

                <View style={styles.otpmainstyle}>
                    <View >
                        <Text style={styles.codetext}>{strings.OTP_2}{"+"}{data ? data.phone_code : forgetPasswordData?.phone_code}  {data ? data?.phone : forgetPasswordData?.phoneNumber}</Text>
                    </View>
                    <View >
                        <Text style={styles.otpstyle}>Otp is : {data ? data?.otp : forgetPasswordData?.data.otp}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.editview}>{strings.EDIT_NUMBER}</Text>
                    </View>


                </View>
                <View style={{ marginHorizontal: moderateScale(40), flex: 0.9, marginTop: 100 }}>
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
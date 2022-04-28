//import liraries
import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import strings from '../../constants/lang'
import TextInputComponent from '../../Components/TextInputComponent';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../navigation/navigationStrings';
import CountryCodePicker from '../../Components/CountryCodePicker';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
// import { moderateScale , moderateVerticalScale,moderateScaleVertical} from 'react-native-size-matters';



const PhoneLogin = ({ navigation }) => {
    

    const onSignup = async() => {

        let apiData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: phoneCode,
            country_code: countryCode,
            device_token: deviceToken,
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password
        }
         console.log(apiData)
        try {
            const res = await actions.signUp(apiData)
            console.log("signup api is......", res)
            navigation.navigate(navigationStrings.LOGINSCREEN)
            alert("User signup sucessfully !")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }
    return (
        <WrapperContainer>
            <View style={styles.container}>
                {/* <View style={styles.headerview}> */}
                    <Header />
                {/* </View> */}
                <View style={styles.view1}>
                    <View style={styles.welcomeview}>
                        <Text style={styles.welcometext}>{strings.WELCOME_BACK}</Text>
                    </View>
                    <View style={styles.bottomview}>
                        <Text style={styles.bottomtext}>{strings.HAPPY_TEXT}</Text>
                    </View>
                </View>

                <View style={styles.codeview}>
                    <View style={{ flex: 0.4 }}>
                        <CountryCodePicker />
                    </View>
                    <View style={{ flex: 0.6 }}>
                        <TextInputComponent placeholder={strings.PHONE_NUMBER} />
                    </View>
                </View>



                <View style={styles.passview}>
                    <View style={styles.btncomp}>
                        <TextInputComponent placeholder={strings.PASSWORD}
                            // keyboardType={strings.NUMERIC}
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
                <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                    <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                        <View style={styles.alignstyle}>
                            <ButtonComp onPress={() => navigation.navigate(navigationStrings.NEW_ACCOUNT)}
                                ButtonText={strings.LOGIN} />
                        </View>
                    </View>
                </KeyboardAvoidingView>


            </View>
        </WrapperContainer>

    );
};




export default PhoneLogin;

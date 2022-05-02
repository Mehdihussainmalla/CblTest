//import liraries
import React, { Component, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import strings from '../../constants/lang'
import TextInputComponent from '../../Components/TextInputComponent';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../navigation/navigationStrings';
import CountryCodePicker from '../../Components/CountryCodePicker';
import actions from '../../redux/actions';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../styles/colors';




const PhoneLogin = ({ navigation }) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        countryCode: '',
        deviceToken: '',
        deviceType: '',
        logintype: '',
    })


    const { phone, password, deviceToken, deviceType, logintype } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))


    const onLogin = async () => {


        let apiData = {

            phone: phone,
            phone_code: '91',
            country_code: '91',
            device_token: 'aaaa',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password,
            logintype: 'abc'

        }
        console.log(apiData)
        try {
            const res = await actions.login(apiData)
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
            <ScrollView >

                <Header  isBackIcon={true}/>


                <View style={styles.welcomeview}>
                    <Text style={styles.welcometext}>{strings.WELCOME_BACK}</Text>
                    <Text style={styles.bottomtext}>{strings.HAPPY_TEXT}</Text>
                </View>

                <View style={styles.codeview}>
                    <View style={{ flex: 0.4 }}>
                        <CountryCodePicker />
                    </View>
                    <View style={{ flex: 0.6 }}>
                        <TextInputComponent placeholder={strings.PHONE_NUMBER}
                            onChangeText={(phone) => updateState({ phone })}
                        />
                    </View>
                </View>

                <View style={styles.passview}>
                    <View style={styles.btncomp}>
                        <TextInputComponent placeholder={strings.PASSWORD}
                            onChangeText={(password) => updateState({ password })}

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


                


            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                    <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>

                        <ButtonComp onPress={onLogin}
                            ButtonText={strings.LOGIN}
                            btnStyle={{ marginVertical: moderateScale(12) }} />

                    </View>
                </KeyboardAvoidingView>
            </View>
        </WrapperContainer>

    );
};




export default PhoneLogin;

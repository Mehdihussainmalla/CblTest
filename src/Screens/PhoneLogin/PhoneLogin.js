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
import validator from '../../utils/validations'
import { showError } from '../../utils/helperfunctions';



const PhoneLogin = ({ navigation }) => {

    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');

    const isValidData = () => {
        const error = validator({ phone, password });

        if (error) {
            showError(error)
            return;
        }
        return true;
    }


    const [state, setState] = useState({

        phone: '',
        password: '',
        loginType: 'aaa',
    })


    const { phone, password, loginType } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    //  console.log("logintyedeew", loginType)

    const onLogin = async () => {
        const checkValid = isValidData();
        if (!checkValid) {
            return;
        }

        let apiData = {

            phone: phone,
            phone_code: '91',
            country_code: 'IN',
            device_token: 'androidffff',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password,
            loginType: loginType,

        }
        console.log("this is the api data", apiData)
        try {
            const res = await actions.login(apiData)
            console.log("signup api is......", res)
            navigation.navigate(navigationStrings.LOGINSCREEN)
            alert("User login sucessfully !")
        }
        catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }
    return (

        <WrapperContainer>
            <View style={styles.container}>
                <ScrollView >

                    <Header isBackIcon={true} />


                    <View style={styles.welcomeview}>
                        <Text style={styles.welcometext}>{strings.WELCOME_BACK}</Text>
                        <Text style={styles.bottomtext}>{strings.HAPPY_TEXT}</Text>
                    </View>

                    <View style={styles.codeview}>
                        <View style={{ flex: 0.4 }}>
                            <CountryCodePicker 
                             countryCode={countryCode}
                             countryFlag={countryFlag}
                             setCountryCode={setCountryCode}
                             setCountryFlag={setCountryFlag}
                            
                            />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <TextInputComponent placeholder={strings.PHONE_NUMBER}
                                onChangeText={(phone) => updateState({ phone })}
                                value={phone}
                                
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

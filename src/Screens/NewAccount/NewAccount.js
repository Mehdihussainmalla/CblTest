//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import CountryCodePicker from '../../Components/CountryCodePicker';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import { styles } from './styles';
import validator from '../../utils/validations'
import { showError } from '../../utils/helperfunctions';

const NewAccount = ({ navigation }) => {


    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword:'',
        countryCode: 'IN',
        deviceToken: 'androidffff',
        deviceType: '',

    })


    const { firstName, lastName, email, phone, password, confirmPassword, deviceToken} = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({ firstName, lastName, email, phone, password, confirmPassword });
        if (error) {
            showError(error)
            return;
        }
        return true;
    };
    const onSignUp = async () => {

        const checkValid = isValidData();
        if (!checkValid) {
            return;
        }
        let apiData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: countryCode,
            country_code: countryFlag,
            device_token: deviceToken,
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password,
            confirmPassword: confirmPassword
        }
        console.log("Signup data : ", apiData)
        try {
            const res = await actions.signUp(apiData)

            console.log("singnup api res_+++++", res?.data);

            navigation.navigate(navigationStrings.OTP_SCREEN, {
                data: res?.data
            })
            // alert("User signup successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }

    return (
        <WrapperContainer>
            <View style={{ flex: 1, }}>
                <ScrollView >

                    <Header
                        isBackIcon={true} />

                    <View style={styles.textview}>

                        <Text style={styles.createtext}>{strings.CREATE_AN_ACCOUNT}</Text>
                        <Text style={styles.bottomtext}>{strings.CONTINUE_ACCOUNT}</Text>

                    </View>

                    <View style={styles.namesview}>
                        <View style={styles.firstname}>
                            <TextInputComponent placeholder={strings.FIRST_NAME}
                            value={firstName}
                                onChangeText={(firstName) => updateState({ firstName })} />
                        </View>
                        <View style={styles.lastname}>
                            <TextInputComponent placeholder={strings.LAST_NAME}
                            value={lastName}
                                onChangeText={(lastName) => updateState({ lastName })} />
                        </View>
                    </View>


                    <View style={styles.emailview}>
                        <TextInputComponent
                        value={email}
                            onChangeText={(email) => updateState({ email })}
                            placeholder={strings.EMAIL} />
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
                        <View style={{ flex: 0.6, }}>
                            <TextInputComponent
                            value={phone}
                                onChangeText={(phone) => updateState({ phone })}
                                placeholder={strings.PHONE_NUMBER} />
                        </View>
                    </View>

                    <View style={styles.passwordview}>
                        <TextInputComponent placeholder={strings.PASSWORD}
                        value={password}
                            onChangeText={(password) => updateState({ password })} />
                    </View>

                    <View style={styles.confirmpasswordview}>
                        <TextInputComponent placeholder={strings.CONFIRM_PASSWORD}
                        value={confirmPassword}
                            onChangeText={(confirmPassword) => updateState({ confirmPassword })} />
                    </View>





                </ScrollView>
                <ButtonComp onPress={onSignUp}
                    btnStyle={{ marginVertical: moderateScale(12) }}
                    ButtonText={strings.NEXT} />
            </View>



        </WrapperContainer>
    );
};




export default NewAccount;

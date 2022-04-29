//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import CountryCodePicker from '../../Components/CountryCodePicker';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import { styles } from './styles';



const NewAccount = ({ navigation }) => {
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
    })


    const { firstName, lastName, email, phone, password, confirmPassword, countryCode, deviceToken, deviceType } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const onSignUp = async () => {
        let apiData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: '91',
            country_code: 'IN',
            device_token: 'aaaa',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password,
            confirmPassword: confirmPassword
        }
        console.log("Signup data : ", apiData)
        try {
            const res = await actions.signUp(apiData)
            console.log("singnup api res_+++++", res)
            navigation.navigate(navigationStrings.OTP_SCREEN)
            alert("User signup successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }

    return (
        <WrapperContainer>
            <ScrollView>
            <View style={{}}>

                <Header />
                <View style={{ }} >
                    <View style={styles.textview}>
                        <View style={styles.createview}>
                            <Text style={styles.createtext}>{strings.CREATE_AN_ACCOUNT}</Text>
                        </View>
                        <View style={styles.accountview}>
                            <Text style={styles.bottomtext}>{strings.CONTINUE_ACCOUNT}</Text>
                        </View>
                    </View>
                    <View style={styles.namesview}>
                        <View style={styles.firstname}>
                            <TextInputComponent placeholder={strings.FIRST_NAME}
                                onChangeText={(firstName) => updateState({ firstName })} />
                        </View>
                        <View style={styles.lastname}>
                            <TextInputComponent placeholder={strings.LAST_NAME}
                                onChangeText={(lastName) => updateState({ lastName })} />
                        </View>
                    </View>
                    <View style={styles.emailview}>
                        <TextInputComponent
                            onChangeText={(email) => updateState({ email })}
                            placeholder={strings.EMAIL} />
                    </View>
                    <View style={styles.codeview}>
                        <View style={{ flex: 0.4 }}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <TextInputComponent
                                onChangeText={(phone) => updateState({ phone })}
                                placeholder={strings.PHONE_NUMBER} />
                        </View>
                    </View>
                    <View style={{ }}>
                        <View style={styles.passwordview}>
                            <TextInputComponent placeholder={strings.PASSWORD}
                                onChangeText={(password) => updateState(password)} />
                        </View>

                        <View style={styles.confirmpasswordview}>
                            <TextInputComponent placeholder={strings.SET_PASSWORD}
                                onChangeText={(confirmPassword) => updateState(confirmPassword)} />
                        </View>
                    </View>
                </View>
                <View style={styles.btnstyle}>
                    <ButtonComp onPress={onSignUp}
                        ButtonText={strings.NEXT} />
                </View>
            </View>
            </ScrollView>

        </WrapperContainer>
    );
};




export default NewAccount;

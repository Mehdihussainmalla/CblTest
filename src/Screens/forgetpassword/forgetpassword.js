//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import CountryCodePicker from '../../Components/CountryCodePicker';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';
import { showError } from '../../utils/helperfunctions';
import validator from '../../utils/validations';
import { styles } from './style';



const ForgetPassword = ({ route, navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [countryCode, setCountryCode] = useState("91");
    const [countryFlag, setCountryFlag] = useState("IN")

    const isValidData = () => {
        const error = validator({
            phoneNumber,
        });
        if (error) {
            showError(error)
            return
        }
        return true;
    }
    const handleForgetButton = () => {
        const checkValid = isValidData();
        if (!checkValid) {
            return
        }

        let apiData = {
            phone: phoneNumber,
            phone_code: countryCode,

        }
        console.log(apiData, "check api data for forget")


        actions.ForgetPassword(apiData).then((res) => {


            console.log(res, "check response for for get api")
            navigation.navigate(navigationStrings.OTP_SCREEN, {
                data: res?.data,
                phoneNumber: phoneNumber,
                phone_code: countryCode
            })


        }).catch((error) => {
            console.log("error occurred", error)
        })
    }

    return (
        <WrapperContainer>
            <View style={styles.container}>

                <Header isBackIcon={true}
                />
                <View style={{ flex: 0.1 }}>
                    <Text style={styles.headertxt}>{strings.FORGET_PASS}</Text>
                    <Text style={styles.txt}>
                        {strings.FORGET_DESC}
                    </Text>
                </View>
                <View style={styles.codeinputstyle}>
                    <View style={{ flex: 0.38, }}>
                        <CountryCodePicker
                            countryCode={countryCode}
                            countryFlag={countryFlag}
                            setCountryCode={setCountryCode}
                            setCountryFlag={setCountryFlag}
                        />
                    </View>
                    <View style={{ flex: 0.6 }}>
                        <TextInputComponent
                            onChangeText={setPhoneNumber}
                            value={setPhoneNumber}
                            placeholder={strings.PHONE_NUMBER}
                            input={{ fontSize: textScale(14) }} />
                    </View>
                </View>


            </View>
            <ButtonComp onPress={handleForgetButton}
                ButtonText={strings.FORGET_BTN}
                btnStyle={{ marginBottom: 10 }} />
        </WrapperContainer>

    );
};





export default ForgetPassword;

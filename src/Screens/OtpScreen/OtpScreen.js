
import React from 'react';
import { View, Text, StyleSheet, ScrollView , KeyboardAvoidingView, Platform} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../navigation/navigationStrings';
import { height } from '../../styles/responsiveSize';
import { styles } from './styles';



const OtpScreen = ({navigation}) => {
    return (
        <WrapperContainer>
             
            <View style={{flex:1,}}>
            <ScrollView >
                <Header/>
                <View style={styles.otpmainstyle}>
                        <View>
                            <Text style={styles.codetext}>Enter the 4-digit code sent to you at 875 364 8947</Text>
                        </View>
                        <View style={styles.numberstyle}>
                            <Text style={styles.eitview}>Edit my mobile number</Text>

                        </View>


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
                <View style={styles.resendview}>
                    <Text style={styles.codeotp}>
                        Resend code in 0:14
                    </Text>
                </View>
            </View>
            </ScrollView>
            <View style={styles.verifybtn}>
                <ButtonComp onPress={()=>navigation.navigate(navigationStrings.HOME)} ButtonText='VERIFY' />
            </View>
            </View>

        </WrapperContainer>
    );
};




export default OtpScreen;
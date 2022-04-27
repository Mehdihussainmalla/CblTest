import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';



import { styles } from './styles';


const Login = ({ navigation }) => {
    return (
        <WrapperContainer style={styles.container}>
           
            <View style={styles.phoneview}>
                <Image style={styles.logoview} source={imagePath.AWARD} />
                <View style={styles.text}>
                    <Text style={styles.texttt}>{strings.TEXT}</Text>
                    <Text style={styles.texttt}>{strings.text2}</Text>
                </View>
            </View>
            <ButtonComp ButtonText={strings.LOGIN_WITH_PHONE_NUMBER} />
            <View style={styles.orview}>
                <Text style={styles.ortext}>or</Text>
            </View>

            <ButtonComp
                ButtonText={strings.LOGIN_IN_WITH_GOOGLE}
                btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
                buttonTxt={{ color: colors.loginWith }}
                btnIcon={imagePath.GOOGLE_ICON}
            // onPress={() => alert('button onpress')}
            />

            <ButtonComp
                ButtonText={strings. LOGIN_IN_WITH_FACEBOOK}
                btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
                buttonTxt={{ color: colors.loginWith }}
                btnIcon={imagePath.FACEBOOK_ICON}
            // onPress={() => alert('button onpress')}
            />
            <ButtonComp
                ButtonText={strings.LOGIN_WITH_APPLE}
                btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
                buttonTxt={{ color: colors.loginWith }}
                btnIcon={imagePath.APPLE_ICON}
            // onPress={() => alert('button onpress')}
            />
            <View style={styles.stringsview}>

                <TouchableOpacity>
                    <Text style={styles.newhere}>{strings.NEW_HERE}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.PHONE_LOGIN)} >
                    <Text style={styles.signuptext}>{strings.SIGN_UP}</Text>
                </TouchableOpacity>

            </View>

         
        </WrapperContainer>

    );
};





export default Login;

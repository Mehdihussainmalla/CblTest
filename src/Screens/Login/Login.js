import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { styles } from './styles';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { saveUserData } from '../../redux/actions/auth';

const Login = ({ navigation }) => {

    useEffect(() => {
        GoogleSignin.configure();
      }, [])
    
      //.............google login in ......................//
      const googleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log('user info', userInfo)
          const email = userInfo.user.email;
          const id = userInfo.user.id;
          const data = { email, id }
          saveUserData(data);
    
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log('errorr occurred during google sign in', error)
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log('errorr occurred during google sign in', error)
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log('errorr occurred during google sign in', error)
          } else {
            // some other error happened
            console.log('errorr occurred during google sign in', error)
          }
        }
      };
    

   
    return (
        <WrapperContainer style={styles.container}>
            <View style={{flex:0.9}}>
           {/* <ScrollView> */}
            <View style={styles.phoneview}>
                <Image style={styles.logoview} source={imagePath.AWARD} />
                <View style={styles.text}>
                    <Text style={styles.texttt}>{strings.TEXT}</Text>
                    <Text style={styles.texttt}>{strings.text2}</Text>
                </View>
            </View>
          
            <View style={styles.loginphonenumber}>
            <ButtonComp onPress={()=>navigation.navigate(navigationStrings.PHONE_LOGIN)}
             ButtonText={strings.LOGIN_WITH_PHONE_NUMBER} />
            </View>
            <View style={styles.orview}>
                <Text style={styles.ortext}>or</Text>
            </View>
  <View style={{flex:0.1}}>
            <ButtonComp onPress={googleLogin}
                ButtonText={strings.LOGIN_IN_WITH_GOOGLE}
                btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
                buttonTxt={{ color: colors.loginWith }}
                btnIcon={imagePath.GOOGLE_ICON}
           
            />
</View>


<View style={{flex:0.1}}>
            <ButtonComp
                ButtonText={strings. LOGIN_IN_WITH_FACEBOOK}
                btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
                buttonTxt={{ color: colors.loginWith }}
                btnIcon={imagePath.FACEBOOK_ICON}
            // onPress={() => alert('button onpress')}
            />
            </View>
            <View style={{flex:0.1}}>
            <ButtonComp
                ButtonText={strings.LOGIN_WITH_APPLE}
                btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
                buttonTxt={{ color: colors.loginWith }}
                btnIcon={imagePath.APPLE_ICON}
            // onPress={() => alert('button onpress')}
            />
            </View>
            <View style={styles.stringsview}>

                <TouchableOpacity>
                    <Text style={styles.newhere}>{strings.NEW_HERE}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.NEW_ACCOUNT)} >
                    <Text style={styles.signuptext}>{strings.SIGN_UP}</Text>
                </TouchableOpacity>

            </View>
          
            </View>
         {/* </ScrollView> */}
        </WrapperContainer>

    );
};





export default Login;

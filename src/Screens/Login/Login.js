import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
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
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";


const Login = ({ navigation }) => {

  useEffect(() => {
    GoogleSignin.configure();
  }, [])

  //.....................facebook login......................//

  const fbLogin = (resCallBack) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log("FB_LOGIN_RESULT =====>", result);
        if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
          resCallBack({ message: "email is required" })
        }
        if (result.isCancelled) {
          console.log("error")
        } else {
          const infoResquest = new GraphRequest(
            '/me?fields = email, name, picture',
            null,
            resCallBack
          );
          new GraphRequestManager().addRequest(infoResquest).start()
        }
      },
      function (error) {
        console.log("login failed with error", error)
      }
    )
  }

  const onFbLogin = async () => {
    try {
      await fbLogin(resInfoCallBack)

    } catch (error) {
      console.log("error", error)
    }
  }

  const resInfoCallBack = async (error, result) => {
    if (error) {
      console.log("Login Error", error)
    } else {
      const userData = result;
      console.log(userData)
      saveUserData(userData);

    }
  }

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
        console.log('errorr occurred during google sign in', error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('errorr occurred during google sign in', error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('errorr occurred during google sign in', error)
      } else {
        console.log('errorr occurred during google sign in', error)
      }
    }
  };



  return (
    <WrapperContainer style={{ alignItems: 'center' }}>
      <ScrollView style={{ flex: 1, }}>
        <View style={styles.phoneview}>
          <Image style={styles.logoview} source={imagePath.AWARD} />
        </View>

        <View style={styles.textview}>
          <Text style={styles.texttt}>{strings.TEXT}
          </Text>
        </View>

        <ButtonComp
          btnStyle={{ marginVertical: moderateScale(12) }}
          onPress={() => navigation.navigate(navigationStrings.PHONE_LOGIN)}
          ButtonText={strings.LOGIN_WITH_PHONE_NUMBER} />

        <View style={styles.orview}>
          <Text style={styles.ortext}>{strings.OR}</Text>
        </View>

        <ButtonComp onPress={googleLogin}
          ButtonText={strings.LOGIN_IN_WITH_GOOGLE}
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.GOOGLE_ICON} />

        <ButtonComp
          ButtonText={strings.LOGIN_IN_WITH_FACEBOOK}
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.FACEBOOK_ICON}
          onPress={onFbLogin}
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
          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.NEW_ACCOUNT)} >
            <Text style={styles.signuptext}>{strings.SIGN_UP}</Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
    </WrapperContainer>
  )
}
export default Login;

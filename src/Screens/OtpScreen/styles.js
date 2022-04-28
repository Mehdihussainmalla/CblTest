import React from "react";
import { StyleSheet } from 'react-native'
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {

        height: height,
        backgroundColor: colors.darkGrey,
    },
    headerview: {
        marginTop: moderateScale(10),
        paddingRight: moderateScale(15),
        paddingHorizontal: moderateVerticalScale(10)

    },
    otpmainstyle: {
        // flex: 0.1,
        // backgroundColor: colors.redB,
        height: moderateScale(64),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23)
    },
    codetext: {
        // flex:0.1,
        fontSize: textScale(24),
        fontFamily: fontFamily.BarlowSemiBold,
        letterSpacing: 0,
        lineHeight: moderateScale(32),
        color: colors.white
    },
    numberstyle: {
        // backgroundColor:'white',
        marginTop: moderateScale(8),
        height: moderateScale(width / 15),
        // height:moderateScale(24)

    },
    eitview: {
        color: colors.bluelightclr,
        fontSize: textScale(15),
        fontFamily: fontFamily.Barlow,
        letterSpacing: 0,
        lineHeight: moderateScale(32)

    },
    otpview: {
        flex: 0.1,
        // backgroundColor: 'red',
        marginTop: moderateScale(50),
        flexDirection: 'row',
        marginHorizontal: moderateScale(23),
        // marginBottom: moderateScale(15)
    },
    otp1: {
        flex: 0.2,
        paddingHorizontal: 2
    },
    otp2: {
        flex: 0.2,
        marginLeft: 5,
        paddingHorizontal: 6
    },
    otp3: {
        flex: 0.2,
        marginLeft: 5,
        paddingHorizontal: 6
    },
    otp4: {
        flex: 0.2,
        marginLeft: 5,
        paddingHorizontal: 6
    },
    resendcodeview: {
        justifyContent: 'center',
        // backgroundColor: 'red',
        flex: 0.1,
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),

    },
    resendview: {
        marginTop:moderateScale(10)
        // marginLeft:moderateScale(15),
        // marginRight:moderateScale(23)

    },
    codeotp: {
        fontFamily: fontFamily.Barlow,
        fontSize: textScale(15),
        color: colors.white,
        letterSpacing: 0,
        lineHeight: 32,
        textAlign: 'left'

    },
    verifybtn: {
        
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),
        flex: 0.6,
    },
    keyboard:{
        flex:0.4
    }
    // keyboardview: {
    //     marginLeft: moderateScale(24),
    //     marginRight: moderateScale(23),
    //     paddingBottom: isSearchBarAvailableForCurrentPlatform.OS === 'IOS' ? moderateScaleVertical(45) : moderateScaleVertical(20)
    // }

}) 

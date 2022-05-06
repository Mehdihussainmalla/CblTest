import React from "react";
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23),
        // marginTop: moderateScale(34)
        marginVertical:moderateScale(6),
        height: height / 21,

    },
    profileimage: {
        paddingRight: moderateVerticalScale(20),
        fontFamily: fontFamily.BarlowRegular

    },
    profiletext: {
        fontFamily: fontFamily.BarlowRegular,
        color: colors.white,
        fontSize: textScale(15),
        
    },
    profiletext1: {
        fontFamily: fontFamily.BarlowRegular,
        color: colors.white,
        fontSize: textScale(15),
        marginHorizontal:moderateScale(5)
        
    }
})
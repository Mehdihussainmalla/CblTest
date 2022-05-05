import React from "react";
import { StyleSheet } from 'react-native'
import { moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    backgroundstyle: {
        flex: 1,
        height: height,
        width: width,
        opacity: 0.9,
    },

    profilestyle: {
        flex: 0.9, marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23), flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18

    },
    textstyle1: {
        color: colors.white,
        fontFamily: fontFamily.BarlowSemiBold,
        fontSize: textScale(16)
    },
    textstyle2: {
        color: colors.white,
        fontFamily: fontFamily.BarlowRegular,
        fontSize: textScale(13)
    },
    descriptionstyle: {
        flex: 0.1,
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(5),
        fontFamily: fontFamily.BarlowRegular,
       
    },
    desctext:{
        color:colors.white,
        fontSize: textScale(15)
    }


});
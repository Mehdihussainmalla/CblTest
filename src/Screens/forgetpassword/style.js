import React from "react";
import {StyleSheet} from "react-native"
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.lightgrey,
        marginRight:moderateScaleVertical(24),
        marginLeft:moderateScaleVertical(23)
    },
    headertxt:{
        paddingLeft: 20,
        color: colors.white,
        fontFamily: fontFamily.BarlowBold,
        fontSize: textScale(16)
    },
    txt:{
        paddingLeft: 20,
        color: colors.white,
        fontFamily: fontFamily.BarlowRegular,
        fontSize: textScale(14)
    },
    codeinputstyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: moderateScale(23),
        height: moderateScale(48),
        marginVertical: moderateScale(16)

    }
});
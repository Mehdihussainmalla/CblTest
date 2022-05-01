import React from "react";
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    passwordstyle: {
        backgroundColor: colors.matterhorn,
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23),
        marginTop: moderateScale(20)
    },
    confirmpasswordstyle: {
        backgroundColor: colors.matterhorn,
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        marginTop: moderateScale(18),
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23)

    },
    btnstyle:
    {
        marginTop: moderateVerticalScale(15),
        bottom: moderateVerticalScale(10),
        width: '100%'
    },
    textstyle: {
        color: colors.white,
        paddingTop: 10,
        alignSelf: 'center',

    }

})
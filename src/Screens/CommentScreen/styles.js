import React from 'react'
import { StyleSheet } from 'react-native'
import { height, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

export const styles = StyleSheet.create({
    iconstyle: {
        marginTop: moderateVerticalScale(10),
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
        marginHorizontal: moderateScale(15)

    },
    mainview: {
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23),
        //  backgroundColor: 'grey'
        flex: 1,

    },
    profile: {
        marginTop: moderateScale(10),
        fontSize: textScale(13),
        color: colors.white,
        fontFamily: fontFamily.BarlowBold
    },
    email: {
        fontSize: textScale(13),
        color: colors.white,
        fontFamily: fontFamily.BarlowBold

    },
    timeview: {
        marginTop: moderateScale(2),
        marginHorizontal: moderateScale(55),
        //  backgroundColor:'red'



    },
    timestyle: {
        fontSize: textScale(10),
        color: colors.LIGHTGREYTEXT,
        fontFamily: fontFamily.BarlowRegular,
        paddingLeft: moderateScaleVertical(17),
        // marginTop: moderateScale(2),
        paddingTop: 10
    },
    bottomview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: moderateScaleVertical(23)
        , marginRight: moderateScaleVertical(24),
        // backgroundColor: 'white',
        // height:50,
        marginBottom: moderateScaleVertical(2)
    },
    inputview: {
        width: "40%",
        flex: 0.5,
        borderRadius: moderateScaleVertical(8)
    },
    divider: {
        marginTop: moderateScaleVertical(18),
        color: colors.WHITE,
        width: moderateScaleVertical(460)

    },
    commentview:
    {
        marginLeft: moderateScaleVertical(75),
        marginTop: 5
    },

    commentstyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.BarlowRegular,
        color: colors.white,
        paddingTop: moderateScaleVertical(5)
    }
})

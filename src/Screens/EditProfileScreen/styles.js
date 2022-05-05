import React from "react";
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { width } from '../../styles/responsiveSize'
import { StyleSheet} from 'react-native'
export const styles = StyleSheet.create({

    imagestyle: {
        marginTop: moderateVerticalScale(40),
        height: moderateVerticalScale(120),
        marginLeft: moderateVerticalScale(120),
        marginRight: moderateVerticalScale(134),


    },
    imageicon:{
        // height: moderateVerticalScale(100),
        // width: width / 3.5,
        height: moderateScale(width / 3.5),
        width: moderateScale(width / 3.5),
        borderRadius: moderateScale(width / 7),
        
    },
    editiconstyle: {

        position: 'absolute',
        right: moderateScale(5),
        bottom: moderateVerticalScale(15),
    },
    inputstyle: {
        flexDirection: 'row',
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),
        marginTop: verticalScale(10),
        alignItems: 'center'

    },
    emailstyle: {
        marginTop: moderateScale(10),
        marginRight: moderateVerticalScale(23),
        marginLeft: moderateVerticalScale(24)
    },
    codepickerview: {
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23),
        flexDirection: 'row',
        marginTop: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: moderateScale(10),

    },
    btnstyle: {
        marginTop: moderateVerticalScale(15),
        // position:'absolute',
        bottom:moderateVerticalScale(10),
        width:'100%'

    }
})
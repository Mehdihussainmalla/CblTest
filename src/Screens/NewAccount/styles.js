
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({

    textview: {


        marginRight: moderateScale(23),
        marginLeft: moderateScale(24),

    },

    createtext: {
        fontSize: textScale(24),
        fontFamily: fontFamily.BarlowBold,
        color: colors.white,
        letterSpacing: 0,
        lineHeight: moderateScale(32),

    },

    bottomtext: {
        fontSize: textScale(15),
        color: colors.lightgrey,
        fontFamily: fontFamily.BarlowRegular,
        lineHeight: moderateScale(32),
        letterSpacing: 0
    },
    namesview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: moderateScale(15),
        marginRight: moderateScale(23),
        // marginTop: verticalScale(20),
        marginVertical:moderateScale(8)
        
    },
    codeview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: moderateScale(8),
        marginRight: moderateScale(21),


    },
    firstname: {

        borderRadius: verticalScale(5),
        flex: 0.5,
        backgroundColor: colors.matterhorn,
        marginHorizontal: moderateScale(10),



    },
    lastname: {
        height: moderateScale(48),
        flex: 0.5,
        fontSize: textScale(14),
        backgroundColor: colors.matterhorn,
        borderRadius: verticalScale(5),

    },
    emailview: {
        // marginTop: moderateScale(10),
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateScaleVertical(23),
        borderRadius: moderateScale(5),
        marginVertical:moderateScale(16)
    },

    passwordview: {
        marginBottom: moderateScale(3),
        marginLeft: moderateScaleVertical(24),
        marginRight: moderateScaleVertical(23),
        marginVertical:moderateScale(16)


    },
    confirmpasswordview: {
        // marginTop: 10,
        marginLeft: moderateScaleVertical(24),
        marginRight: moderateScaleVertical(23),
        marginVertical:moderateScale(16)
    }




})

import React from "react";
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { height, moderateScaleVertical, width } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    istimagestyle: {
        marginLeft: moderateScale(24),
        marginTop: moderateScale(16)
    },

    sndimagestyle: {
        backgroundColor: colors.matterhorn,
        height: width / 4,
        width: width / 4,
        borderRadius: moderateScale(8),
        marginLeft: moderateScale(24),
        marginTop: moderateScale(16),
        justifyContent: 'center',
        alignItems: 'center'

    },
    plusimage: {

        alignSelf: 'center',

    },

    inputview: {

        marginTop: moderateScale(16),
        marginLeft: moderateScaleVertical(24),
        marginRight: moderateScaleVertical(23),

    },
    addlocstyle: {
        marginLeft: moderateScaleVertical(24),
        marginRight: moderateScaleVertical(23),
        marginVertical: moderateScaleVertical(16)
    },

    uploadview:
    {
        marginLeft: moderateScale(24),
        marginTop: moderateScale(16),
        borderRadius: moderateScale(8)
    },
    istimagestylesss: {
        width: width / 5,
        borderRadius: moderateScaleVertical(8),
        height: height / 12,
        marginHorizontal: moderateScaleVertical(16)
    },
    imagestyle: {
        height: width / 4,
        width: width / 4,
        borderRadius: moderateScale(8)
    },
    cancelbtn:
    {
        position: 'absolute',
        right: -10,
        top: -7
    }

});

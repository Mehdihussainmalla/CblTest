import React from "react";
import {StyleSheet} from 'react-native'
import { moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize'
export const styles= StyleSheet.create({
    wrapper: {
        marginBottom: moderateScaleVertical(24),
        backgroundColor: colors.SECONDARY_COLOR,
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(8),
        marginRight: moderateScaleVertical(20),
        marginLeft: moderateScaleVertical(20)
      },
    
      postHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 6,
        height: moderateScaleVertical(60),
      },
      profilePicture: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        // borderWidth: 1.6,
        // borderColor: '#ff8501',
      },
      posterName: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileName: {
        color: colors.WHITE,
        fontFamily:fontFamily.BarlowSemiBold,
        fontSize:textScale(16)
      },
      loc: {
        color: colors.LIGHTGREYTEXT,
        fontFamily:fontFamily.BarlowRegular,
        fontSize:moderateScale(13)
      },
      postImage: {
        width: '100%',
        height: moderateScaleVertical(312),
      },
      postDesc: {
        color: colors.white,
        textAlign: 'justify',
        fontSize: textScale(15),
       fontFamily:fontFamily.BarlowRegular,
       
      },
      postFooter: {
        marginHorizontal: moderateScaleVertical(10),
        marginVertical: moderateScaleVertical(16),
      },
      postFooterTxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(8),
      },
      textCommon: {
        color: colors.white,
        fontFamily:fontFamily.BarlowRegular,
        fontSize:textScale(15)
      },
    });
    


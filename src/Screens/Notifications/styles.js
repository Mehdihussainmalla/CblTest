import React from "react";
import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({

    view:{
    
        // borderBottomWidth:0.5,
      borderBottomColor:colors.white,
      padding:10,
      marginTop:10,
      flexDirection:'row',
      marginLeft:moderateVerticalScale(24),

    },
    addtext:{
    
        color:colors.white,
      fontSize:textScale(16),
      fontFamily:fontFamily.Barlow,
    //   padding:6
    }, 
    imageview:{

      height:moderateVerticalScale(40),
      width:moderateVerticalScale(40), 
      borderRadius:20,
      marginRight:3
    },
    title:{
    paddingLeft:moderateScale(7),
    marginLeft:moderateScale(5),
      fontSize:textScale(16),
      color:colors.redB,
      fontFamily:fontFamily.BarlowMedium,


    },
    description:{
        
        fontFamily:fontFamily.Barlow,
        fontSize:textScale(12),
        color:colors.time_color,
        marginLeft:moderateVerticalScale(11),


    },
    divider:{
      marginLeft:moderateScale(90)
    }

  });
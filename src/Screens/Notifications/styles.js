import React from "react";
import {StyleSheet} from 'react-native'
import { moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({

    view:{
        // backgroundColor:'blue',
        // borderWidth:0.5,
        borderBottomWidth:0.5,
      borderBottomColor:colors.white,
      padding:10,
      marginTop:10,
      flexDirection:'row',
      marginLeft:moderateVerticalScale(24),
    //   marginRight:moderateVerticalScale(23)
    },
    addtext:{
    
        color:colors.white,
      fontSize:textScale(16),
      fontFamily:fontFamily.Barlow,
    //   padding:6
    }, 
    imageview:{
    //   marginTop:moderateVerticalScale(5),
      height:moderateVerticalScale(40),
      width:moderateVerticalScale(40),
      borderRadius:20
    },
    title:{
    paddingLeft:7,
    marginLeft:5,
      fontSize:16,
      color:colors.redB,
      fontFamily:fontFamily.Barlow,


    },
    description:{
        
        fontFamily:fontFamily.Barlow,
        fontSize:textScale(12),
        color:colors.time_color,
        marginLeft:5,

    }

  });
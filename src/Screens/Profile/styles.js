import React from "react";
import { StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, textScale } from "../../styles/responsiveSize";
export const styles=StyleSheet.create({

    container:{
     
        flexDirection:'row',
        marginLeft:moderateVerticalScale(24),
        marginRight:moderateVerticalScale(23),
        marginTop:moderateScale(34),
        height:height/21,
        alignContent:'center',
        alignItems:'center'
    },
    profileimage:{
        flex:0.3,
    alignItems:'flex-start' ,
    fontFamily:fontFamily.BarlowRegular
        
    },
    profiletext:{
        fontFamily:fontFamily.BarlowRegular,
        color:colors.white,
        fontSize:textScale(15),
    }
})
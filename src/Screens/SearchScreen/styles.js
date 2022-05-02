import React from "react";
import {StyleSheet} from 'react-native'

import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import colors from '../../styles/colors'
import { textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
export const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:colors.PRIMARY_COLOR,
     marginLeft:moderateScale(24),
    marginRight:moderateVerticalScale(23)
    },

    suggestionstyle:{color:colors.matterhorn,
         fontSize:textScale(15), 
         paddingTop:10,
        fontFamily:fontFamily.BarlowSemiBold,
        color:colors.white
    
    },
    textview:{
  marginTop:10

    },
    textstyle:{
        fontFamily:fontFamily.BarlowRegular,
        fontSize:textScale(15),
        color:colors.white

    }
})

import React from "react";
import  {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import { height, moderateScaleVertical, width } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
  container:{
    //   backgroundColor:'red',
      marginTop:moderateScale(10),
      marginLeft:moderateVerticalScale(24),
      marginRight:moderateVerticalScale(23),
      flexDirection:'row',
      
      height:height/12
  },
  istimagestyle:{
      backgroundColor:colors.matterhorn,
      width:width/5,
      height:height/12,
      borderRadius:moderateScale(8),
      justifyContent: 'center',
     
      
  },
  sndimagestyle:{    
 backgroundColor:colors.matterhorn,
  width:width/5,
  height:height/12,
  borderRadius:moderateScale(8),
  marginLeft:moderateVerticalScale(16),
  justifyContent:'center'
  
},
plusimage:{
  
    alignSelf:'center',
    // marginVertical:moderateScaleVertical(20)
},

inputview:{
    // backgroundColor:'red',
    marginTop:moderateScale(16),
    marginLeft:moderateScaleVertical(24),
    marginRight:moderateScaleVertical(23),
  
},
addlocstyle:{
    marginLeft:moderateScaleVertical(24),
    marginRight:moderateScaleVertical(23),
    marginVertical:moderateScaleVertical(16)
}
});

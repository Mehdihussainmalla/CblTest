
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
        marginLeft: moderateScale(10),
        marginRight: moderateScale(23),
        marginTop: verticalScale(20),
        // alignItems: 'center'
    },
    codeview:{
            flexDirection:'row',
            justifyContent:'space-between', 
            marginVertical:moderateScale(12), 
            marginLeft: moderateScale(10),
            marginRight: moderateScale(23),
            

    },
    firstname: {
       
        borderRadius: verticalScale(5),
        flex: 0.5,
        // marginRight: moderateScale(24),
        backgroundColor: colors.matterhorn,
        marginHorizontal: moderateScale(10),
     


    },
    lastname: {
        height:moderateScale(48),
        flex: 0.5,
        fontSize: textScale(14),
        backgroundColor: colors.matterhorn,
        borderRadius: verticalScale(5),
     
    },
    emailview:{
        marginTop:10,
        marginLeft:moderateVerticalScale(24),
        marginRight:moderateScaleVertical(23)   
    },
  
  passwordview:{
      marginBottom:3,
    marginLeft:moderateScaleVertical(24),
    marginRight:moderateScaleVertical(23),

    
  },
 confirmpasswordview:{
    marginTop:10,
    marginLeft:moderateScaleVertical(24),
    marginRight:moderateScaleVertical(23),
  }
    



})
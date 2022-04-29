
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScaleVertical, textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    headerview: {

        // marginTop: moderateScale(10),
        paddingRight: moderateScale(15),
        paddingHorizontal: moderateVerticalScale(10)
    },

    textview: {
        // backgroundColor:'green',
        // flex:0.4,

        marginRight: moderateScale(23),
        marginLeft: moderateScale(24),

    },
    createview: {
        // height: moderateScale(40),
    },
    createtext: {
        fontSize: textScale(24),
        fontFamily: fontFamily.BarlowBold,
        color: colors.white,
        letterSpacing: 0,
        lineHeight: moderateScale(32),
    
    },


    accountview: {

        height: moderateScale(24)
    },
    bottomtext: {
        fontSize: textScale(15),
        color: colors.lightgrey,
        fontFamily: fontFamily.BarlowRegular,
        lineHeight: moderateScale(32),
        letterSpacing: 0
    },
    namesview: {
flex:0.2,
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: moderateScale(10),
        marginRight: moderateScale(23),
        // height: moderateScale(48),
        // marginTop: verticalScale(20),

        alignItems: 'center'
    },
    codeview:{

        // backgroundColor:'white',
        
      flex:0.1,
            flexDirection:'row',justifyContent:'space-between', 
            marginVertical:moderateScale(24), 
            marginLeft: moderateScale(10),
            marginRight: moderateScale(23),
            // height: moderateScale(48),
            // marginTop: verticalScale(8),

    },
    firstname: {
       
        borderRadius: verticalScale(5),
        // textAlign:'center',
        // height:moderateScale(48),
        flex: 0.5,
        marginRight: moderateScale(24),
        backgroundColor: colors.matterhorn,
        marginHorizontal: moderateScale(15),
        // width:moderateScale(100)


    },
    lastname: {
        height:moderateScale(48),
        flex: 0.5,
        fontSize: textScale(14),
        backgroundColor: colors.matterhorn,
        // marginHorizontal:moderateScale(30),
        // width:moderateScale(100),
        borderRadius: verticalScale(5),
     
    },
    emailview: {
        flex:0.07,
        backgroundColor:'blue',
        // height:moderateScale(48),
        // marginTop: moderateScale(8),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(20),
        backgroundColor: colors.matterhorn,
        borderRadius: verticalScale(5)
    },
  btnstyle:{
      flex:0.1,
      marginTop:15,
      marginLeft:moderateScaleVertical(24),
      marginRight:moderateScaleVertical(23),
  },
  passwordview:{
      marginBottom:30,
    marginLeft:moderateScaleVertical(24),
    marginRight:moderateScaleVertical(23),

    flex:0.2, 
  },
 confirmpasswordview:{
    marginTop:10,
    marginLeft:moderateScaleVertical(24),
    marginRight:moderateScaleVertical(23),

    flex:0.1
  }
    



})
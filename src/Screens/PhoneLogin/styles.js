
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: colors.darkGrey
    // },

    headerview: {
        // flex:1,
        marginTop: moderateScale(10),
        paddingRight: moderateScale(15),
        paddingHorizontal: moderateVerticalScale(10)
    },
    view1: {
    
        height: moderateScale(64),
        width: moderateScale(375),
        //backgroundColor:'red',
        paddingHorizontal: moderateScale(24)
    },
    welcometext: {
        fontSize: scale(24),
        fontFamily: fontFamily.BarlowBold,
        color: colors.white,
        letterSpacing: 0,
        lineHeight: scale(32)
    },
    welcomeview: {

        height: moderateScale(40),
        width: moderateScale(328)
    },
    bottomview: {
        height: moderateScale(24),
        width: moderateScale(328),


    },
    bottomtext: {
        color: colors.greyA,
        fontSize: scale(15),
        fontFamily: fontFamily.BarlowRegular
    },
    passview: {
        
        marginTop: moderateScale(10),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.7,
        // height: moderateScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: colors.matterhorn,
      
    },
    show: {
        // flex:0.2,
        alignItems:'center',
       paddingRight: moderateScale(20),
        // marginTop: moderateScale(9),
        paddingLeft: moderateScale(16),
        paddingVertical:moderateScale(15)



    },
    
    mainview: {
        flex:0.9,
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: moderateScale(15),


    },
    otp: {
        marginTop:verticalScale(2),
        fontSize: textScale(13),
        fontFamily: fontFamily.BarlowRegular,
        color:colors.white
    },
    password: {
        paddingLeft: moderateScale(38),
        color:colors.redB,
        alignSelf: 'center',
        fontSize: textScale(13),
        fontFamily: fontFamily.BarlowBold,
       color:colors.blue



    },
    optview: {
        // marginLeft:moderateScale(24),
        height: moderateScale(32),
        marginRight: moderateScale(80),
        paddingTop: 5


    },
    passwordview: {
        // marginRight:moderateScale(23),
        paddingRight: moderateScale(25),
        marginTop: verticalScale(5),
        

    },
    phoneview:{
        flexDirection:'row',
        marginHorizontal:2,
        justifyContent:'space-between'
    },
    numberview:{
        marginHorizontal:10,
   },
   container:{
       flex:1,
       backgroundColor:colors.darkGrey,
       
   },
   alignstyle:{
     marginHorizontal:moderateScale(20),
    //    bottom:0,
    //    position:'absolute',
    // position:'absolute', 
    //    bottom:0,
   },
   btncomp:{ 
    //    flex:0.9,
      // marginLeft:20,
    
       
       
   },
   codeview:{
      
    flexDirection:'row',justifyContent:'space-between', 
    marginVertical:moderateScale(24), 
    marginLeft: moderateScale(10),
    marginRight: moderateScale(23),
    height: moderateScale(48),
    marginTop: verticalScale(20),
   },
   startedbtn: {
    marginLeft:moderateScale(15),
    // marginRight:moderateScale(20),
    //    position:'absolute', 
    //    bottom:0,

       
    }

}); 

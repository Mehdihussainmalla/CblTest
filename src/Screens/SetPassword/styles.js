import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale ,verticalScale} from 'react-native-size-matters'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
moderateScale
export const styles=StyleSheet.create({


 headerview: {
     flex:0.1,
    marginTop: moderateScale(10),
    paddingRight: moderateScale(15),
    paddingHorizontal: moderateVerticalScale(10)
},
setpasswordstyle:{
    flex:0.1,
    marginRight:moderateScale(23),
    marginLeft:moderateScale(24),
    height:moderateScale(48),
    // backgroundColor:'#B8B8B8'
},
passwordview:{
    // flex:0.5,
    height:moderateScale(48),
    },
    passwordtext:{
        fontSize:textScale(24),
        color:colors.white,
        fontFamily:fontFamily.Barlow,
        letterSpacing:0,
        lineHeight:moderateScale(32)
    },
btmtextview:{
    height:moderateScale(23),
},

    btmtext:{
        
        fontFamily:fontFamily.BarlowRegular,
        fontSize:textScale(15),
        color: colors.smalltextcolor,
    },
    passwordbtnview:{
        flex:0.2,
        marginTop: moderateScale(25),
        // marginLeft: moderateScale(24),
        // marginRight: moderateScale(20),
        // backgroundColor: colors.matterhorn,
        // borderRadius: verticalScale(5),
        
    },
   cnfmpasswordbtnview:{
    //    flex:0.5,

    marginTop:moderateScale(15),
    borderRadius:verticalScale(5),

    

    },
    inputstyle:{
        // flex:0.1,
       
        marginTop:verticalScale(32),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(20),
        backgroundColor: colors.matterhorn,
        borderRadius: verticalScale(5),

    },
    inputstyle2:{
        
        marginTop:moderateScale(17),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(20),
        backgroundColor: colors.matterhorn,
        borderRadius: verticalScale(5),

    },
   startedbtn: {
    marginLeft:moderateScale(15),
    // marginRight:moderateScale(20),
    //    position:'absolute', 
    //    bottom:0,

       
    }
})
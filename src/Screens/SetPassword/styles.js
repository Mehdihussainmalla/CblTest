import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale ,verticalScale} from 'react-native-size-matters'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
moderateScale
export const styles=StyleSheet.create({


 headerview: {
    // flex:1,
    marginTop: moderateScale(10),
    paddingRight: moderateScale(15),
    paddingHorizontal: moderateVerticalScale(10)
},
setpasswordstyle:{
    marginRight:moderateScale(23),
    marginLeft:moderateScale(24),
    height:moderateScale(48),
    // backgroundColor:'#B8B8B8'
},
passwordview:{
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
        // backgroundColor:'white',
        marginTop: moderateScale(25),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(20),
        backgroundColor: colors.matterhorn,
        borderRadius: verticalScale(5),
        
    },
   cnfmpasswordbtnview:{

    marginTop:moderateScale(15),
    borderRadius:verticalScale(5)

    }
        
})
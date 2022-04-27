
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    headerview: {
        marginTop: moderateScale(10),
        paddingRight: moderateScale(15),
        paddingHorizontal: moderateVerticalScale(10)
    },

    textview:{
        
        marginRight:moderateScale(23),
        marginLeft:moderateScale(24),
       
    },
    createview:{
        height:moderateScale(40),
    },
    createtext:{
        fontSize:textScale(24),
        fontFamily:fontFamily.BarlowBold,
        color:colors.white,
        letterSpacing:0,
        lineHeight:moderateScale(32),
        letterSpacing:0
    },
    
    
    accountview:{
        
        height:moderateScale(24)
    },
    bottomtext:{
        fontSize:textScale(15),
        color:colors.lightgrey,
        fontFamily:fontFamily.BarlowRegular,
        lineHeight:moderateScale(32),
        letterSpacing:0
    },
    namesview:{
        
        
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:moderateScale(24),
        marginRight:moderateScale(23),
        height:moderateScale(48),
        marginTop:verticalScale(20),
        //alignItems:'center'
    },
    firstname:{
        backgroundColor:'red',
        marginHorizontal:moderateScale(30),
        width:moderateScale(100)


},
lastname:{
    fontSize:textScale(14),
    backgroundColor:'lightgrey',
    marginHorizontal:moderateScale(30),
    width:moderateScale(100),
    borderRadius:5

}
    


})
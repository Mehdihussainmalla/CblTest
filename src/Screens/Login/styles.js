
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    phoneview: {
        marginLeft:moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23),
        alignItems: 'center',
        marginTop:moderateVerticalScale(35),
        backgroundColor:colors.darkGrey
    },
    textview:{
        marginHorizontal:moderateVerticalScale(23),
        marginVertical:moderateVerticalScale(10),
    },
    container: {
        
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        backgroundColor:colors.darkGrey
    },
    logoview: {
        marginLeft:moderateScale(24),
        marginRight:moderateScale(23),

        marginTop: moderateScale(10),
        height: moderateScale(178),
        marginVertical:25,
        width: moderateScale(121),
        marginHorizontal: moderateVerticalScale(127)

    },
    logoimage: {

        // width: moderateScale(121),
        height: moderateScale(178)

    },

    texttt: {
        color: colors.greyA,
        textAlign: 'center',
        fontSize: textScale(12),
        lineHeight: 20,
        fontFamily: fontFamily.BarlowRegular
    },
    loginphonenumber:{
        flex:0.1,
        marginTop:25
    },
    loginbtn: {
        backgroundColor: 'red',
        borderRadius: moderateScale(8),
        width: moderateScale(328),
        letterSpacing: 0,
        fontFamily: fontFamily.BarlowRegular
    },
    orview:
    { 
        marginTop:moderateScale(20),
        height: moderateScale(32),
        width: moderateScale(328),

    },
    ortext: {
        fontSize: scale(16),
        lineHeight: moderateScale(20),
        textAlign: 'center',
        color:colors.white
    },
    socialview: {
        flex: 0.5,
        //  width: '100%', 
    },
    goolgeview: {
        flexDirection: 'row',
        width: moderateScale(328),
        backgroundColor: colors.white,
        borderRadius: scale(5),
        padding: moderateScale(13),
        paddingRight: moderateScale(24),
        marginRight: moderateScale(5),
        marginTop: moderateScale(15)

    },
    googletext: {
        color: colors.black,
        fontSize: scale(14),
        fontFamily: fontFamily.BarlowRegular,
        letterSpacing: 0,
        textAlign: 'center',
        alignSelf: 'center',
        paddingLeft: moderateScale(70)
    },
    imagestyle: {
        height: 20,
        width: 20,
        paddingLeft: 10
    },
    facebookview: {
        flexDirection: 'row',
        width: moderateScale(328),
        backgroundColor: colors.white,
        borderRadius: scale(5),
        padding: moderateScale(13),
        paddingRight: moderateScale(24),
        marginRight: moderateScale(5),
        marginTop: moderateScale(15)

    },
    facebooktext: {
        color: colors.black,
        fontSize: scale(14),
        fontFamily: fontFamily.BarlowRegular,
        letterSpacing: 0,
        textAlign: 'center',
        alignSelf: 'center',
        paddingLeft: moderateScale(77)
    },
    imagestyle1: {
        height: moderateScale(19),
        width: moderateScale(10),
        paddingLeft: 10
    },
    appleview: {
        flexDirection: 'row',
        width: moderateScale(328),
        backgroundColor: colors.white,
        borderRadius: scale(5),
        padding: moderateScale(13),
        paddingRight: moderateScale(24),
        marginRight: moderateScale(5),
        marginTop: moderateScale(15)

    },
    appletext: {
        fontSize: scale(14),
        fontFamily: fontFamily.BarlowBold,
        letterSpacing: 0,
        textAlign: 'center',
        alignSelf: 'center',
        color: colors.black,
        paddingLeft: moderateScale(70),
        lineHeight: moderateScale(20)
    },
    imagestyle2: {
        height: moderateScale(20),
        width: moderateScale(18),
        paddingLeft: 10
    },
    stringsview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(10),
        width: moderateScale(328),

    },

    newhere: {
        color: colors.white,
        fontSize: scale(13),
        fontFamily: fontFamily.BarlowRegular,
        paddingLeft: moderateScale(60),
        marginLeft:moderateScale(40)

    },
    signuptext: {
        color: colors.lightSkyB,
        fontSize: scale(13),
        fontFamily: fontFamily.BarlowRegular,
        paddingRight: moderateScale(60),
       marginRight:moderateScale(40)

    },
    
})
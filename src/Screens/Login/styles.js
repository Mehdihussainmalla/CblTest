
import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

export const styles = StyleSheet.create({
    phoneview: {
        flex: 2,
        backgroundColor: 'lightgrey',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#2E2E2E'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        backgroundColor: '#2E2E2E'
    },
    logoview: {

        marginTop: moderateScale(40),
        height: moderateScale(178),
        width: moderateScale(121),
        marginHorizontal: moderateVerticalScale(127)

    },
    logoimage: {

        width: moderateScale(121),
        height: moderateScale(178)

    },

    text: {
        padding: moderateScale(10),
        //paddingLeft:moderateScale(10)
    },
    texttt: {
        fontFamily: fontFamily.BarlowBold,
        fontSize: scale(13),
        color: colors.greyA

    },
    loginbtn: {
        backgroundColor: 'red',
        // height:moderateScale(40),
        marginTop: moderateScale(50),
        borderRadius: moderateScale(8),
        width: moderateScale(328),
        letterSpacing: 0,
        fontFamily: fontFamily.BarlowRegular
    },
    orview:
    {
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
        flex: 2,
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
        // backgroundColor:'green',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(10),
        width: moderateScale(328),

    },

    newhere: {
        color: colors.white,
        fontSize: scale(15),
        fontFamily: fontFamily.BarlowRegular,
        paddingLeft: moderateScale(60),
        marginLeft:moderateScale(40)

    },
    signuptext: {
        color: colors.lightSkyB,
        fontSize: scale(15),
        fontFamily: fontFamily.BarlowRegular,
        paddingRight: moderateScale(60),
       marginRight:moderateScale(40)

    },
    
})
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { height, textScale, width } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
export const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.matterhorn,
        height: moderateVerticalScale(45),
        alignItems: 'center',
        // flex:0.1
    },
    gallerytext: {
        color: colors.white,
        fontFamily: fontFamily.BarlowSemiBold,
        fontSize: textScale(16),
        paddingLeft: moderateScale(20)
    },

    recenttext: {
        color: colors.white,
        fontFamily: fontFamily.BarlowSemiBold,
        fontSize: textScale(16)
    },
    downicon: {

        marginLeft: moderateVerticalScale(10),
        marginVertical: moderateVerticalScale(10)
    },
    imagelist: { height: width / 3, width: width / 3 }
})
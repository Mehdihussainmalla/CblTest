import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';

export const introStyles = StyleSheet.create({
    mainDiv: {
        backgroundColor:colors.PRIMARY_COLOR,
        flex: 1
    },
    tutMainStyle: {
        alignSelf: 'center',
        height: height - height / 4,
        width: width - 60,
        marginTop: moderateScale(15),
        backgroundColor: colors.matterhorn,
        borderRadius: moderateScale(16),
        shadowColor: colors.matterhorn,
        shadowOffset: { height: -2, width: -2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    titleDesContainer: {
        flex: 0.5,
        justifyContent: 'center',
        paddingTop: moderateScaleVertical(40)
    },
    tittleTextView:
    {

        width: moderateScale(280),
        paddingLeft: moderateScale(10),
        height: moderateScale(40)
    },
    tittleText:
    {
        color: '#FFFFFF',
        fontSize: textScale(22),
        textAlign: 'center'
    },
    desText:
    {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    tutImage:
    {
        width: moderateScale(width / 1.5),
        height: moderateScale(width / 1.5),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: moderateScaleVertical(100),
    },
    nextBtn: {
        color: colors.white,
        fontSize: textScale(15)
    },
    getStartStyle: {
        fontSize: textScale(14),
        color: colors.white,
        lineHeight: 42,
        alignSelf: 'center'
    },
    dec: {
        marginLeft: moderateScaleVertical(24),
        marginRight: moderateScaleVertical(23),
       


    }
});
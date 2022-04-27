import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';


const ButtonComp = ({ title, onPress, disable }) => {
    return (
        <View>
            <TouchableOpacity
                //    activeOpacity={0.8}
                onPress={onPress}
                style={styles.btnStyle} disabled={disable}>
                <Text style={styles.btnText} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        marginLeft: moderateScale(24),
        marginRight: moderateScale(24),
        backgroundColor: 'red',
        marginTop: moderateScale(50),
        borderRadius: moderateScale(8),
        // width: moderateScale(328),
        justifyContent: 'center',
        fontFamily: fontFamily.BarlowBold
    },
    btnText: {
        fontSize: scale(14),
        alignContent: 'center',
        //textAlign:'center',
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fontFamily.BarlowBold,
        lineHeight: moderateScale(20),

    }
})

export default ButtonComp
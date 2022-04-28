import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity ,KeyboardAvoidingView,Platform} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

export default function ButtonComp({
    ButtonText = '',
    btnStyle = {},
    buttonTxt = {},
    btnIcon,
    
    onPress = () => { },
}) {
    return (

        <TouchableOpacity
            style={{
                ...styles.btnStyle,
                ...btnStyle,
                
            }}
            onPress={onPress}>
            {!!btnIcon ? <Image source={btnIcon} style={styles.imgIcon} /> : <View />}

  {/* <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}> */}
  {/* <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}> */}
            <Text style={{
                ...styles.buttonTxt,
                ...buttonTxt,
            }}>{ButtonText}</Text>
            {/* </View> */}
            {/* </KeyboardAvoidingView> */}

            <View />

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btnStyle: {
        
        marginLeft:moderateScale(15),
        height: moderateScale(48),
        marginRight:moderateScale(23),
        width: moderateScale(325),
        marginLeft:moderateScale(24),
        backgroundColor: '#F43738',
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
         justifyContent: 'space-between',
        position:'absolute',
        bottom:0
    },
    buttonTxt: {
        fontSize: textScale(14),
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
    },
    imgIcon: {
        
        marginLeft: moderateScale(19)
    }
});
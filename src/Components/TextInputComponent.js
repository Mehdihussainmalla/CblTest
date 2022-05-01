//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { textScale } from '../styles/responsiveSize';



const TextInputComponent = ({
    placeholder = '',
    // keyboardType = '',
    onChangeText = '',
   
}) => {

    return (
        <SafeAreaView>
            <TextInput  onChangeText={onChangeText}
                placeholderTextColor={colors.white}
                placeholder={placeholder}
                // keyboardType={keyboardType}
                style={styles.input}


            />
        </SafeAreaView>

    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    input: {
        height: moderateScale(48),
        backgroundColor: colors.matterhorn,
        marginRight: moderateScale(2),
        marginLeft: moderateScale(2),
        borderRadius: verticalScale(5),
        paddingLeft: moderateScale(8),
        paddingVertical: verticalScale(10),
        color:colors.white,
        fontFamily:fontFamily.BarlowRegular



    },
    text: {




    }
})
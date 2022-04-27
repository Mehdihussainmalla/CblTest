//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, } from 'react-native-size-matters';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { textScale } from '../styles/responsiveSize';



const TextInputComponent = ({
    placeholder = '',
    keyboardType = '',
    onChangeText = ''
}) => {

    return (
        <SafeAreaView>
            <TextInput onChangeText={onChangeText} placeholder={placeholder}
                keyboardType={keyboardType}

                style={styles.input}


            />
        </SafeAreaView>

    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    input: {
    //     backgroundColor: colors.matterhorn,
    // //    height: moderateScale(43),
    //      marginRight: moderateScale(24),
    //      fontFamily:fontFamily.BarlowBold,
         
        //marginVertical: 5,
        // justifyContent: 'center',
        // marginLeft: moderateScale(24),
        // padding: moderateVerticalScale(5),
    },
    text: {
        // fontSize: textScale(16),
        // marginRight:moderateScale(16),
        
        
    }
})
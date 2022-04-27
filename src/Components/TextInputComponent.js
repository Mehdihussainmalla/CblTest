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
        backgroundColor: colors.matterhorn,
         marginRight: moderateScale(24),
         marginLeft:moderateScale(23),
        
    },
    text: {
        //  fontSize: textScale(16),
        // marginRight:moderateScale(16),
        
        
    }
})
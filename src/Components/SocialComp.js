import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import imagePath from '../constants/imagePath'


const SocialComp = ({title , onPress,disable}) => {
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
          flexDirection:'row',
        height:moderateScale(48),
        borderRadius: moderateScale(8),
         justifyContent:'space-evenly',
        height: moderateScale(48),
        backgroundColor:colors.white,
        marginTop: moderateScale(15),
       
        margin:moderateVerticalScale(5),
        // fontFamily: fontFamily.BarlowRegular
    },

    btnText: {
        fontSize: scale(14),
        alignContent: 'center',
        //textAlign:'center',
        alignSelf: 'center',
        color: colors.black,
       fontFamily:fontFamily.BarlowRegular,
        lineHeight: moderateScale(20),

    }
})

export default SocialComp
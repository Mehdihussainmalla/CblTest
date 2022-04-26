
import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:moderateScale(812),
        width:moderateScale(375),
        backgroundColor: '#2E2E2E',
    },
    logoview:{
    
        height:moderateScale(178),
        width:moderateScale(121),
        marginHorizontal:moderateVerticalScale(127)

    },
    logoimage:{
        width:moderateScale(121),
        height:moderateScale(178)

    },
    text:{
        width:moderateScale(328),
       height:moderateScale(48),
       marginLeft:moderateVerticalScale(23),
    marginRight:moderateVerticalScale(24),
    



    },
    text:{
      
    }
});
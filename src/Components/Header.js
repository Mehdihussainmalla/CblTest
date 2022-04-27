import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import imagePath from '../constants/imagePath'


const Header = ({onPressBack}) => {
    // const navigation=useNavigation();
    const goBack =()=>{
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        onPress={!!onPressBack ? onPressBack: ()=>goBack() }>
      <Image source={imagePath.BACK_ARROW}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'lightgrey',
        flexDirection:'row',
      // justifyContent:'flex-start',
        height:moderateScale(42),
        marginTop:moderateScale(10),
        paddingLeft:moderateScale(18)
       
    }
})
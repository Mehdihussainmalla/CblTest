import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'

const AddScreen = ({navigation}) => {
  return (
 <WrapperContainer style={{backgroundColor:'red'}}>

      <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.POST_DETAIL)}
       style={{backgroundColor:'white', justifyContent:'center',
       alignItems:'center',
       marginTop:30}}>
      <Text style={{fontSize:25}}>AddScreen</Text>
      </TouchableOpacity>
      </WrapperContainer>
  )
}

export default AddScreen

const styles = StyleSheet.create({})
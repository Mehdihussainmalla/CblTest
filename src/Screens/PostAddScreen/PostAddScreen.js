import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
// import CameraRoll from "@react-native-community/cameraroll";

const PostAddScreen = () => {
  return (
  <WrapperContainer>

      <Header isBackIcon={true}
      title=' Add info'/>
     <View style={{marginTop:10}}><Text>hello   </Text></View>
      </WrapperContainer>
  )
}

export default PostAddScreen


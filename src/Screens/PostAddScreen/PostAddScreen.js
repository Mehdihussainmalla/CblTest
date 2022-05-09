import { StyleSheet, Text, View ,PermissionsAndroid, Platform,TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './styles'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'



const PostAddScreen = () => {

  return (
  <WrapperContainer>

      <Header isBackIcon={true}
      title=' Add info'/>
     <TouchableOpacity 
     
     
     
     style={{marginTop:10}}><Text>hello 
         </Text></TouchableOpacity>
      </WrapperContainer>
  )
}

export default PostAddScreen


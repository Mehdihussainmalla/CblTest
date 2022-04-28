import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { styles } from './styles'
import Header from '../../Components/Header'
import TextInputComponent from '../../Components/TextInputComponent'
import strings from '../../constants/lang'
import ButtonComp from '../../Components/ButtonComp'
const SetPassword = () => {
  return (
      <WrapperContainer>
        <View style={{flex:1}}>
    <View style={styles.headerview}>
    <Header />
</View>
<View style={styles.setpasswordstyle}>
    <View style={styles.passwordview}>
<Text style={styles.passwordtext}>Set Password</Text>
<View style={styles.btmtextview}>
<Text style={styles.btmtext}>Create secure and unique password.</Text>
</View>
</View>
</View>
<View style={{flex:0.8}}>
      <View style={styles.inputstyle}> 

      <TextInputComponent placeholder={strings.PASSWORD}/>
</View>
<View style={styles.inputstyle2}> 

<TextInputComponent placeholder={strings. CONFIRM_PASSWORD}/>
</View>
</View>
<View style={styles.startedbtn}>
  <ButtonComp ButtonText='get started'/>
</View>
</View>
</WrapperContainer>
  )
}

export default SetPassword
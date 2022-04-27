import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { styles } from './styles'
import Header from '../../Components/Header'
import TextInputComponent from '../../Components/TextInputComponent'
import strings from '../../constants/lang'
const SetPassword = () => {
  return (
      <WrapperContainer>
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
<View style={styles.passwordbtnview}>
    <TextInputComponent keyboardType='numeric' placeholder='Password'/>
</View>
<View style={styles. cnfmpasswordbtnview}>
<TextInputComponent keyboardType='numeric' placeholder='Confirm Password'/>
</View>
</WrapperContainer>
  )
}

export default SetPassword
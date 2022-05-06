import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { styles } from './styles'
import Header from '../../Components/Header'
import TextInputComponent from '../../Components/TextInputComponent'
import strings from '../../constants/lang'
import ButtonComp from '../../Components/ButtonComp'
import navigationStrings from '../../navigation/navigationStrings'
import { useNavigation } from '@react-navigation/native'
const SetPassword = () => {
  const navigation = useNavigation()
  return (

    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.setpasswordstyle}>
          <View style={styles.passwordview}>
            <Text style={styles.passwordtext}>{strings.SET_PASSWORD}</Text>
            <View style={styles.btmtextview}>
              <Text style={styles.btmtext}>{strings.NEW_PASS}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.8 }}>
          <View style={styles.inputstyle}>

            <TextInputComponent placeholder={strings.PASSWORD} />
          </View>
          <View style={styles.inputstyle2}>

            <TextInputComponent placeholder={strings.CONFIRM_PASSWORD} />
          </View>
        </View>
        <View style={styles.startedbtn}>
          <ButtonComp onPress={() => navigation.navigate(navigationStrings.OTP_SCREEN)}
            ButtonText='get started' />
        </View>
      </View>
    </WrapperContainer>
  )
}

export default SetPassword
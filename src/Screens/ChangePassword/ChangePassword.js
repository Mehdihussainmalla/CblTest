import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import TextInputComponent from '../../Components/TextInputComponent'
import ButtonComp from '../../Components/ButtonComp'
import strings from '../../constants/lang'
import { styles } from './styles'


const ChangePassword = () => {
    return (
        <WrapperContainer>
            <View style={{ flex: 1, }}>
                <ScrollView>
                    <Header isBackIcon={true}
                        title={strings.CHANGE_PASSWORD} />


                    <View style={styles.passwordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.PASSWORD} />
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>
                    <View style={styles.confirmpasswordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.CONFIRM_PASSWORD} />
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.btnstyle}>
                    <ButtonComp ButtonText={strings.SAVE} />
                </View>
            </View>
        </WrapperContainer>
    )
}

export default ChangePassword


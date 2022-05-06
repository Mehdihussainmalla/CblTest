import { StyleSheet, Text, View, ScrollView, ActionSheetIOS } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import TextInputComponent from '../../Components/TextInputComponent'
import ButtonComp from '../../Components/ButtonComp'
import strings from '../../constants/lang'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { apiPost } from '../../utils/utils'
import { CHANGE_PASSWORD } from '../../config/urls'
import actions from '../../redux/actions'
import { useNavigation } from '@react-navigation/native'


const ChangePassword = () => {

    const navigation = useNavigation();

    const userData = useSelector(state => state?.auth?.userData);

    // console.log('check userdata for change password', userData);

    const [state, setState] = useState({

        password: '',
        setPassword: '',
        confirmPassword: '',
    });
    const { password, setPassword, confirmPassword } = state;

    const updateState = data => setState(state => ({ ...state, ...data }));

    const onChangePassword = async () => {
        // console.log(password, setPassword,confirmPassword,"ddhddsii cxcfds sdas")

        if (setPassword.length <= 4) {
            alert('password length must be minimum 4')
        }
        else {
            if (setPassword === confirmPassword) {
                let updateApiData = {
                   user_id: userData?.id,
                    password: password,
                    setPassword:setPassword,
                    confirmPassword: confirmPassword,

                }
                console.log("check api data before changing", updateApiData)

                try {
                    const res = await actions.changePassword(updateApiData);
                    console.log("check res from the actions",)
                    navigation.goBack();
                    alert("password updated sucessfully")

                } catch (error) {
                    console.log("error raised", error)
                    alert(error?.message)

                }

            }
            else {
                alert("password and confrim password must match")
            }

        }
    }


    return (
        <WrapperContainer>
            <View style={{ flex: 1, }}>
                <ScrollView>
                    <Header isBackIcon={true}
                        title={strings.CHANGE_PASSWORD} />


                    <View style={styles.passwordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.PASSWORD}
                                onChangeText={event => updateState({ password: event })} 
                                value={password}/>
                        </View>

                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>


                    <View style={styles.passwordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.SET_PASSWORD}
                                onChangeText={event => updateState({ setPassword: event })}
                                value={setPassword} />
                        </View>

                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>

                    <View style={styles.confirmpasswordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.CONFIRM_PASSWORD}
                                onChangeText={event => updateState({ confirmPassword: event })}
                                value={confirmPassword} />
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>


                </ScrollView>
                <View style={styles.btnstyle}>
                    <ButtonComp ButtonText={strings.SAVE}
                        onPress={onChangePassword}
                    />
                </View>
            </View>
        </WrapperContainer>
    )
}

export default ChangePassword


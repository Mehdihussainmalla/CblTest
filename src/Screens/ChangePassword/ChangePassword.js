import { StyleSheet, Text, View, ScrollView } from 'react-native'
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



const ChangePassword = () => {

    const userData = useSelector (state => state?.auth?.userData);
    // console.log('check userdata for change password', userData);

    const [state, setState] = useState({
        id:'115951748002509989098',
        password:'',
        confirmPassword:'',
    });
    const {password, confirmPassword}=state;

    const updateState = data => setState (state => ({...state, ...data}));

   const onChangePassword = ()=>{
    let apiData ={
        id:userData?.id,

        password:userData?.password,
        // password:password,
        // confirmPassword:confirmPassword
    }
    apiPost(CHANGE_PASSWORD, apiData)
    .then(res => {
      alert('Change Password successfully....!!!');
      console.log(res, 'da>>>>>>>>');
    })
    .catch(err => {
      console.log(err, 'err');
      alert('password error');
    });
};
 


    return (
        <WrapperContainer>
            <View style={{ flex: 1, }}>
                <ScrollView>
                    <Header isBackIcon={true}
                        title={strings.CHANGE_PASSWORD} />


                    <View style={styles.passwordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.PASSWORD}
                            onChangeText={event => updateState ({password:event})} />
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>
                    <View style={styles.confirmpasswordstyle}>
                        <View style={{ flex: 0.8 }}>
                            <TextInputComponent placeholder={strings.CONFIRM_PASSWORD}
                            onChangeText={event => updateState ({confirmPassword:event})} />
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.textstyle}>{strings.SHOW}</Text>
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.btnstyle}>
                    <ButtonComp ButtonText={strings.SAVE}
                    onPress={onChangePassword} />
                </View>
            </View>
        </WrapperContainer>
    )
}

export default ChangePassword


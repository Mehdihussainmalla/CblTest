import {  View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import TextInputComponent from '../../Components/TextInputComponent'
import CountryCodePicker from '../../Components/CountryCodePicker'
import ButtonComp from '../../Components/ButtonComp'
import strings from '../../constants/lang'
import { styles } from './styles'
import validator from '../../utils/validations'
import showError from '../../utils/helperfunctions'
import { useSelector } from 'react-redux'


const EditProfileScreen = () => {
    const userData= useSelector(state=> state?.auth?.userData);
    console.log('userdaataaaaaa checking from edit profile',userData);


const [state, setState]= useState({
    firstName:userData?.firstName,
    lastName:userData?.lastName,
    email:userData?.email,
    phone:userData?.phone,
    profileImage:'',
    imagetype:null,

});

 const {firstName, lastName,email, phone}=state;
 const updateState =data => setState(state=> ({...state,...data}))

 const isValidData =()=>{
    const error =validator({firstName, lastName, email,phone}) ;
    if (error){
        showError (error)
        
            return;
    }
    return true
};

const editProfileData = async()=>{
    const checkValid=isValidData();
    if(!checkValid){
        return ;
    }

};
    return (
        <WrapperContainer>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Header isBackIcon={true}
                        title={strings.EDIT_PROFILE} />

                    <View style={styles.imagestyle}>
                        <Image style={styles.imageicon}
                            source={imagePath.profile_edit_image} />
                        <View style={styles.editiconstyle}>
                            <Image source={imagePath.edit_icon} />
                        </View>
                    </View>
                    <View style={styles.inputstyle}>
                        <View style={{ flex: 0.5 }}>
                            <TextInputComponent placeholder={strings.FIRST_NAME}
                            onChangeText={event => updateState({firstName:event})} />
                        </View>
                        <View style={{ flex: 0.5, paddingLeft: 15 }}>
                            <TextInputComponent placeholder={strings.LAST_NAME}
                             onChangeText={event => updateState({lastName:event})} />
                        </View>
                    </View>
                    <View style={styles.emailstyle}>
                        <TextInputComponent placeholder={strings.EMAIL} 
                         onChangeText={event => updateState({email:event})}/>
                    </View>


                    <View style={styles.codepickerview}>
                        <View style={{ flex: 0.4 }}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <TextInputComponent placeholder={strings.PHONE_NUMBER}
                             onChangeText={event => updateState({phone:event})} />
                        </View>
                    </View>
                    
                </ScrollView>
                <View style={styles.btnstyle}>
                        <ButtonComp ButtonText={strings.SAVE_CHANGES}
                        onPress={editProfileData} />
                    </View>
            </View>
        </WrapperContainer>
    )
}

export default EditProfileScreen


import { View, Image, ScrollView, TouchableOpacity, ActionSheetIOS } from 'react-native'
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
import { useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import actions from "../../redux/actions"
import { useNavigation } from '@react-navigation/native'

const EditProfileScreen = () => {

    const navigation = useNavigation();
    const userData = useSelector(state => state?.auth?.userData);
    // console.log('userdaataaaaaa checking from edit profile', userData);


    const [countryCode, setCountryCode] = useState("91");
    const [countryFlag, setCountryFlag] = useState("IN");

    const isValidData = () => {
        const error = validator({ first_name, last_name, email, phone });
        if (error) {
            showError(error)

            return;
        }
        return true
    };

    const [state, setState] = useState({
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        email: userData?.email,
        phone: userData?.phone,
        image: userData?.image,
        imagetype: null,

    });


    const { first_name, last_name, email, phone, image } = state;
    const updateState = data => setState(state => ({ ...state, ...data }))


    const onEditProfile = async () => {
        const checkValid = isValidData();
        if (!checkValid) {
            return;
        }

        let editAPIdata = {
            image: image,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone
        }
        console.log("Edit API data : ", editAPIdata)

        actions
            .editProfile(editAPIdata)
            .then(res => {
                console.log("Edit api res_+++++", res)
                alert("Updated Profile successfully....!!!")
                navigation.goBack();
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }


    const imageUpload = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            // console.log(image, "my image>>>>>>");
            updateState({
                image: image?.sourceURL || image?.path,
                imageType: image?.mime
            })
        });
    }

    return (
        <WrapperContainer>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Header isBackIcon={true}
                        title={strings.EDIT_PROFILE} />

                    <View style={styles.imagestyle} >
                        <Image style={styles.imageicon}
                            resizeMode='stretch'
                            source={image ? { uri: image } : imagePath.profile_edit_image}
                        />
                        <TouchableOpacity activeOpacity={0.7}
                            onPress={imageUpload}
                            style={styles.editiconstyle}>
                            <Image source={imagePath.edit_icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputstyle}>
                        <View style={{ flex: 0.5 }}>
                            <TextInputComponent placeholder={strings.FIRST_NAME}
                                onChangeText={event => updateState({ first_name: event })} />
                        </View>
                        <View style={styles.lastnamestyle}>
                            <TextInputComponent placeholder={strings.LAST_NAME}
                                onChangeText={event => updateState({ last_name: event })} />
                        </View>
                    </View>
                    <View style={styles.emailstyle}>
                        <TextInputComponent placeholder={strings.EMAIL}
                            onChangeText={event => updateState({ email: event })} />
                    </View>


                    <View style={styles.codepickerview}>
                        <View style={{ flex: 0.4 }}>
                            <CountryCodePicker
                                countryCode={countryCode}
                                countryFlag={countryFlag}
                                setCountryCode={setCountryCode}
                                setCountryFlag={setCountryFlag}

                            />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <TextInputComponent placeholder={strings.PHONE_NUMBER}
                                onChangeText={event => updateState({ phone: event })} />
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.btnstyle}>
                    <ButtonComp ButtonText={strings.SAVE_CHANGES}
                        onPress={onEditProfile} />
                </View>
            </View>
        </WrapperContainer>
    )
}

export default EditProfileScreen


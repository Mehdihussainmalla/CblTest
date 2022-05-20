import { View, Image, ScrollView, TouchableOpacity, ActionSheetIOS } from 'react-native'
import React, { useEffect, useState } from 'react'
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


    const navigation = useNavigation(true);
    const userData = useSelector(state => state?.auth?.userData);
    // console.log('userdaataaaaaa checking from edit profile', userData);

    const [isLoading, setIsLoading] = useState();
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
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        image: '',
        imagetype: null,
    });



    const { first_name, last_name, email, phone, image } = state;
    const updateState = data => setState(state => ({ ...state, ...data }))

    useEffect(() => {
       
        updateState({
            first_name: userData?.first_name,
            last_name: userData?.last_name,
            email: userData?.email,
            phone: userData?.phone,
            image: userData.profile,
        }
        )
        console.log(image,"checkkkk image")
        //   setCountryCode(userData?.phone_code)
        //   setCountryFlag(userData?.country_code)

    }, [userData])


    const onEditProfile = async () => {
        const checkValid = isValidData();
        if (!checkValid) {
            return;
        }
        setIsLoading(true)
        let formData = new FormData();
        formData.append('first_name', first_name),
            formData.append('last_name', last_name),
            formData.append('email', email)
        formData.append('image', {
            uri: image,
            name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
            type: null,
        });
        console.log("api data", formData);
        let header = { "Content-Type": "multipart/form-data" }
        actions.editProfile(formData, header).then((res) => {
            console.log("check", res)
            setIsLoading(false)
            alert("api hit sucessfully !!!");
            navigation.goBack();
        }).catch((error) => {
            console.log("error occurred", error)
            alert(err.message)
        })
    }

    const changeProfile = (image) => {
        setIsLoading(true)
        let apiData = new FormData();
        apiData.append('image', {
            uri: image,
            name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
            type: 'image/jpeg',
        })
        console.log("check api data for edit profile", apiData)
        let header = { "Content-Type": "multipart/form-data" }
        actions.imgUpload(apiData, header).then((res) => {
            console.log("res>>>>>>>>for edit profile", res)

            updateState({ image: res.data })
            setIsLoading(false)


        })
    }


    const imageUpload = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            changeProfile(image.sourceURL)
        });
    }

    return (
        <WrapperContainer isLoading={isLoading} withModal={isLoading} >
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Header isBackIcon={true}
                        title={strings.EDIT_PROFILE} />

                    <View style={styles.imagestyle} >
                        <Image style={styles.imageicon}
                            resizeMode='stretch'
                            source={{ uri: image }}
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
                            <TextInputComponent
                                value={first_name}
                                placeholder={strings.FIRST_NAME}
                                onChangeText={event => updateState({ first_name: event })}
                            />
                        </View>
                        <View style={styles.lastnamestyle}>
                            <TextInputComponent
                                value={last_name}
                                placeholder={strings.LAST_NAME}
                                onChangeText={event => updateState({ last_name: event })}
                            />
                        </View>
                    </View>
                    <View style={styles.emailstyle}>
                        <TextInputComponent
                            value={email}
                            placeholder={strings.EMAIL}
                            onChangeText={event => updateState({ email: event })}
                        />
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
                            <TextInputComponent
                                value={phone}
                                placeholder={strings.PHONE_NUMBER}
                                onChangeText={event => updateState({ phone: event })}
                            />
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.btnstyle}>
                    <ButtonComp ButtonText={strings.SAVE_CHANGES}
                        onPress={onEditProfile}
                    />
                </View>
            </View>
        </WrapperContainer>
    )
}

export default EditProfileScreen


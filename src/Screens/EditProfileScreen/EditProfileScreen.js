import {  View, Image, ScrollView } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import TextInputComponent from '../../Components/TextInputComponent'
import CountryCodePicker from '../../Components/CountryCodePicker'
import ButtonComp from '../../Components/ButtonComp'
import strings from '../../constants/lang'
import { styles } from './styles'

const EditProfileScreen = () => {
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
                            <TextInputComponent placeholder={strings.FIRST_NAME} />
                        </View>
                        <View style={{ flex: 0.5, paddingLeft: 15 }}>
                            <TextInputComponent placeholder={strings.LAST_NAME} />
                        </View>
                    </View>
                    <View style={styles.emailstyle}>
                        <TextInputComponent placeholder={strings.EMAIL} />
                    </View>


                    <View style={styles.codepickerview}>
                        <View style={{ flex: 0.4 }}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <TextInputComponent placeholder={strings.PHONE_NUMBER} />
                        </View>
                    </View>
                    
                </ScrollView>
                <View style={styles.btnstyle}>
                        <ButtonComp ButtonText={strings.SAVE_CHANGES} />
                    </View>
            </View>
        </WrapperContainer>
    )
}

export default EditProfileScreen


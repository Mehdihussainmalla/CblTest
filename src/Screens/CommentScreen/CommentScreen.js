//import liraries
import React from 'react';
import {
    View, Text, StyleSheet,
    Image, ScrollView
} from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { height, textScale, width } from "../../styles/responsiveSize";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import TextInputComponent from '../../Components/TextInputComponent';


const CommentScreen = ({ route }) => {
    const item = (route?.params?.userData?.userData?.item)
    const pic = (route?.params?.userData?.userData?.item?.user?.profile)
    const profileName = (route?.params?.userData?.userData?.item?.user?.first_name)
    const lastName = (route?.params?.userData?.userData?.item?.user?.last_name)
    const email = (route?.params?.userData?.userData?.item?.user?.email)
    // console.log("check profile>>>",item)
    return (
        <WrapperContainer>

            <View style={{
                marginLeft: moderateVerticalScale(24),
                marginRight: moderateVerticalScale(23), backgroundColor: 'grey'
                , flex: 1
            }}>
                <ScrollView>
                    <Header
                        isBackIcon={true}
                        title={"Comments"} />
                    <View style={styles.container}>
                        <Image
                            style={styles.iconstyle}
                            source={{ uri: pic }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.profile}>{profileName} <Text>{lastName}</Text></Text>
                            <Text style={styles.email}>{email}</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                }}>
                    <TextInputComponent 
                    input={{width:"120%"}}
                    placeholder='Add a Comment' />
                    <ButtonComp ButtonText='Post'
                    buttonTxt={{width:'40%',marginLeft:25, }} />

                </View>
            </View>
        </WrapperContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    iconstyle: {
        marginTop: moderateVerticalScale(8),
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
        marginHorizontal: moderateScale(15)

    },
    profile: {
        marginTop: moderateScale(10),
        fontSize: textScale(13),
        color: colors.white,
        fontFamily: fontFamily.BarlowMedium
    },
    email: {
        fontSize: textScale(13),
        color: colors.white,
        fontFamily: fontFamily.BarlowMedium

    }
});


export default CommentScreen;

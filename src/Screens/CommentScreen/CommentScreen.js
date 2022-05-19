//import liraries
import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet,
    Image, ScrollView, TouchableOpacity
} from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { height, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import TextInputComponent from '../../Components/TextInputComponent';
import actions from '../../redux/actions';



const CommentScreen = ({ route }) => {
    const [comment, setComment] = useState();
    const item = (route?.params?.userData?.userData?.item)
    const pic = (item?.user?.profile)
    const profileName = (item?.user?.first_name)
    const lastName = (item?.user?.last_name)
    const email = (item?.user?.email)
    const time = (item?.time_ago)
    const id = (item?.user?.id)
    const comments = (item?.commets?.comment)
    console.log("coment show", comments)
    //  console.log("check id",id)
    console.log("check profile>>>", item)


    // useEffect(() => {
    //     console.warn("welcome")
    //     let apiData=`?post_id= ${id}`;
    //     actions.commentPost(apiData).then((res)=>{
    //         console.log("checkk response",res)
    //     })

    // }, [])

    const commentPost = () => {
        let apiData = `?post_id= ${id} &comment=${comments}`;
        console.log(apiData, "apidata")
        actions.commentPost(apiData).then((res) => {
            console.log("checkk response", res)
        }).catch((error) => {
            console.log(error, "errorr occurred")
        })
    }

    return (
        <WrapperContainer>

            <View style={styles.mainview}>
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
                    <View style={styles.timeview}>
                        <Text style={styles.timestyle}>
                            {time}
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottomview}>
                <View style={styles.inputview}>

                    <TextInputComponent
                        // onChangeText={(comment) => setComment(comment)}
                        // value={comment}
                        input={{
                            width: "138%",
                            fontSize: textScale(15),
                            fontFamily: fontFamily.BarlowMedium,

                        }}
                        placeholder='Add a Comment' />
                </View>
                <TouchableOpacity activeOpacity={0.1} style={{
                    backgroundColor: colors.redB,
                    flex: 0.3, borderRadius: 8
                }}>
                    <ButtonComp
                        onPress={() => commentPost()}
                        ButtonText='Post'
                        buttonTxt={{
                            width: moderateScale(46),
                            marginLeft: 11,
                            marginRight: 50,
                            

                        }} />
                </TouchableOpacity>
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
    mainview: {
        marginLeft: moderateVerticalScale(24),
        marginRight: moderateVerticalScale(23),
        //  backgroundColor: 'grey'
        flex: 1
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

    },
    timeview: {
        marginTop: moderateScale(4),
        marginHorizontal: moderateScale(55),
        // backgroundColor:'red'



    },
    timestyle: {
        fontSize: textScale(13),
        color: colors.white,
        fontFamily: fontFamily.BarlowMedium,
        paddingLeft: moderateScaleVertical(17)
    },
    bottomview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: moderateScaleVertical(23)
        , marginRight: moderateScaleVertical(24),
        // backgroundColor: 'white',
        // height:50,
        marginBottom: moderateScaleVertical(18)
    },
    inputview: {
        width: "40%",
        flex: 0.5,
        borderRadius: moderateScaleVertical(8)
    }
});


export default CommentScreen;

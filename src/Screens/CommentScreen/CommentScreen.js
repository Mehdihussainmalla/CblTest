//import liraries
import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet,
    Image, ScrollView, TouchableOpacity, FlatList
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
import { Divider } from 'react-native-elements/dist/divider/Divider'



const CommentScreen = ({ route }) => {
    const [comment, setComment] = useState('');
    const [getAllComments, setGetAllComments] = useState([])
    const item = (route?.params?.userData?.userData?.item)
    const description = (item?.description)
    const id = (item?.id)
    console.log("check profile>>>", item)

    // const [isScrollViewEnabled, setScrollViewEnabled]=useState(false)

    useEffect(() => {

        // console.log("id------------", id)
        let apiData = `?post_id=${id}`;
        console.log('apidata------------', apiData)
        actions.getComment(apiData).then((res) => {
            console.log("checkk responses", res)
            setGetAllComments(res?.data)
        })
            .catch(() => {
                alert(err?.message)
            })

    }, [])

    const commentPost = () => {
        let apiData = `?post_id=${id}&comment=${comment}`;
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
                <ScrollView showsVerticalScrollIndicator={false} >

                    <Header
                        isBackIcon={true}
                        title={"Comments"} />
                    <FlatList

                        data={getAllComments}
                        renderItem={(element) => {
                            console.log("element", element)

                            return (<View >
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                    <Image
                                        style={styles.iconstyle}
                                        source={{ uri: element.item.user.profile }}
                                    />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.profile}>{element.item.user.first_name} <Text>{element.item.user.last_name}</Text></Text>

                                        <Text style={styles.email}>{element.item.user.email}</Text>
                                    </View>
                                </View>
                                <View style={styles.commentview}>
                                    <Text style={styles.commentstyle}> <Text style={{ fontSize: 12 }}>comment:  </Text> {element.item.comment}</Text>
                                </View>

                                <View style={styles.timeview}>
                                    <Text style={styles.timestyle}>
                                        {element.item.time_ago}
                                    </Text>
                                </View>
                                <View>
                                    <Divider style={styles.divider} />
                                </View>
                            </View>
                            )
                        }}
                    />

                </ScrollView>
            </View>
            <View style={styles.bottomview}>
                <View style={styles.inputview}>

                    <TextInputComponent
                        onChangeText={(comment) => setComment(comment)}
                        value={comment}
                        input={{
                            width: "135%",
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
        // flexDirection: 'row',
    },
    iconstyle: {
        marginTop: moderateVerticalScale(10),
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
        fontFamily: fontFamily.BarlowBold
    },
    email: {
        fontSize: textScale(13),
        color: colors.white,
        fontFamily: fontFamily.BarlowBold

    },
    timeview: {
        marginTop: moderateScale(2),
        marginHorizontal: moderateScale(55),
        //  backgroundColor:'red'



    },
    timestyle: {
        fontSize: textScale(10),
        color: colors.LIGHTGREYTEXT,
        fontFamily: fontFamily.BarlowRegular,
        paddingLeft: moderateScaleVertical(17),
        // marginTop: moderateScale(2),
        paddingTop: 10
    },
    bottomview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: moderateScaleVertical(23)
        , marginRight: moderateScaleVertical(24),
        // backgroundColor: 'white',
        // height:50,
        marginBottom: moderateScaleVertical(2)
    },
    inputview: {
        width: "40%",
        flex: 0.5,
        borderRadius: moderateScaleVertical(8)
    },
    divider: {
        marginTop: moderateScaleVertical(18),
        color: colors.WHITE,
        width: moderateScaleVertical(350)

    },
    commentview:
    {
        marginLeft: moderateScaleVertical(75),
        marginTop: 5
    },

    commentstyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.BarlowRegular,
        color: colors.white,
        paddingTop: moderateScaleVertical(5)
    }
});


export default CommentScreen;

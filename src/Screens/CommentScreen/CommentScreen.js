//import liraries
import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet,
    Image, ScrollView, TouchableOpacity, FlatList, RefreshControl
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
import { styles } from './styles';
import { Divider } from 'react-native-elements/dist/divider/Divider'
import strings from '../../constants/lang';
import { useNavigation } from '@react-navigation/native';

const CommentScreen = ({ route }) => {
    const navigation = useNavigation(true)
    const [comment, setComment] = useState('');
    const [getAllComments, setGetAllComments] = useState([])
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const item = (route?.params?.userData?.userData?.item)
    const id = (item?.id)
    // console.log("check profile>>>", item)

    const commentPost = (item) => {

        console.log("check items>>>>>", item)
        let apiData = `?post_id=${id}&comment=${comment}`
        console.log(apiData, "apidata")
        actions.commentPost(apiData).then((res) => {
            console.log("checkk response", res)
            
            navigation.goBack()
        }).catch((error) => {
            console.log(error, "errorr occurred")
        })
    }

    useEffect(() => {
        if (isLoading || refresh) {

            let apiData = `?post_id=${id}&skip=${count}`;
            setIsLoading(true)
            console.log('apidata------------', apiData)
            actions.getComment(apiData).then((res) => {
                console.log("checkk responses", res)
                setIsLoading(false)
                setRefresh(false)
                if (refresh) {
                    setGetAllComments(res?.data)
                }
                else {
                    setGetAllComments([...getAllComments, ...res?.data])
                }
            })
                .catch(() => {
                    alert(err?.message)
                })
        }
    }, [isLoading, refresh])



    const onRefresh = () => {
        setCount(0)
        setRefresh(false);

    }

    return (
        <WrapperContainer isLoading={isLoading} withModal={isLoading}>

            <View style={styles.mainview}>
                <Header

                    isBackIcon={true}
                    title={strings.COMMENTS} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={getAllComments.reverse(true)}
                    
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        setCount(count + 15)
                        setIsLoading(true)
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={onRefresh}
                            title={strings.REFRESHING}
                            tintColor={colors.redB}
                            titleColor={colors.white}
                        />

                    }

                    renderItem={(element) => {
                        console.log("element", element)

                        return (<View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, }}>
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
                                <Text style={styles.commentstyle}> <Text style={{ fontSize: 12 }}>{strings.COMMENT}  </Text> {element.item.comment}</Text>
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
                        placeholder={strings.ADD_A_COMMENT} />
                </View>
                <TouchableOpacity activeOpacity={0.1} style={{
                    backgroundColor: colors.redB,
                    flex: 0.3, borderRadius: 8
                }}>
                    <ButtonComp
                        onPress={() => commentPost(item)}
                        ButtonText={strings.POST}
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
export default CommentScreen;

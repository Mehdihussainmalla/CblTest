//import liraries
import React from 'react';
import { View, Text, StyleSheet,
Image } from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { height, textScale, width } from "../../styles/responsiveSize";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";


const CommentScreen = ({route}) => {
    const item=(route?.params?.userData?.userData?.item)
    const pic=(route?.params?.userData?.userData?.item?.user?.profile)
    console.log("check profile>>>",item)
    return (
        <WrapperContainer>
            <View style={{marginLeft:moderateVerticalScale(24),
                 marginRight:moderateVerticalScale(23), backgroundColor:'grey'
                 ,flex:1}}>
            <Header
                isBackIcon={true}
                title={"Comments"} />
            <View style={styles.container}>
                <Image 
                style={styles.iconstyle}
                 source={{uri:pic}}
                />
                <Text style={styles.profile}>CommentScreen</Text>
            </View>
            </View>
        </WrapperContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
            },
    iconstyle:{
        marginTop: moderateVerticalScale(8),
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
        marginHorizontal:moderateScale(15)

    },
    profile:{
        marginTop:moderateScale(20),
        fontSize:textScale(13),
        color:colors.white
    }
});


export default CommentScreen;

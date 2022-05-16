import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';

import { styles } from './styles';


const PostDetail = ({ route }) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }

    const { userData } = route?.params;
    const item = userData?.item?.images
    console.log("checkkkkkk items",item)

   


    return (
        <WrapperContainer>
            <View style={{ flex: 1, }} >
                <ImageBackground style={styles.backgroundstyle}
                    source={{ uri:item?.file[0]}}
                    >
                    <View>
                    </View>

                    <View style={styles.profilestyle}>
                     <View style={{flexDirection:'row', }}>
                         <View  > 
                        <Image source={{uri:userData?.item?.user?.profile}}   style={styles.iconstyle}/>
                        </View>

                        <View style={styles.headingtextstyle}>
                            <Text style={styles.textstyle1}>{userData?.item?.user?.first_name} {userData?.item?.user?.last_name}
                            </Text>
                            <Text style={styles.textstyle2}>{userData?.item?.location_name}</Text>
                        </View>
                        </View>

                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={imagePath.ic_cross} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.descriptionstyle}>
                        <Text style={styles.desctext}>{userData?.item?.description}</Text>
                        <Text style={styles.timestyle}>{userData?.item?.time_ago}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <ButtonComp ButtonText={strings.View_Map}/>
                    </View>

                </ImageBackground>

            </View>
            </WrapperContainer>
    );
};



export default PostDetail;

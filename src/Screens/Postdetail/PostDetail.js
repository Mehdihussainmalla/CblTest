import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity , SafeAreaView} from 'react-native';
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

    // console.log(route?.params?.item)
    // const { userData } = route?.params
    const item=( route?.params)
    const items=item?.item?.userData?.item
    console.log("checkkkkkk items",items)
    const pic=route?.params?.image


   


    return (
        
        // <WrapperContainer>
       
            <View style={{ flex: 1}} >
               
                <ImageBackground style={styles.backgroundstyle}
                    source={{ uri:pic}}
                    >
                          <SafeAreaView style={{flex:1}}>
                    <View>
                    </View>

                    <View style={styles.profilestyle}>
                     <View style={{flexDirection:'row', }}>
                         <View  > 
                        <Image source={{uri:items?.user?.profile}}   style={styles.iconstyle}/>
                        </View>

                        <View style={styles.headingtextstyle}>
                            <Text style={styles.textstyle1}>{items?.user?.first_name} {items?.user?.last_name}
                            </Text>
                            <Text style={styles.textstyle2}>{items?.location_name}</Text>
                        </View>
                        </View>

                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={imagePath.ic_cross} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.descriptionstyle}>
                        <Text style={styles.desctext}>{items?.description}</Text>
                        <Text style={styles.timestyle}>{items?.time_ago}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <ButtonComp ButtonText={strings.View_Map}/>
                    </View>
                    </SafeAreaView>
                </ImageBackground>
              
            </View>
           
            // </WrapperContainer>
    );
};



export default PostDetail;

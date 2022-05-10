
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity ,Alert} from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { styles } from './style';
import ImagePicker from 'react-native-image-crop-picker';


const AddInfo = ({route}) => {
const image=route?.params?.image;
// console.log("passing the params",image)
    const cameraClick = () => {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
        });
      }


  const galleryClick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  
  const launchCamera =()=>{
  
 
    Alert.alert(
      "Upload Image",
      "Choose an option",
    [
      {
        text: "camera",
        onPress: cameraClick,
        
      },
      {
        text: "Gallery",
        onPress: galleryClick,
        
      },
      { text: "Cancel", onPress: () => console.log("OK Pressed") ,style: "cancel"}
    ]
  );
  }
    return (
        <WrapperContainer>
            <View style={{flex:1}}>
                <ScrollView>
            <Header isBackIcon={true}
                title={strings.ADD_INFO} />
            <View style={styles.container}>
                <View style={styles.istimagestyle}>
                  <Image  style= {styles.istimagestyle} source={image}/>
                </View>
                <TouchableOpacity onPress={launchCamera}
                 style={styles.sndimagestyle}>
                    <Image style={styles.plusimage} source={imagePath.ic_plus} />
                </TouchableOpacity>

            </View>
                   <View style={styles.inputview} >
                    <TextInputComponent 
                    
                    placeholder={strings.ADD_DESC}
                     input={{height:moderateVerticalScale(90),}} />

                  </View>
                  <View style={styles.addlocstyle}>
                      <TextInputComponent
                       placeholder={strings.ADD_LOCATION}/>
                      </View>
                      </ScrollView>
                      </View>
                  <ButtonComp  ButtonText='Post'/>
        </WrapperContainer>
    );
};




export default AddInfo;

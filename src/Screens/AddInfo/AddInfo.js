
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { styles } from './style';
import ImagePicker from 'react-native-image-crop-picker';
import { height, width } from '../../styles/responsiveSize';



const AddInfo = ({ route }) => {
  const image = route?.params?.image;
  console.log("passing the params", image)

  const [state, setState] = useState({
    description: '',
    post: [],
    location: '',


  })

  const { description, post, location, } = state;

  const updateState = data => setState(state => ({ ...state, ...data }));



  const cameraClick = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log("here is camera click", image);
    });
  }


  const galleryClick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      updateState({ post: post.concat(res.path) || res.sourceURL });
      console.log("resssssss",res)
     
    });
  }

  const launchCamera = () => {
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
        { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }
      ]
    );
  }

  const cancelImage = (index) => {
    console.log("indexxxxxxx>>>>", index)
    let newArray = [...post];

    newArray.splice(index, 1);

    updateState({post: newArray});
    


  }
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>

        <Header isBackIcon={true}
          title={strings.ADD_INFO} />
        <ScrollView style={{ height: height }} bounces={false}>
          <View style={styles.container}>

            <View style={styles.istimagestyle}>
              <Image style={styles.imagestyle}
                source={image} />
            </View>

            {post ? post.map((element, index) => {
              // console.log("element isssss", element)
              return (
                <View style={styles.uploadview}>
                  <Image source={{ uri: element }} style={styles.imagestyle} />
                  <View style={{ position: 'absolute', right: -10, top: -5 }}>
                    <TouchableOpacity onPress={cancelImage}>
                      <Image

                        style={styles.crosssimage}
                        source={imagePath.ic_cross} />
                    </TouchableOpacity>
                  </View>

                </View>



              )

            })


              : null
            }



            <TouchableOpacity onPress={launchCamera}
              style={styles.sndimagestyle}>
              <Image style={styles.plusimage} source={imagePath.ic_plus} />
            </TouchableOpacity>

          </View>



          <View style={styles.inputview} >
            <TextInputComponent
              placeholder={strings.ADD_DESC}
              value={description}
              onChangeText={(description) => updateState({ description })}
              input={{ height: moderateVerticalScale(90), }} />
          </View>


          <View style={styles.addlocstyle}>
            <TextInputComponent
              value={location}
              onChangeText={(location) => updateState({ location })}
              placeholder={strings.ADD_LOCATION} />
          </View>

        </ScrollView>
      </View>
      <ButtonComp

        ButtonText={strings.POST} />
    </WrapperContainer>
  );
};




export default AddInfo;

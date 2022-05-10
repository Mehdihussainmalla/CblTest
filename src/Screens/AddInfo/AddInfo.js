
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
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
  // console.log("passing the params",image)

  const [state, setState] = useState({
    description: '',
    post: [],
    location: '',
    imageType: null,
  })
  const { description, post, location, imageType } = state;
  console.log("check post", post)

  const updateState = data => setState(state => ({ ...state, ...data }));
  console.log("image check", image);



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
    }).then(res => {
      updateState({post:post.concat(res.path) || res.sourceURL});
      // console.log("resssssss",res)
      console.log("post", post);
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

  const cancelImage = index => {
    console.log("index", index)
    console.log("post for update", post)

    let newArray = [...state];
    newArray.splice(index, 1)
    updateState({
      position: newArray,
    })
  }
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        
          <Header isBackIcon={true}
            title={strings.ADD_INFO} />
      <ScrollView style={{ height: height }} bounces={false}>
          <View style={styles.container}>

                <View style={styles.istimagestyle}>
                  <Image style={styles.istimagestyle}
                    source={image} />
                </View>
                
                {post?post.map((element, index) => {
                  console.log("element isssss",element)
                        return (
                        <View style={styles.uploadview}>
                            <Image source={{uri: element}} style={styles.istimagestylesss} />
                        </View>
                        )
                    }) : null
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
              onChangeText={(description)=>updateState({description})}
              input={{ height: moderateVerticalScale(90), }} />
          </View>


          <View style={styles.addlocstyle}>
            <TextInputComponent
            value={location}
            onChangeText={(location)=>updateState({location})}
              placeholder={strings.ADD_LOCATION} />
          </View>

        </ScrollView>
      </View>
      <ButtonComp ButtonText='Post' />
    </WrapperContainer>
  );
};




export default AddInfo;

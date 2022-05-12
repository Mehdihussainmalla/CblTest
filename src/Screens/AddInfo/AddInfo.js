
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native';
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
import actions from '../../redux/actions';
import navigationStrings from '../../navigation/navigationStrings';



const AddInfo = ({ navigation, route }) => {
  const image = route?.params?.image;
  // console.log("passing the params", image)

  const [state, setState] = useState({
    description: '',
    post: [image],
    location: '',


  })

  const { description, post, location, } = state;

  const updateState = data => setState(state => ({ ...state, ...data }));



  // const [selectedPhoto, setSelectedPhoto] = useState(image);
  // const deleteImage = () => {
  //   setSelectedPhoto(null);

  // }

  const cameraClick = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log("here is camera click", image);
    });
  }

  //...................image upload ..................//
  const addImage = (image) => {

    const formData = new FormData();
    formData.append('image', {
      uri: image,
      name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      imageType: 'image/jpeg'
    });
    // console.log("check form data", formData)
    let header = { "Content-Type": "multipart/form-data" };
    actions.imgUpload(formData, header).then
      ((res) => {
        console.log("api res >>>>>>>>>>", res.data)
        alert("image added sucessfully!!!!!")
        updateState({ post: post.concat(res.data) })
      }).catch((error) => {
        console.log(error)
        alert(err?.message);
      })
  }



  //...............add photo from gallery.............//
  const galleryClick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      console.log("crfgdcvvfvgf",res)
      addImage(res.path)

      // updateState({ post: post.concat(res.path) || res.sourceURL });
      // console.log("image uploaded from gallery", res)

    });
  }
  //.................click image via camera & gallery.........//
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
  //.......................cancel image from the array ..........//
  const cancelImage = (index) => {

    // console.log("indexxxxxxx>>>>", index)
    let newArray = [...post];

    newArray.splice(index, 1);

    updateState({ post: newArray });

  }
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>

        <Header isBackIcon={true}
          title={strings.ADD_INFO} />
        {/* <ScrollView style={{ height: height }}> */}
        <View style={styles.container}>


          {post ? <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={post}
            renderItem={({ index, item }) => {
              // console.log("element isssss", item)
              // console.log("index isssss", index)
              return (
                <View style={styles.uploadview}>
                  <Image source={{ uri: item }} style={styles.imagestyle} />

                  <View style={styles.cancelbtn}>
                    <TouchableOpacity onPress={() => { cancelImage(index) }}>
                      <Image

                        style={styles.crosssimage}
                        source={imagePath.ic_cross} />
                    </TouchableOpacity>
                  </View>
                </View>
              )

            }}
            // ListHeaderComponent={() => (
            //   selectedPhoto ? (
            //     <View style={styles.istimagestyle} >
            //       <Image style={styles.imagestyle}
            //         source={{ uri: image }}
            //       />
            //       <View style={styles.cancelbtn}>
            //         <TouchableOpacity onPress={deleteImage}>
            //           <Image source={imagePath.ic_cross} />
            //         </TouchableOpacity>
            //       </View>
            //     </View>
            //   ) : null
            // )}
            ListFooterComponent={() => (
              <View>
                <TouchableOpacity onPress={launchCamera}
                  style={styles.sndimagestyle}>
                  <Image style={styles.plusimage}
                    source={imagePath.ic_plus} />
                </TouchableOpacity>
              </View>
            )}
          /> : null}



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

        {/* </ScrollView> */}
      </View>
      <ButtonComp btnStyle={{ marginBottom: moderateVerticalScale(5) }}
        ButtonText={strings.POST} />
    </WrapperContainer>
  );
};




export default AddInfo;

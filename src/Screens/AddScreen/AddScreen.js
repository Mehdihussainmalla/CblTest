import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  FlatList,
  Image,
  ScrollView,

}
  from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import CameraRoll from "@react-native-community/cameraroll";
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import { styles } from './styles';
import { moderateVerticalScale } from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
// import { openGallery } from '../../utils/imagePickerFunction';


const AddScreen = () => {

  const [state, setState] = useState({
    photos: '',
  });

  const androidPermission = async () => {

    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const addMedia = async () => {
    if (Platform.OS === "android" && !(await androidPermission())) {
      return;
    }

    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })

      .then(res => {
        setState({ photos: res.edges });
        console.log("elemnts areeeeeeee", element)

      })
      .catch((error) => {
        console.log('error occurred at open gallery', error)
      });
  }
  useEffect(() => {
    addMedia();

  }, [])
  console.log("check add media ", addMedia)

  const cameraClick =() => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
    // try {
    //   const res = await openGallery();
    //   console.log("image res", res);
    //   setSelectPhotos(selectPhotos.concat(res.path))
    // } catch (error) {
    //   console.log("error raised", error);
    // }

  }

  // const openAlbum = ()=>{
  //   CameraRoll.getAlbums(params)
  // }



  return (
    <WrapperContainer>
      <Header title={'Select photo'} />
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.gallerytext} >
            Gallery</Text>
        </View>

        <TouchableOpacity
          // onPress={openAlbum}
          activeOpacity={0.5}
          style={{ flex: 0.28, flexDirection: 'row' }}>

          <Text style={styles.recenttext} >
            Recents
          </Text>
          <Image style={styles.downicon} source={imagePath.ic_down} />
        </TouchableOpacity>
      </View>
      <View style={{flex:1}} >
      <FlatList
        data={state.photos}
        style={{ paddingBottom: moderateVerticalScale(80) }}
        numColumns={3}
        renderItem={(element, index) => {
          // console.log("elements are", element)
          // console.log(index,"indessss")
          let indx = element.index
          console.log(indx, "indx")
          if (indx == 0) {
            return (
              <View>
                <Image
                  key={index}
                  style={styles.firstImg}

                  source={{ uri: element.item.node.image.uri }}

                />
              </View>
            )
          } else {
            return (
              <View>
                <Image
                  key={index}
                  style={styles.imagelist}

                  source={{ uri: element.item.node.image.uri }}

                />
              </View>
            )
          }
        }}

      />
      <TouchableOpacity
      style={styles.camerastyle}
        onPress={cameraClick}
        activeOpacity={0.8}>
        <Image style={{height:60, width:60}} source={imagePath.photo_camera} />
      </TouchableOpacity>
      </View>

      {/* </ScrollView> */}

    </WrapperContainer>
  )
}

export default AddScreen


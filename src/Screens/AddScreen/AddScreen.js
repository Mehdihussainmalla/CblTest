import {
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  FlatList,
  Image,
  ScrollView,
  Alert

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
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';



const AddScreen = ({ navigation }) => {

  const [state, setState] = useState({
    photos: '',
    imageSelect: '',
  });

  const { photos, imageSelect } = state;
  const updateState = data => setState(state => ({ ...state, ...data }))

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
        // setState({ photos: res.edges });
        updateState({ photos: res.edges })
        console.log("response is", res)
        updateState({ imageSelect: res.edges[0].node.image.uri })

      })
      .catch((error) => {
        console.log('error occurred at open gallery', error)
      });
  }
  console.log("check selected image", imageSelect)
  useEffect(() => {
    addMedia();

  }, [])
  console.log("check add media ", addMedia)

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
  // const openAlbum = ()=>{
  //   CameraRoll.getAlbums()
  // }
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
  const selectImage = (element) => {
    console.log("check the element", element)
    updateState({ imageSelect: element.item.node.image.uri })

  }


  return (
    <WrapperContainer>
      <Header title={strings.SELECT_PHOTO} />
      <TouchableOpacity>
        <Image
        //  source={imagePath.AWARD}
          style={styles.firstImg}
        source={{imageSelect }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1 }} >
        <View style={styles.container}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.gallerytext} >
              {strings.GALLERY}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            style={{ flex: 0.28, flexDirection: 'row' }}>

            <Text style={styles.recenttext} >
              {strings.RECENTS}
            </Text>
            <Image style={styles.downicon} source={imagePath.ic_down} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={state.photos}
          style={{ paddingBottom: moderateVerticalScale(80) }}
          numColumns={3}
          renderItem={(element, index) => {
            return (
              <TouchableOpacity onPress={() => selectImage(element)}>

                <Image
                  key={index}
                  style={styles.imagelist}
                  source={{ uri: element.item.node.image.uri }}
                />




              </TouchableOpacity>

            )
          }}

        />
        <TouchableOpacity
          style={styles.camerastyle}
          onPress={launchCamera}
          activeOpacity={0.8}>
          <Image style={{ height: 60, width: 60 }} source={imagePath.photo_camera} />
        </TouchableOpacity>
      </View>

      {/* </ScrollView> */}

    </WrapperContainer>
  )
}

export default AddScreen


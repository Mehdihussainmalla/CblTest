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
// import { openGallery } from '../../utils/imagePickerFunction';


const AddScreen = ({ navigation }) => {

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
        console.log("response is", res)

      })
      .catch((error) => {
        console.log('error occurred at open gallery', error)
      });
  }
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
      <Header title={strings.SELECT_PHOTO} />
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.gallerytext} >
            {strings.GALLERY}</Text>
        </View>

        <TouchableOpacity
          // onPress={openAlbum}
          activeOpacity={0.5}
          style={{ flex: 0.28, flexDirection: 'row' }}>

          <Text style={styles.recenttext} >
            {strings.RECENTS}
          </Text>
          <Image style={styles.downicon} source={imagePath.ic_down} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} >
        <FlatList
          data={state.photos}
          style={{ paddingBottom: moderateVerticalScale(80) }}
          numColumns={3}
          renderItem={(element, index) => {
            // console.log("elements are", element)
            // console.log(index,"indessss")
            let indx = element.index
            console.log("indx of elements :", indx)
            if (indx == 0) {
              return (
                <TouchableOpacity 
               onPress={()=>navigation.navigate(navigationStrings.ADD_INFO, 
                {image:element.item.node.image})}>
                  <Image
                    key={index}
                    style={styles.firstImg}

                    source={{ uri: element.item.node.image.uri }}


                  />
                </TouchableOpacity>
              )
            } else {
              return (
                <TouchableOpacity  onPress={()=>navigation.navigate(navigationStrings.ADD_INFO, 
                {image:element.item.node.image})}>
                  <Image
                    key={index}
                    style={styles.imagelist}

                    source={{ uri: element.item.node.image.uri }} />
                </TouchableOpacity>
              )
            }
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


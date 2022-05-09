import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  FlatList,
  Image,
  ScrollView
}
  from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import CameraRoll from "@react-native-community/cameraroll";
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import { styles } from './styles';
import { moderateVerticalScale } from 'react-native-size-matters';


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
      })
      .catch((error) => {
        console.log('error occurred at open gallery', error)
      });
  }
  useEffect(() => {
    addMedia();

  }, [])
  console.log("check add media ", addMedia)

  return (
    <WrapperContainer>
      <Header title={'Select photo'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.gallerytext} >
              Gallery</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            style={{ flex: 0.28, flexDirection: 'row' }}>

            <Text style={styles.recenttext} >
              Recents
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
              <>

                <Image
                  key={index}
                  style={styles.imagelist}

                  source={{ uri: element.item.node.image.uri }}
                />
              </>
            )
          }}
        />

      </ScrollView>

    </WrapperContainer>
  )
}

export default AddScreen


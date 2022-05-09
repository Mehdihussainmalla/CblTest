import { StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, Platform, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import CameraRoll from "@react-native-community/cameraroll";
import Header from '../../Components/Header';
import { moderateVerticalScale } from 'react-native-size-matters';
import { height, width } from '../../styles/responsiveSize';

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
      <FlatList
      
        data={state.photos}
        style={{ paddingBottom: moderateVerticalScale(80) }}
        numColumns={3}

        renderItem={(element, index) => {
          return (
            <>

              <Image
                key={index}
                style={{ height: width / 3, width: width / 3 }}

                source={{ uri: element.item.node.image.uri }}
              />
            </>
          )
        }}
      />


    </WrapperContainer>
  )
}

export default AddScreen

const styles = StyleSheet.create({})
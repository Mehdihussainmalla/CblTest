import { StyleSheet, Text, View ,PermissionsAndroid, Platform,TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './styles'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import CameraRoll from "@react-native-community/cameraroll";


const PostAddScreen = () => {

  const androidPermission = async ()=> {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission)
    {
      return true;
    }

    const status= await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const addMedia = async ()=>{
    if (Platform.OS==="android" && ! (await androidPermission()))
    {
      return ;
    }
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
    .then(res=> {
      this.setState({ photos: res.edges });
    })
    .catch((error) => {
      console.log('error occurred at open gallery',error)
    });
  }






  return (
  <WrapperContainer>

      <Header isBackIcon={true}
      title=' Add info'/>
     <TouchableOpacity style={{marginTop:10}}><Text>hello   </Text></TouchableOpacity>
      </WrapperContainer>
  )
}

export default PostAddScreen


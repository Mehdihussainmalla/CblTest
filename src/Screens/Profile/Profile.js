import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Logout } from '../../redux/actions/auth';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';

const Profile = ({ navigation }) => {

  const signOut = async () => {

    try {
      await GoogleSignin.signOut();
      alert("logout sucessfully!!!")
      Logout();
    } catch (error) {
      alert ('logout failure!!!')
      console.log("logout failure",error)

    }
  }
  return (
    <WrapperContainer>
      <Header
        title={strings.PROFILE}
      // isBackIcon={false}
      />

      <TouchableOpacity
      
        onPress={() => navigation.navigate(navigationStrings.EDIT_PROFILE_SCREEN)}
        activeOpacity={0.7} style={styles.container}>
        <View style={styles.profileimage}>
          <Image style={{ marginTop: 5 }} source={imagePath.profile_icon} />
        </View>
        <Text style={styles.profiletext}>{strings.EDIT_PROFILE}</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.CHANGE_PASSWORD)}
        activeOpacity={0.7} style={styles.container}>
        <View style={styles.profileimage}>
          <Image style={{ marginTop: 5 }} source={imagePath.ic_key} />
        </View>
        <Text style={styles.profiletext}>{strings.CHANGE_PASSWORD}</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={signOut} activeOpacity={0.7} style={styles.container}>
        <View style={styles.profileimage}>
          <Image style={{ marginTop: 4 }} source={imagePath.ic_logout} />
        </View>
        <Text style={styles.profiletext1}>{strings.SIGN_OUT}</Text>
      </TouchableOpacity>

    </WrapperContainer>

  )
}

export default Profile

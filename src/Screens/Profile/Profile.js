import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';

const Profile = () => {
  return (
    <WrapperContainer>
      <Header
        title='Profile'
        isBackIcon={false}
      />

      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <View style={styles.profileimage}>
          <Image style={{ marginTop: 5 }} source={imagePath.profile_icon} />
        </View>
        <Text style={styles.profiletext}>Edit Profile</Text>
      </TouchableOpacity>


      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <View style={styles.profileimage}>
          <Image style={{ marginTop: 5 }} source={imagePath.ic_key} />
        </View>
        <Text style={styles.profiletext}>Change Password</Text>
      </TouchableOpacity>


      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <View style={styles.profileimage}>
          <Image style={{ marginTop: 5 }} source={imagePath.ic_logout} />
        </View>
        <Text style={styles.profiletext}>Signout</Text>
      </TouchableOpacity>

    </WrapperContainer>

  )
}

export default Profile

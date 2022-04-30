import { StyleSheet, Text, View,Image } from 'react-native'
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
      isBackIcon= {false} 
      />

      <View style={styles.container}>
        <View style={styles.profileimage}>
        <Image  style={{marginTop:5}} source={imagePath.profile_icon}/>
        </View>
        <Text style={styles.profiletext}>Edit Profile</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profileimage}>
        <Image  style={{marginTop:5}} source={imagePath.profile_icon}/>
        </View>
        <Text style={styles.profiletext}>Change Password</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profileimage}>
        <Image  style={{marginTop:5}} source={imagePath.profile_icon}/>
        </View>
        <Text style={styles.profiletext}>Signout</Text>
      </View>

      </WrapperContainer>
 
  )
}

export default Profile

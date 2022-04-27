//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,SafeAreaView} from 'react-native';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import strings from '../../constants/lang'
import TextInputComponent from '../../Components/TextInputComponent';
import ButtonComp from '../../Components/ButtonComp';


const PhoneLogin = () => {
    return (
    <WrapperContainer style={styles.container}>
        <View style={styles.headerview}>
      <Header/>
      </View>
      <View style={styles.view1}>
          <View style={styles.welcomeview}>
      <Text style={styles.welcometext}>{strings.WELCOME_BACK}</Text>
      </View>
      <View style={styles.bottomview}>
          <Text style={styles.bottomtext}>{strings.HAPPY_TEXT}</Text>
      </View>
      </View>
        <View style={styles.phoneview}>
          <TextInputComponent placeholder='code'/>
          <View style={styles.numberview}>
          <TextInputComponent placeholder='Phone Number'/>
          </View>
      </View>
      {/* <View style={{flexDirection:"row",}}>
          <View  style={{flex:2,backgroundColor:"red"}}>
          <TextInputComponent placeholder='code'/>
          </View>
          <View  style={{flex:8,backgroundColor:"green"}}>
           <TextInputComponent placeholder='code'/>
</View>
      </View> */}
      <View style={styles.passview}>
     <TextInputComponent placeholder={strings.PASSWORD}
     keyboardType={strings.NUMERIC}/>
     <Text style={styles.show}>{strings.SHOW}</Text>
     </View>
     <View style={styles.mainview}>
         <View style={styles.optview}>
         <Text style={styles.otp}>{strings.OTP}</Text>
         </View>
         <View style={styles.passwordview}>
         <Text styles={styles.password}>{strings.FORGOT_PASSWORD}</Text>
         </View>
     
     </View>
     <ButtonComp title={strings.LOGIN}/>

      
    </WrapperContainer>

    );
};




export default PhoneLogin;

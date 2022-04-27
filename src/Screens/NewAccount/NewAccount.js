//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import { styles } from './styles';


const NewAccount = ({navigation}) => {
    return (
        <WrapperContainer>
        <View style={styles.headerview}>
          <Header/>
        </View>
        <View style={{flex:0.9}} >
                <View style={styles.textview}>
                    <View style={styles.createview}>
                    <Text style={styles.createtext}>{strings.CREATE_AN_ACCOUNT}</Text>
                    </View>
                    <View style={styles. accountview}>
                    <Text style={styles.bottomtext}>{strings.CONTINUE_ACCOUNT}</Text>
                    </View>
                </View>
                <View  style={styles.namesview}>
                <View style={styles.firstname}>
                   <TextInputComponent placeholder={strings.FIRST_NAME}/>
                    </View>
                    <View style={styles.lastname}>
                    <TextInputComponent placeholder={strings.LAST_NAME}/>
                    </View>
                </View>
                <View style={styles.emailview}>
                <TextInputComponent keyboardType='email-address' placeholder={strings.EMAIL}/>
                </View>
                </View>
                <View style={styles.nextbtn}>
                <ButtonComp  onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)}
                 ButtonText={strings.NEXT}/>
                </View>

          
            
        </WrapperContainer>
    );
};




export default NewAccount;

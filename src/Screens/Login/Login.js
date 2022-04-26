import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import SocialComp from '../../Components/SocialComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang'
import { styles } from './styles';


const Login = () => {
    return (
        <WrapperContainer style={styles.container}>
            <View style={styles.phoneview}>
                <Image style={styles.logoview} source={imagePath.AWARD} />
                <View style={styles.text}>
                    <Text style={styles.texttt}>{strings.TEXT}</Text>
                    <Text style={styles.texttt}>{strings.text2}</Text>

                    <ButtonComp title={strings.LOGIN_WITH_PHONE_NUMBER} />

                </View>
            </View>
            <View style={styles.socialview} >
                <View style={styles.orview}>
                    <Text style={styles.ortext}>{strings.OR}</Text>
                </View>


                <TouchableOpacity style={styles.goolgeview}>
                    <Image style={styles.imagestyle} source={imagePath.GOOGLE_ICON} />
                    <Text style={styles.googletext}>{strings.LOGIN_IN_WITH_GOOGLE}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookview}>
                    <Image style={styles.imagestyle1} source={imagePath.FACEBOOK_ICON} />
                    <Text style={styles.facebooktext}>{strings.LOGIN_IN_WITH_GOOGLE}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appleview}>
                    <Image style={styles.imagestyle2} source={imagePath.APPLE_ICON} />
                    <Text style={styles.appletext}>{strings.LOGIN_WITH_APPLE}</Text>
                </TouchableOpacity>

                <View style={styles.stringsview}>

                    <TouchableOpacity>
                        <Text style={styles.newhere}>{strings.NEW_HERE}</Text>
                    </TouchableOpacity>
                    <Text style={styles.signuptext}>{strings.SIGN_UP}</Text>

                </View>

            </View>


        </WrapperContainer>

    );
};





export default Login;

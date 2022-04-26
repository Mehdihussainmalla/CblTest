import React from 'react';
import { View, Text, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang'
import { styles } from './styles';


const Login = () => {
    return (
        // <WrapperContainer>

        <View style={styles.container}>
            <View style={styles.logoview} >
                <Image style={styles.logoimage} source={imagePath.AWARD} />
            </View>
            <View style={styles.textview}>

            <Text style={styles.text}>{strings.TEXT}</Text>
            </View>

        </View>





        // </WrapperContainer>

    );
};





export default Login;

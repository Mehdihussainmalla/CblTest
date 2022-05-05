import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';
import { styles } from '../NewAccount/styles';
import { introStyles } from './styles';

const Slider = ({ navigation }) => {
    const [showSlider, setShowSlider] = useState(true)
    const slides = [
        {
            key: '1',
            image: imagePath.tutorialpic,
            title: 'Hendrerit vulputate sem',
            description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'
        },
        {
            key: '2',
            image: imagePath.tutorialpic,
            title: 'Hendrerit vulputate sem',
            description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'

        },
        {
            key: '3',
            image: imagePath.tutorialpic,
            title: 'Hendrerit vulputate sem',
            description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'

        }
    ];

    const renderItem = ({ item }) => {
        // console.log(item.description);
        return (
            <View style={introStyles.tutMainStyle}>
               
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={item.image} style={introStyles.tutImage} />
                    </View>
                    <View style={introStyles.titleDesContainer}>
                        <View style={introStyles.tittleTextView} >
                            <Text style={introStyles.tittleText}>{item?.title} </Text>
                        </View>
                        <View  style={introStyles.dec}>
                            <Text style={introStyles.desText}>{item.description}</Text>
                        </View>
                    </View>

            </View>
        )
    }

    const renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={() =>actions.Intro(false)}>
                <Text style={introStyles.getStartStyle}>{strings.Get_STARTED}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={introStyles.mainDiv}>
             <SafeAreaView style={{flex:1}}>

            <AppIntroSlider
                data={slides}
                renderItem={renderItem}
                renderDoneButton={renderDoneButton}
                activeDotStyle={{ height: moderateScale(4), width: moderateScale(32), backgroundColor: colors.redB, }}
                dotStyle={{ height: moderateScale(4), width: moderateScale(16), backgroundColor: 'grey' }}
            />
            </SafeAreaView>
        </View>
    );
};

export default Slider;
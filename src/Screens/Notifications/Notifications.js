import React from 'react';
import { SafeAreaView, View, FlatList, Text,  Image, ScrollView , TouchableOpacity} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import Header from '../../Components/Header';
import { styles } from './styles';
import strings from '../../constants/lang';
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { moderateScale } from 'react-native-size-matters';

const DATA = [
  {
    id: '1',
    image:{uri:imagePath.notify1,
    },
    title: 'Russell Gordon',
    description: '20 mins ago'
  },
  {
    id: '2',
    image:{uri:imagePath.notify2,
    },
    title: 'Sara',
    description: '20 mins ago'
  },
  {
    id: '3',
    image:{uri:imagePath.notify3,
    },
    title: 'Raphl',
    description: '20 mins ago'
  },{
  id: '4',
  image:{uri:imagePath.notify4,
  },
  title: 'Syker John',
  description: '20 mins ago'
},
];


const Notification = () => {

  const renderItem = ({ item }) => (
    <ScrollView>
    <TouchableOpacity       activeOpacity={0.4} 
     style={styles.view}>

      <View>
          <Image style={styles.imageview} source={item.image} />
      </View>
      <View >
      <Text style={styles.title}>{item.title}  <Text style={styles.addtext}>added a new post</Text> </Text>
      
     
      <Text style={styles.description} >{item.description} </Text>
      </View>
      
      
      
       
     
    </TouchableOpacity>
    <Divider style={styles.divider}/>

    </ScrollView>



  );

  return (
    <WrapperContainer>

      <Header title={strings.NOTIFICATION}/>
      <View  >

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={DATA}
        />
      </View>
    </WrapperContainer>
  );
}



export default Notification;
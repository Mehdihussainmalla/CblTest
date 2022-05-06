import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Cards from '../../Components/Cards'
import HomeHeader from '../../Components/HomeHeader'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../navigation/navigationStrings'

const Home = ({navigation, route}) => {
  const data = [
    {
      id: 1,
      profilePic:imagePath.profile_image,        
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
        image:imagePath.card_image,
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
    {
      id: 2,
      profilePic:imagePath.profile_image,
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
        image:imagePath.card_image,
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
    {
      id: 3,
      profilePic:imagePath.profile_image,
       profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image:imagePath.card_image,
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
  ];
  return (
    <WrapperContainer >
      <HomeHeader />
      <Cards navigation={navigation} data={data} />
    </WrapperContainer>
  )
}

export default Home
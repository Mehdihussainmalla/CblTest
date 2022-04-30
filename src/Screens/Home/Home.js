import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Cards from '../../Components/Cards'
import HomeHeader from '../../Components/HomeHeader'
import colors from '../../styles/colors'

const Home = () => {
  const data = [
    {
      id: 1,
      profilePic:
        'https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Stylish-Boys-Whatsapp-DP-Wallpaper-for-Status.jpg',
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image:
        'https://images.unsplash.com/photo-1604049928882-31200d4a13cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
    {
      id: 2,
      profilePic:
        'https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Stylish-Boys-Whatsapp-DP-Wallpaper-for-Status.jpg',
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image:
        'https://images.unsplash.com/photo-1604049928882-31200d4a13cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
    {
      id: 3,
      profilePic:
        'https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Stylish-Boys-Whatsapp-DP-Wallpaper-for-Status.jpg',
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image:
        'https://images.unsplash.com/photo-1604049928882-31200d4a13cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
  ];
  return (
    <WrapperContainer style={{ backgroundColor: colors.PRIMARY_COLOR, }} >
      <HomeHeader />
      <Cards data={data} />
    </WrapperContainer>
  )
}

export default Home
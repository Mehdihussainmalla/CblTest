import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Modal
} from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
// import Cards from '../../Components/Cards'
import HomeHeader from '../../Components/HomeHeader'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../navigation/navigationStrings'
import { moderateScale } from 'react-native-size-matters';
import actions from '../../redux/actions'
import strings from '../../constants/lang'
import { styles } from './styles'
import { moderateScaleVertical } from '../../styles/responsiveSize'
import { useSelector } from 'react-redux'


const Home = ({ navigation, route }) => {
  const data = [
    {
      id: 1,
      profilePic: imagePath.profile_image,
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image: imagePath.card_image,
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
    {
      id: 2,
      profilePic: imagePath.profile_image,
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image: imagePath.card_image,
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
    {
      id: 3,
      profilePic: imagePath.profile_image,
      profileName: 'Russell Gordon',
      location: 'Sector 28D, Chandigarh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
      image: imagePath.card_image,
      time: '1 hr ago',
      likes: 44686,
      comments: 1254,
    },
  ];

  const [post, setPost] = useState();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const userData = data;
  useEffect(() => {
    let apidata = `?skip=${count}`;
    setIsLoading(true);
    actions.getPost(apidata).then((res) => {
      setIsLoading(false);
      console.log("check res>>>>>>>>>>>>>>>>", res)
      setPost(res?.data)


    }).catch(err => {
      console.log("check error", err)
    })

  }, [count])


  const PostHeader = userData => (
    <View style={styles.postHeaderContainer}>
      <View style={styles.posterName}>
        <View>
          <Image
            style={styles.profilePicture}
            source={{
              uri: userData.userData.item.user.profile,
            }}

          />
        </View>
        <View style={{ marginLeft: moderateScale(16) }}>
          <Text style={styles.profileName}>
            {userData.userData.item.user.first_name} {userData.userData.item.user.last_name}
          </Text>
          <Text style={styles.loc}>{userData.userData.item.location_name}</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: 'white', fontWeight: '900' }}> ... </Text>
      </View>
    </View>
  );

  const Post = userData => {
    // console.log(userData, 'userrrrr in post');
    console.log(userData.userData.item, 'item in postsssssss');
    return (
      <View>
        <View style={styles.postContainer}>
          
        <Image 
            style={styles.postImage}
            source={{
              uri: userData.userData.item.images.file[0],
            }}
             />
          
            
          <View style={styles.postFooter}>
            <Text style={styles.postDesc}>
              {userData.userData.item.description}
            </Text>
            <Text
              style={{
                color: colors.lightgrey,
                marginVertical: moderateScaleVertical(8),
              }}>
              {userData.userData.item.time}
            </Text>
            <View style={styles.postFooterTxt}>
              <Text style={styles.textCommon}>
                {strings.COMMENTS}
                {userData.userData.item.comments}
              </Text>
              <Text style={styles.textCommon}>
                {strings.LIKES}
                {userData.userData.item.likes}
              </Text>
              <Image
                style={{ tintColor: colors.LIGHTGREYTEXT }}
                source={imagePath.icSHARE}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const PostContent = (userData, index) => {
    // console.log("check>>>>>>>> userdataaaaaaaaaa",userData)
    // console.log(userData, 'userData in postContent');
    return (
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.POST_DETAIL,
        { userData: userData })}
        style={styles.wrapper}>

        <PostHeader userData={userData} />
        <Post userData={userData} />

      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer isLoading={isLoading} withModal={isLoading} >
      <HomeHeader />

      <View>

        <FlatList
          data={post}
          renderItem={PostContent}
          extraData={userData.id}

          onEndReached={() => {
            console.log("check count", count)
            setCount(count + 1)
          }}
          ListFooterComponent={() => (
            <View style={{ height: moderateScaleVertical(32) }} />
          )}
        />
      </View>
    </WrapperContainer>
  )
}



export default Home
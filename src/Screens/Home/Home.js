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
import Carousel from 'react-native-snap-carousel';
// import Pagination, { Icon, Dot } from 'react-native-pagination';


const Home = ({ navigation, route }) => {
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("check posts",post)
    let apidata = `?skip=${count}`
    setIsLoading(true)
    actions.getPost(apidata).then((res) => {
      console.log("GET POST DATA+++++++++++++++++", res)
      setIsLoading(false)
      setPost([...post, ...res?.data])
    })
  }, [count])

  // const fetch = () => {
  //   setCount(count);
  //   setRefresh(false)
  // }
  const onRefresh = () => {
    setCount(count - 8);
    setRefresh(false);
    console.log("check refresh", count)
  }

  const likePost = () => {
    alert("check likes!!!")
    // const id=userData.id;
    // console.log("check userdata for likes",userData)
    // if(like===0)
    // {
    //   setLike=(like+1)
    // }
    // else{
    //   setLike=(like-1)
    // }
    // console.log("check likes",like)

  }


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
              {userData.userData.item?.time_ago}
            </Text>
            <View style={styles.postFooterTxt}>


              <Text style={styles.textCommon}>
                {strings.COMMENTS}
                {userData.userData.item.comments}
              </Text>



              <TouchableOpacity onPress={likePost}>
                <Text style={styles.textCommon}>
                  {strings.LIKES}
                  {userData.userData.item.likes}
                </Text>
              </TouchableOpacity>
              <Image
                style={{ tintColor: colors.white }}
                source={imagePath.icSHARE}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const PostContent = (userData) => {
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
          onEndReachedThreshold={0.5}
          onEndReached={({ }) => {
            console.log("check count>>>>>>>>>", count)
            // alert("check on reached threshold")
            setCount(count + 8)
          }}
          ListFooterComponent={() => (
            <View style={{ height: moderateScaleVertical(32) }} />
          )}
          refreshing={refresh}
          onRefresh={onRefresh}
        />
      </View>
    </WrapperContainer>
  )
}



export default Home
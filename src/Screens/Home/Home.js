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
import { moderateScaleVertical, width } from '../../styles/responsiveSize'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { isArray, isEmpty } from 'lodash';


const Home = ({ navigation, route }) => {
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [like, setLike] = useState(0);
  const [snapState, setSnapState] = useState(0);

  useEffect(() => {
    console.log("check posts", post)
    if (isLoading) {
      let apidata = `?skip=${count}`
      setIsLoading(true)
      actions.getPost(apidata).then((res) => {
        console.log("GET POST DATA+++++++++++++++++", res)
        setIsLoading(false)
        setPost([...post, ...res?.data])
      })
    }
  }, [isLoading])

  const fetch = () => {
    setCount(count);
    setRefresh(false)
  }
  const onRefresh = () => {
    fetch();
    setCount(count - 8);
    setRefresh(false);
    console.log("check refresh", count)
  }

  const likePost = (userData) => {
    const id = userData?.userData?.item?.id;
    const status = userData?.userData?.item?.status;
    console.log("check status", status)
    if (like === 0) {
      setLike(like + 1)
    }
    else {
      setLike(like - 1)
    }
    const apiData = {
      post_id: id,
      status: like
    }


    console.log("check api dataaaaa", apiData)
    actions.likePost(apiData).then((res) => {
      console.log("check response for like api", res)
      // setIsLoading(true)
    }).catch((err) => {
      console.log("error occurred", err)
    })
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
        <Text style={styles.dotstyle}> ... </Text>
      </View>
    </View>
  );

  const Post = userData => {
    console.log(userData, 'userrrrr in post');
    // console.log(userData.userData.item?.id, 'item in postsssssss');
    return (
      <View>
        <View style={styles.postContainer}>
          <View >
            {!!(
              userData?.userData?.item?.images?.file &&
              isArray(userData?.userData?.item?.images?.file) &&
              userData?.userData?.item?.images?.file.length
            ) ? (
              <>
                <Carousel
                  data={userData?.userData?.item?.images?.file}
                  sliderWidth={moderateScale(width - 65)}
                  itemWidth={moderateScale(width - 20)}
                  scrollEnabled={userData?.userData?.item?.images?.file.length > 1 ? true : false}
                  horizontal
                  onSnapToItem={index => setSnapState(index)}
                  renderItem={i => {
                    if (i.item != null && typeof i.item != 'object') {
                      return (
                        <TouchableOpacity 
                        style={styles.imageview}
                        activeOpacity={1} onPress={() => postNav(i.item)}>
                          <Image
                            source={{ uri: i.item }}
                            style={styles.postImage}
                              />
                        </TouchableOpacity>
                      );
                    }
                  }}
                />
              </>
            ) : null}

            {/* Pagination dots */}
            <Pagination
              dotsLength={
                !!(
                  userData?.userData?.item?.images?.file &&
                  isArray(userData?.userData?.item?.images?.file) &&
                  userData?.userData?.item?.images?.file.length > 1
                )
                  ? userData?.userData?.item?.images?.file.length
                  : []
              }
              activeDotIndex={snapState}
              containerStyle={{ paddingVertical: 0, marginTop: 0 }}
              dotColor={'white'}
              dotStyle={{ width: 12, height: 12, borderRadius: 12 / 2 }}
              inactiveDotStyle={{ width: 20, height: 20, borderRadius: 20 / 2 }}
              inactiveDotColor={'black'}
              inactiveDotOpacity={0.4}
              activeOpacity={0.8}
              dotContainerStyle={{ marginHorizontal: 2, paddingTop: 8 }}
            />
          </View>

          {/* <Image
            style={styles.postImage}
            source={{
              uri: userData.userData.item.images.file[0],
            }}
          /> */}


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
                {userData?.userData?.item?.comment_count}
                {strings.COMMENTS}

              </Text>



              <TouchableOpacity onPress={() => { likePost(userData) }}>
                <Text style={styles.textCommon}>
                  {userData?.userData?.item?.like_count} {strings.LIKES}
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
            setIsLoading(true)
            setCount(count + 8)
          }}
          // ListFooterComponent={() => (
          //   <View style={{ height: moderateScaleVertical(32) }} />
          // )}
          refreshing={refresh}
          onRefresh={onRefresh}
        />
      </View>
    </WrapperContainer>
  )
}



export default Home
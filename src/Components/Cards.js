import { View, Text, StyleSheet, Image, FlatList} from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import imagePath from '../constants/imagePath'

const Cards = ({data}) => {
  const userData = data;
  console.log(userData, 'userDataaaa');
  const PostHeader = userData => (
    <View style={styles.postHeaderContainer}>
      <View style={styles.posterName}>
        <View>
          <Image
            style={styles.profilePicture}
            source={{
              uri: userData.userData.item.profilePic,
            }}
          />
        </View>
        <View style={{marginLeft: moderateScale(16)}}>
          <Text style={styles.profileName}>
            {userData.userData.item.profileName}
          </Text>
          <Text style={styles.loc}>{userData.userData.item.location}</Text>
        </View>
      </View>
      <View>
        <Text style={{color: 'white', fontWeight: '900'}}> ... </Text>
      </View>
    </View>
  );

  const Post = userData => {
    console.log(userData, 'userrrrr in post');
    console.log(userData.userData.item.location, 'item in post');
    return (
      <View>
        <View style={styles.postContainer}>
          <Image
            style={styles.postImage}
            source={{
              uri: userData.userData.item.image,
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
                Comments {userData.userData.item.comments}
              </Text>
              <Text style={styles.textCommon}>
                Likes {userData.userData.item.likes}
              </Text>
              <Image
                style={{tintColor: colors.LIGHTGREYTEXT}}
                source={imagePath.icSHARE}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const PostContent = (userData, index) => {
    // const postData = userData.item;
    console.log(userData, 'userData in postContent');
    return (
      <View style={styles.wrapper}>
        <PostHeader userData={userData} />
        <Post userData={userData} />
      </View>
    );
  };

  return (
    <View>
      {/* <PostHeader userData={userData} /> */}
      <FlatList
        data={userData}
        renderItem={PostContent}
        extraData={userData.id}
        ListFooterComponent={() => (
          <View style={{height: moderateScaleVertical(32)}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: moderateScaleVertical(24),
    backgroundColor: colors.SECONDARY_COLOR,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    marginRight:moderateScaleVertical(20),
    marginLeft:moderateScaleVertical(20)
  },

  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 6,
    height: moderateScaleVertical(60),
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    // borderWidth: 1.6,
    // borderColor: '#ff8501',
  },
  posterName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    color: colors.WHITE,
  },
  loc: {
    color: colors.LIGHTGREYTEXT,
  },
  postImage: {
    width: '100%',
    height: moderateScaleVertical(312),
  },
  postDesc: {
    color: colors.LIGHTGREYTEXT,
    textAlign: 'justify',
    fontSize: textScale(15),
    //   fontFamily:
  },
  postFooter: {
    marginHorizontal: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(16),
  },
  postFooterTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(8),
  },
  textCommon: {
    color: colors.LIGHTGREYTEXT,
  },
});


export default Cards
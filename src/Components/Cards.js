// import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import colors from '../styles/colors'
// import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
// import imagePath from '../constants/imagePath'
// import navigationStrings from '../navigation/navigationStrings';
// import strings from '../constants/lang';
// import actions from '../redux/actions';

//  const Cards = ({ data, navigation, route }) => {

//   const [post, setPost] = useState();
//   const [count, setCount]=useState(0);
//   const [isLoading, setIsLoading]=useState(true);
//   // console.log(route, "routessssssss")
//     const userData = data;
//   // console.log(userData, 'userDataaaa>>>>>>>>');

//   useEffect(() => {
//     let apidata =`?skip=${count}`;
//     setIsLoading(true);
//     actions.getPost(apidata).then((res) => {
//       setIsLoading(false)
//       console.log("check res>>>>>>>>>>>>>>>>", res)
//       setPost(res?.data)
    
//     }).catch(err=>{
//       console.log("check error",err)
//     })

//   }, [count])


//   const PostHeader = userData => (
//     <View style={styles.postHeaderContainer}>
//       <View style={styles.posterName}>
//         <View>
//           <Image
//             style={styles.profilePicture}
//             source={{
//               uri: userData.userData.item.user.profile,
//             }}
//           />
//         </View>
//         <View style={{ marginLeft: moderateScale(16) }}>
//           <Text style={styles.profileName}>
//             {userData.userData.item.user.first_name} {userData.userData.item.user.last_name}
//           </Text>
//           <Text style={styles.loc}>{userData.userData.item.location_name}</Text>
//         </View>
//       </View>
//       <View>
//         <Text style={{ color: 'white', fontWeight: '900' }}> ... </Text>
//       </View>
//     </View>
//   );

//   const Post = userData => {
//     // console.log(userData, 'userrrrr in post');
//     console.log(userData.userData.item, 'item in postsssssss');
//     return (
//       <View>
//         <View style={styles.postContainer}>
//           <Image
//             style={styles.postImage}
//             source={{
//               uri: userData.userData.item.images.file,
//             }}
//           />
//           <View style={styles.postFooter}>
//             <Text style={styles.postDesc}>
//               {userData.userData.item.description}
//             </Text>
//             <Text
//               style={{
//                 color: colors.lightgrey,
//                 marginVertical: moderateScaleVertical(8),
//               }}>
//               {userData.userData.item.time}
//             </Text>
//             <View style={styles.postFooterTxt}>
//               <Text style={styles.textCommon}>
//                 {strings.COMMENTS}
//                 {userData.userData.item.comments}
//               </Text>
//               <Text style={styles.textCommon}>
//                 {strings.LIKES}
//                 {userData.userData.item.likes}
//               </Text>
//               <Image
//                 style={{ tintColor: colors.LIGHTGREYTEXT }}
//                 source={imagePath.icSHARE}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const PostContent = (userData, index) => {
//     // console.log("check>>>>>>>> userdataaaaaaaaaa",userData)
//     // console.log(userData, 'userData in postContent');
//     return (
//       <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.POST_DETAIL,
//         { userData: userData})}
//         style={styles.wrapper}>

//         <PostHeader userData={userData} />
//         <Post userData={userData} />

//       </TouchableOpacity>
//     );
//   };
  

//   return (
//     <View>

//       <FlatList
//         data={post}
//         renderItem={PostContent}
//         extraData={userData.id}

//         onEndReached={()=>{
//           console.log("check count",count)
//           setCount(count+1)
//         }}
//         ListFooterComponent={() => (
//           <View style={{ height: moderateScaleVertical(32) }} />
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     marginBottom: moderateScaleVertical(24),
//     backgroundColor: colors.SECONDARY_COLOR,
//     borderRadius: moderateScale(8),
//     paddingHorizontal: moderateScale(8),
//     marginRight: moderateScaleVertical(20),
//     marginLeft: moderateScaleVertical(20)
//   },

//   postHeaderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     alignItems: 'center',
//     paddingHorizontal: 6,
//     height: moderateScaleVertical(60),
//   },
//   profilePicture: {
//     width: 35,
//     height: 35,
//     borderRadius: 50,
//     marginLeft: 6,
//     // borderWidth: 1.6,
//     // borderColor: '#ff8501',
//   },
//   posterName: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileName: {
//     color: colors.WHITE,
//   },
//   loc: {
//     color: colors.LIGHTGREYTEXT,
//   },
//   postImage: {
//     width: '100%',
//     height: moderateScaleVertical(312),
//   },
//   postDesc: {
//     color: colors.LIGHTGREYTEXT,
//     textAlign: 'justify',
//     fontSize: textScale(15),
//     //   fontFamily:
//   },
//   postFooter: {
//     marginHorizontal: moderateScaleVertical(10),
//     marginVertical: moderateScaleVertical(16),
//   },
//   postFooterTxt: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: moderateScaleVertical(8),
//   },
//   textCommon: {
//     color: colors.LIGHTGREYTEXT,
//   },
// });


// export default Cards
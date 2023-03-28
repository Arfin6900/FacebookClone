import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screensize from '../../Constants/Screensize'
import IconE from 'react-native-vector-icons/Entypo';
import User from '../../Constants/UserData';
import Colors from '../../Constants/Colors';
import PostTopSection from './PosttopSection';
import Body from './PostBody/body';
import ReactionBar from './ReactionBar';

const Posts = ({item}) => {
  return (
    <View style={styles.PostsContainer}>
      {/* Top section  */}
    <PostTopSection 
    profilepic={item?.profilepic} 
    time={item?.Post?.time}
    name={item.name}
    />
    <Body postData={item?.Post}/>
    <ReactionBar />
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
    PostsContainer:{
        width:Screensize.width,
    },
})
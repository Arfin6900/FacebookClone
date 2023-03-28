import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Stories from '../../Components/StoryComponent/Stories'
import Colors from '../../Constants/Colors'
import Screensize from '../../Constants/Screensize'
import User from '../../Constants/UserData'
import IconF from "react-native-vector-icons/FontAwesome5"
import DummyData from '../../Constants/Dummy_story_data'
import Posts from '../../Components/PostsComponent/Posts'
import PostFlatList from '../../Components/PostsComponent/PostFlatList'
const Home = () => {
  console.log("Dummy data",DummyData)
  return (
    <ScrollView style={{backgroundColor:Colors.black,flex:1}}>
      <View style={styles.createPostView}>
        <Image source={User.profilepic} style={styles.profilepic}/>
        <TouchableOpacity style={styles.whatsonyourmind}>
          <Text style={{color:Colors.themColorWhite}}>what's on your mind?</Text>
        </TouchableOpacity>
        <IconF name={"photo-video"} size={Screensize.Fontsize-13} color={"#8fce00"}/>
      </View>
        <Stories/>
        <PostFlatList />
       
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  createPostView:{
    height:Screensize.Fontsize+40,
    backgroundColor:Colors.themColorBlack,
    borderTopWidth:0.4,
    borderColor:Colors.themColorWhite,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  },
  profilepic:{
    height:Screensize.Fontsize-5,
    width:Screensize.Fontsize-5,
    borderRadius:Screensize.Fontsize-20,
    alignSelf:"center"
},
whatsonyourmind:{
  height:"50%",
  width:"70%",
  borderWidth:0.5,
  borderColor:Colors.themColorWhite,
  borderRadius:Screensize.Fontsize-20,
  justifyContent:"center",
  paddingHorizontal:Screensize.Fontsize-30
}
})
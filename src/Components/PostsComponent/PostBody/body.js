import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screensize from '../../../Constants/Screensize'
import Colors from '../../../Constants/Colors'

const Body = ({postData}) => {
  return (
    <View style={styles.container}>
      {postData?.Message?<Text style={styles.postMessage}>{postData?.Message}</Text>:null}
      {postData?.pic?
      <Image 
      resizeMode='contain'
       source={postData?.pic} 
       style={styles.postImage}
       />:null}
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    container:{
        minHeight:Screensize.height/14,
        justifyContent:"center",
        paddingHorizontal:Screensize.Fontsize-17,
        backgroundColor:Colors.themColorBlack

    },
    postMessage:{
        fontSize:Screensize.Fontsize-12.5,
        lineHeight:Screensize.Fontsize-7,
        fontWeight:"300",
        color:Colors.themColorWhite
    },
    postImage:{
      alignSelf:"center",
      height:Screensize.height/2,
      width:Screensize.width
    }
})
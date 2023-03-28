import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import DummyPostData from '../../Constants/DummyPostsData'
import Posts from './Posts'

const PostFlatList = () => {
  return (
    <View>
      <FlatList 
      data={DummyPostData} 
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <Posts item={item}/>
      )}
      />
    </View>
  )
}

export default PostFlatList

const styles = StyleSheet.create({})
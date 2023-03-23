import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import DummyData from '../../Constants/Dummy_story_data';
import StoryChild from './StoryChild';
import Colors from '../../Constants/Colors';
import Screensize from '../../Constants/Screensize';
import { useNavigation } from '@react-navigation/native';
import Pictures from '../../Constants/Pictures';
import User from '../../Constants/UserData';

const Stories = () => {
    const navigation=useNavigation()
    const storyOpenHandler=(item)=>{
        navigation.navigate("StoryOpen",item)
    }
  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        data={[{
          Text:"hello world",
          id:0,
          name:"You",
          profilepic:User.profilepic,
          stories:[   ]
       },...DummyData]}
        keyExtractor={item => item.id}
        renderItem={({item}) => <StoryChild item={item} onPress={()=>{storyOpenHandler(item)}}/>}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.themColorBlack,
    marginVertical: Screensize.Fontsize - 28,
    height:Screensize.height/3.8,  },
});

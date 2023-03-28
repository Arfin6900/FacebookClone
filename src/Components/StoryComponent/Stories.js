import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import DummyData from '../../Constants/Dummy_story_data';
import StoryChild, { CreateStories } from './StoryChild';
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
      ListHeaderComponent={<CreateStories item2={DummyData[0]} onPress={()=>{navigation.navigate("CreateStory")}} navigation={navigation}/>}
      showsHorizontalScrollIndicator={false}
        horizontal
        data={DummyData}
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

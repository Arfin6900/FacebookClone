import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Screensize from '../../Constants/Screensize';
import Colors from '../../Constants/Colors';
import User from '../../Constants/UserData';
import IconI from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const StoryChild = ({item, onPress}) => {
  let Story = item?.stories[0];
  const navigation =useNavigation()
  //<====================Other Users Stories=====================>
  const OtherUsersStories = () => {
    return (
      <>
        {Story?.text ? (
          <Text
            style={{
              fontSize: Screensize.Fontsize - 20,
              color: Colors.themColorWhite,
            }}>
            {item.stories[0].text}
          </Text>
        ) : null}
        {Story?.pic ? <Image resizeMode="cover" source={Story?.pic} /> : null}
      </>
    );
  };

  // <====================User Story=============================>

  const UserStories = () => {
    return (
      <>
        {Story?.text ? (
          <Text
            style={{
              fontSize: Screensize.Fontsize - 20,
              color: Colors.themColorWhite,
            }}>
            {item.stories[0].text}
          </Text>
        ) : null}
        {Story?.pic ? <Image resizeMode="cover" source={Story?.pic} /> : null}
        {!item.stories.length ? (
          <>
            <Image
              style={styles.StoryImage}
              resizeMode="cover"
              source={User.profilepic}
            />
            <View style={styles.CreateStoryView}>
              <IconI
                name="add-circle"
                size={Screensize.Fontsize}
                color={Colors.themColorWhite}
              />
              <Text
                style={{
                  fontSize: Screensize.Fontsize - 20,
                  color: Colors.themColorWhite,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                Create Story
              </Text>
            </View>
          </>
        ) : null}
      </>
    );
  };
  const CreateStoryHandler=()=>{
    navigation.navigate('CreateStory')
  }
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {padding: item.id == 0 ? 0 : Screensize.Fontsize - 30},
      ]}
      onPress={item.id==0?CreateStoryHandler:onPress}>
      {item.id == 0 ? null : (
        <Image source={item.profilepic} style={styles.profilepic} />
      )}
      {item.id == 0 ? <UserStories /> : <OtherUsersStories />}

      {item.id == 0 ? null : <Text style={styles.username}>{item.name}</Text>}
    </TouchableOpacity>
  );
};

export default StoryChild;

const styles = StyleSheet.create({
  container: {
    height: Screensize.height / 4.2,
    width: Screensize.width / 3,
    borderWidth: 0.4,
    borderRadius: Screensize.Fontsize - 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Screensize.Fontsize - 30,
    alignSelf: 'center',

    backgroundColor: '#527385',
  },
  profilepic: {
    height: Screensize.Fontsize - 5,
    width: Screensize.Fontsize - 5,
    borderRadius: Screensize.Fontsize - 20,
    alignSelf: 'flex-start',
  },
  username: {
    fontSize: Screensize.Fontsize - 20,
    color: Colors.themColorWhite,
  },
  StoryImage: {
    height: '75%',
    width: '100%',
    borderTopLeftRadius: Screensize.Fontsize - 20,
    borderTopRightRadius: Screensize.Fontsize - 20,
  },
  CreateStoryView: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    bottom: Screensize.Fontsize - 20,
  },
});

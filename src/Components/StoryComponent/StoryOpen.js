import {StyleSheet, Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Colors from '../../Constants/Colors';
import User from '../../Constants/UserData';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconE from 'react-native-vector-icons/Entypo';
import Screensize from '../../Constants/Screensize';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';


const StoryOpen = ({route}) => {
  const navigation = useNavigation();
  const item = route?.params;
  const [currentStory, setCurrentStory] = useState(0);
  useEffect(() => {
    if (item?.stories[currentStory]?.video) {
      setTimeout(() => {
        setCurrentStory(currentStory + 1);
      }, 15000);
    console.log("item?.stories[currentStory]?.video",item?.stories[currentStory]?.video)
    }else{
      setTimeout(() => {
        setCurrentStory(currentStory + 1);
      }, 5000);
    }

  }, [currentStory]);


  const ProgressView=()=>{
    const Progress=useRef(new Animated.Value(0))?.current
    useEffect(()=>{
    Animated.timing(
      Progress,
      {
        toValue:(Screensize.width-20)/item?.stories?.length,
        duration:5000,
        useNativeDriver:false
      }
    ).start()
    },[Progress])
    return(<Animated.Text style={{backgroundColor:Colors.themColorWhite,width:Progress}}></Animated.Text>)
  }


    // Handle Next story



  const rightHandler=()=>{
    if(currentStory==0){
    setCurrentStory(currentStory );
  }else{
    setCurrentStory(currentStory-1)
  }
  }


  // Handle prev story


  const leftHandler=()=>{
    if(currentStory==item?.stories?.length){
    setCurrentStory(currentStory);
  }else{
    setCurrentStory(currentStory+1)
  }
  }
  return (
    <View style={{flex: 1, backgroundColor: Colors.themColorBlack}}>
      <View style={{flexDirection: 'row', width: Screensize.width, height: 4}}>
        {item?.stories?.map((val, index) => (
          <View
            style={{
              flex: 1 / item.stories.length,
              height: 4,
              alignSelf: 'flex-start',
              backgroundColor:'grey',
              marginHorizontal: 2,
            }}
          >
            { currentStory == index ?<ProgressView />: null}
          </View>
        ))}
      </View>
      <View style={styles.StoryTopDiv}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.profilepic} style={styles.profilepic} />
          <Text style={styles.username}>{item?.name}</Text>
        </View>
        <View style={styles.Iconsdiv}>
          <IconE
            name={'dots-three-horizontal'}
            size={Screensize.Fontsize - 10}
            color={Colors.themColorWhite}
          />
          <IconE
            onPress={() => {
              navigation.goBack();
            }}
            name={'cross'}
            size={Screensize.Fontsize - 8}
            color={Colors.themColorWhite}
          />
        </View>
      </View>
      <View style={styles.storyBody}>
        <View style={styles.controlsDiv}>
        <TouchableOpacity onPress={rightHandler} style={styles.rightControl}></TouchableOpacity>
        <TouchableOpacity onPress={leftHandler} style={styles.leftControl}></TouchableOpacity>
        </View>
        {item?.stories[currentStory]?.text ? (
          <Text> {item.stories[currentStory].text}</Text>
        ) : null}
        {item?.stories[currentStory]?.pic ? (
          <Image
            resizeMode="contain"
            source={item?.stories[currentStory]?.pic}
          />
        ) : null}
        {item?.stories[currentStory]?.video ? (
          <Video
          onProgress={(res)=>{console.log(res)}}
             source={{uri: item?.stories[currentStory]?.video}}
            style={{top:0,bottom:0,right:0,left:0,height:Screensize.height,width:Screensize.width}} resizeMode="contain"
            />
        ) : null}
      </View>
    </View>
  );
};

export default StoryOpen;

const styles = StyleSheet.create({
  StoryTopDiv: {
    height: Screensize.Fontsize + 40,
    backgroundColor: Colors.themColorBlack,
    borderTopWidth: 0.4,
    borderColor: Colors.themColorWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Screensize.Fontsize - 20,
  },
  profilepic: {
    height: Screensize.Fontsize,
    width: Screensize.Fontsize,
    borderRadius: Screensize.Fontsize - 19,
    alignSelf: 'center',
  },
  Iconsdiv: {
    flexDirection: 'row',
    width: Screensize.Fontsize + 30,
    justifyContent: 'space-between',
  },
  username: {
    color: Colors.themColorWhite,
    alignSelf: 'center',
    left: Screensize.Fontsize - 27,
    fontWeight: 'bold',
    fontSize: Screensize.Fontsize - 18,
  },
  storyLine: {
    height: Screensize.Fontsize - 33,
    backgroundColor: Colors.themColorWhite,
    margin: 2,
  },
  storyBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsDiv: {
    flexDirection: 'row',
    height: Screensize.height / 1.5,
    width: Screensize.width,
    position:"absolute"
  },
  rightControl:{
    height:"100%",
    width:"50%",
  },
  leftControl:{
    height:"100%",
    width:"50%",
  }
});

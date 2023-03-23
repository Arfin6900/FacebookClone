import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../Constants/Colors';
import Screensize from '../../Constants/Screensize';
import {useNavigation} from '@react-navigation/native';
import User from '../../Constants/UserData';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome5';
import ImageCropPicker from 'react-native-image-crop-picker';
const CreateStory = () => {
  const navigation = useNavigation();
  const [media,setMedia]=useState()
  const SelectMediaHandler=()=>{
    ImageCropPicker.openPicker({
  
        cropping: true
      }).then(image => {
        console.log(image);
        setMedia({image:image.path,})
      });
  }
  return (
    <View style={{flex: 1, backgroundColor: Colors.themColorBlack}}>

         {/* ====================TopDiv=================== */}

      <View
        style={styles.TopDiv}>
        <IconE
          onPress={() => {
            navigation.goBack();
          }}
          name={'cross'}
          size={Screensize.Fontsize - 8}
          color={Colors.themColorWhite}
          style={{left: 10, top: 10}}
        />
        <TouchableOpacity style={[styles.Done,{top:10,right:10}]}>
          <Text style={styles.DoneText}>Done</Text>
        </TouchableOpacity>
      </View>


      {/* =========================contentsBody================== */}


      <View style={styles.contentsBody}>
       {!media?.image&&!media?.video?
       <TextInput
          placeholder="Start Typing"
          placeholderTextColor={'grey'}
          style={{
            fontSize: Screensize.Fontsize - 10,
            maxWidth: Screensize.width / 1.3,
          }}
          multiline
        />:null}
        {
            media?.image?<Image resizeMode='contain' source={{uri:media?.image}} style={{height:Screensize.height/1.4,width:Screensize.width}}/>
            :null
        }
      </View>

      {/* ==========================bottomDiv==================== */}
      <View style={styles.bottomDiv}>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={SelectMediaHandler}>
          <IconF
            name={'photo-video'}
            size={Screensize.Fontsize - 13}
            color={'#8fce00'}
          />
          </TouchableOpacity>
          <Text style={[styles.DoneText, {left: 10}]}>Select Media</Text>
        </View>
      </View>
    </View>
  );
};

export default CreateStory;

const styles = StyleSheet.create({
  TopDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    justifyContent: 'flex-end',
  },
  username: {
    color: Colors.themColorWhite,
    alignSelf: 'center',
    left: Screensize.Fontsize - 27,
    fontWeight: 'bold',
    fontSize: Screensize.Fontsize - 18,
  },
  contentsBody: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomDiv: {
    height: Screensize.Fontsize + 10,
    width: Screensize.width / 1.1,
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: Screensize.Fontsize - 29,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Done: {
    height: Screensize.Fontsize - 5,
    width: Screensize.Fontsize + 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.themColorWhite,
  },
  DoneText: {
    fontSize: Screensize.Fontsize - 20,
    color: Colors.themColorWhite,
    fontWeight: 'bold',
  },
});

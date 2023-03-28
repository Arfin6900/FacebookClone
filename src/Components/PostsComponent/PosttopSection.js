import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screensize from '../../Constants/Screensize'
import IconE from 'react-native-vector-icons/Entypo';
import User from '../../Constants/UserData';
import Colors from '../../Constants/Colors';

const PostTopSection = ({profilepic,time,name}) => {
  return (
<>
      {/* Top section  */}
      <View style={styles.PostTopDiv}>
        <View style={{flexDirection: 'row'}}>
          <Image source={profilepic} style={styles.profilepic} />
          <View>
          <Text style={styles.username}>{name}</Text>
          <Text >{time}</Text>
          </View>        
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
      </> 
  )
}

export default PostTopSection

const styles = StyleSheet.create({
    PostsContainer:{
        minHeight:Screensize.height/5,
        width:Screensize.width,
        backgroundColor:"red"
    },
    PostTopDiv: {
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
        height: Screensize.Fontsize+5,
        width: Screensize.Fontsize+5,
        borderRadius: Screensize.Fontsize - 14,
        alignSelf: 'center',
      },
      Iconsdiv: {
        flexDirection: 'row',
        width: Screensize.Fontsize + 30,
        justifyContent: 'space-between',
      },
      username: {
        color: Colors.themColorWhite,
        // alignSelf: 'center',
        left: Screensize.Fontsize - 27,
        fontWeight: 'bold',
        fontSize: Screensize.Fontsize - 18,
      },
})
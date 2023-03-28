import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screensize from '../../Constants/Screensize';
import Colors from '../../Constants/Colors';
import IconA from 'react-native-vector-icons/AntDesign';
import IconEv from 'react-native-vector-icons/EvilIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';


const ReactionBar = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.reactionCountDiv}>
        <Text style={styles.reactionCount}>😄💓 tom and 5 others</Text>
        <Text style={styles.reactionCount}>3 comments</Text>
      </View>
      <View style={styles.reactionBar}>
        {/* Like */}
        <View style={styles.ReactionSection}>
          <IconA
            name={'like2'}
            color={Colors.themColorWhite}
            size={Screensize.Fontsize - 10}
          />
          <Text style={styles.ReactionText}>Like</Text>
        </View>
        {/* Comment */}
        <View style={[styles.ReactionSection,{bottom:4}]}>
          <IconEv
            style={{top:5}}
            name={'comment'}
            color={Colors.themColorWhite}
            size={Screensize.Fontsize - 2}
          />
          <Text style={styles.ReactionText}>Comments</Text>
        </View>
        {/* Share */}
        <View style={[styles.ReactionSection,{bottom:7}]}>
          <IconMC
          style={{top:6}}
            name={'share-outline'}
            color={Colors.themColorWhite}
            size={Screensize.Fontsize}
          />
          <Text style={styles.ReactionText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default ReactionBar;

const styles = StyleSheet.create({
  Container: {
    height: Screensize.height / 10,
    backgroundColor: Colors.themColorBlack,
  },
  reactionCountDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Screensize.Fontsize - 20,
    top: Screensize.Fontsize - 30,
  },
  reactionCount: {
    fontSize: Screensize.Fontsize - 21,
    color: Colors.themColorWhite,
    opacity: 0.7,
  },
  reactionBar: {
    height: Screensize.Fontsize + 10,
    width: Screensize.width,
    top: Screensize.Fontsize - 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    paddingHorizontal:Screensize.Fontsize-20,
    borderTopWidth:0.3,
    borderBottomWidth:0.3,
    borderColor:Colors.themColorWhite
  },
  ReactionSection: {
    flexDirection: 'row',
    alignItems:"baseline"
  },
  ReactionText: {
    fontSize: Screensize.Fontsize - 18,
    color: Colors.themColorWhite,
    opacity: 0.8,
    left:Screensize.Fontsize-30
  },
  
});

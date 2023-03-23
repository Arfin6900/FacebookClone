import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screens/HomeScreens/Home';
import { TabBar } from 'react-native-tab-view';
import Freindreq from '../Screens/freindreqrecreen/freindreq';
const Tab = createMaterialTopTabNavigator();
import {Text} from "react-native"
import Colors from '../Constants/Colors';
import Icon from "react-native-vector-icons/Entypo"
import Iconi from "react-native-vector-icons/Ionicons"
import IconM from "react-native-vector-icons/MaterialIcons"


import Screensize from '../Constants/Screensize';
function TopTabs() {
  return (
    <Tab.Navigator
     
     screenOptions={{
      tabBarStyle:{
        backgroundColor:Colors.themColorBlack},
        tabBarLabelStyle:{color:Colors.themColorWhite},
        tabBarActiveTintColor:Colors.blue,
        tabBarInactiveTintColor:Colors.themColorWhite,
        tabBarShowLabel:false
      }}>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon:({color,size})=>(
        <Iconi name={color==Colors.blue?"home":"home-outline"} color={color} size={Screensize.Fontsize-10}/>
      )}} />
      <Tab.Screen name="Settings" component={Freindreq} 
      options={{tabBarIcon:({color,size})=>(
        <Iconi name={color==Colors.blue?"people":"people-outline"} color={color} size={Screensize.Fontsize-10}/>
      )}}/>
      <Tab.Screen name="sd" component={Home} 
      options={{tabBarIcon:({color,size})=>(
        <IconM name={color==Colors.blue?"video-collection":"ondemand-video"} color={color} size={Screensize.Fontsize-10}/>
      )}}/>
      <Tab.Screen name="wse" component={Home} 
      options={{tabBarIcon:({color,size})=>(
        <Iconi name={color==Colors.blue?"notifications":"notifications-outline"} color={color} size={Screensize.Fontsize-10}/>
      )}}/>
      <Tab.Screen name="sdf" component={Home} 
      options={{tabBarIcon:({color,size})=>(
        <Iconi name="person-outline" color={color} size={Screensize.Fontsize-10}/>
      )}}/>
    </Tab.Navigator>
  );
}
export default TopTabs
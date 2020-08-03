import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign , Ionicons , MaterialIcons} from '@expo/vector-icons';
import {useNavigation, useTheme} from '@react-navigation/native'
import Constant from 'expo-constants';
import {useDispatch, useSelector} from 'react-redux';

export default function Header() {
    const navigation= useNavigation()
    const dispatch = useDispatch()
    const currentTheme = useSelector(state=>{
        return state.myDarkMode
    })
    const {colors} = useTheme()
    const mycolor = colors.iconColor
  return (
        <View style={{
            marginTop:Constant.statusBarHeight,
            height:45,
            backgroundColor:colors.headerColor,
            flexDirection:"row",
            justifyContent:"space-between",
            elevation:4,

        }}>

        <View style ={{
            flexDirection:"row",
            margin:5
        }}>
            <AntDesign
            style={{
                marginLeft:15,
                marginTop:5
            
            }}
            name="youtube" size={30} color="red" />
            <Text style={{
                fontSize:22,
                marginLeft:6,
                marginTop:4,
                color: mycolor,
                fontWeight:"bold"
                }}>YouTube</Text>
        </View>

        <View style={{
            flexDirection:"row",
            justifyContent:"space-around",
            width:150,
            margin:5



        }}>
            <Ionicons name= "md-videocam" size={32} color= {mycolor} />
            <Ionicons name= "md-search" size={32} color=  {mycolor} 
            onPress={()=>navigation.navigate("search")}
            />
            <MaterialIcons name= "account-circle" size={32} color= {mycolor} 
            
            onPress={()=>dispatch({type:"changeTheme", payload:!currentTheme})}
            
            />

        </View>
    </View>
  );
}



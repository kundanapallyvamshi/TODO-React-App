import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>To-Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        paddingTop:38,
        backgroundColor:'cyan',
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    }
});
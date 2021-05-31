import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,TextInput,Button } from 'react-native';

export default function AddTodo({submitHandler}){

    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='Enter task...'
            onChangeText={changeHandler}
            />
        <Button
        onPress={()=>submitHandler(text)}
        title='add todo'
        color='cyan'
        />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:'green',
    }
})
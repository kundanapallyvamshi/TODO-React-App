import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,TextInput,Button } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';
export default function App() {

  const [todos,setTodos] = useState([
    {text : 'Meeting at 5:30 PM',key:'1'},
    {text : 'Need to Drink Water',key:'2'},
    {text : 'Taking Rest',key:'3'},
  ]);

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.key!=key);
    })
  }

  const submitHandler = (text)=>{
    setTodos((prevTodos)=>{
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ];
    })
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
           data={todos}
           renderItem={({item})=>(
             <TodoItem
             item={item} 
             pressHandler={pressHandler}
             />
           )}
          />
        </View>
      </View>

    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  },
  input:{
    borderWidth:1,
    padding:8,
  }
});

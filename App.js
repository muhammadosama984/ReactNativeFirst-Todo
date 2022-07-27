import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
     setTaskItems([...taskItems, task]);
     setTask(null);
  }

  const completeTask =(index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style ={styles.taskWrapper}>
        <Text style ={styles.sectionTitle}>
          Today's Tasks
        </Text>

       <View style = {styles.items}>
        {/* This is the place where all the items are listed */}
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity  key = {index} onPress={() => completeTask(index)}>
                      <Task  text = {item}/>
              </TouchableOpacity>
            )
            
            
          })
        }
       


       </View>
      </View>


      {/* Write a task section */}
     <KeyboardAvoidingView
     behavior= {Platform.OS === 'ios' ? "padding": "height"}
     style = {styles.wtiteTaskWrapper} 
     >
    <TextInput
    style = {styles.input}
    placeholder = {'Write a task'}
    onChangeText = {text => setTask(text)}
    value = {task}
    />
     
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style = {styles.addWrapper}>
        <Text style = {styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
   
     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    
    
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10
  
},
items: {
    marginTop: 30
},
wtiteTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
input: {
  paddingVertical: 15,
  backgroundColor: '#FFF',
  width: 250,
  paddingHorizontal: 15,
  borderRadius: 60,
  borderWidth: 1,
  borderColor: '#C0C0C0',
},
addWrapper: {
  width:60,
  height: 60,
  backgroundColor : '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#C0C0C0',

},
addText: {}

  
});

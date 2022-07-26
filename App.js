import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style ={styles.taskWrapper}>
        <Text style ={styles.sectionTitle}>
          Today's Tasks
        </Text>

       <View style = {styles.items}>
        {/* This is the place where all the items are listed */}
       <Task text = "Task 1"/>
       <Task text = "Task 2"/>
       <Task text = "Task 3"/>


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
    />
     
    <TouchableOpacity>
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
  justifyContent: 'space-between',
  alignItems: 'center',
},
input: {},
addWrapper: {},
addText: {}

  
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
}
  
});

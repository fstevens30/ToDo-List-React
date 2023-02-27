import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, StatusBar } from 'react-native';
import Task from './components/Task';

export default function App() {
  
  StatusBar.setBarStyle('light-content', true);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);

  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>

      {/* Todays Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>

              )
            })
          }

        </View>


      </View>
      </ScrollView>
      
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'}
 value={task} onChangeText={text => setTask(text) } />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#F1FAEE',
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '80%',
    height: 60,
    backgroundColor: '#F1FAEE',
    borderRadius: 60,
    borderColor: '#F1FAEE',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7,},
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#E63946',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7,},
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  addText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

});

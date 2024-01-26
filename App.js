import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function App () {
  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask('')
  }

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  const handleLongPress = (index) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDeleteTask(index) }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleDeleteTask(index)} onLongPress={() => handleLongPress(index)}>
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder={'Write a task'}
        onSubmitEditing={handleAddTask} />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {}
})

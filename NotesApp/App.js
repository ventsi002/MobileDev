import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from './config'

const Stack = createStackNavigator();


function HomeScreen({ navigation, route }) {
  const [notes, setNotes] = useState([]);

  function AddNote() {
    const newNote = {
      id: notes.length,
      text: 'New note',
    };
    setNotes([...notes, newNote]);
  }

  function NotePress(note) {
    navigation.navigate('Note', { note, notes, setNotes });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>
      {notes.map((note) => (
        <TouchableOpacity key={note.id} onPress={() => NotePress(note)}>
          <Text style={styles.note}>{note.text}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Add Note" onPress={AddNote} />
    </View>
  );
}

function NoteScreen({ navigation, route }) {
  const { note, notes, setNotes } = route.params;
  const [text, setText] = useState(note.text);

  const todoRef = firebase.firestore().collection('Notes');
  const [addNote, setAddNote] = useState('');


  const addField = () => {
    if (addNote && addNote.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const note = {
        heading: addNote,
        createdAt: timestamp
      };
      todoRef
        .add(note)
        .then(() => {
          setAddNote('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        })
    }
  }

  function SaveNote() {
    const newNotes = notes.map((n) => {
      if (n.id === note.id) {
        return { ...n, text };
      } else {
        return n;
      }
    });
    setNotes(newNotes);
    navigation.goBack();
  }

  function DeleteNote() {
    const newNotes = notes.filter((n) => n.id !== note.id);
    setNotes(newNotes);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.noteInput} value={addNote} onChangeText={(heading) => setAddNote(heading)} />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={addField} />
        <Button title="Delete" onPress={DeleteNote} color="red" />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  note: {
    fontSize: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
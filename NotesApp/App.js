import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Keyboard, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker } from 'react-native-maps';

const Stack = createStackNavigator();

function HomeScreen({ navigation, route }) {
  const [notes, setNotes] = useState([]);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const getImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result);
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    if (coordinate) {
      const newNote = {
        id: notes.length,
        text: "New note",
        location: coordinate,
      };
      setNotes([...notes, newNote]);
    }
  };

  let imagePreview = null;
  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image.uri }} />;
  } else {
    imagePreview = <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8889/8889571.png' }} style={styles.image} />;
  }


  function NotePress(note) {
    navigation.navigate('Note', { note, notes, setNotes, setLocation });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>My Notes</Text>
        <Button title='Get Image' onPress={getImage}></Button>
        <Text>Press on the map to create new note</Text>
        <MapView style={styles.map} onPress={handleMapPress}>
          {notes.map((note) => (
            <Marker
              key={note.id}
              coordinate={note.location}
              onPress={() => NotePress(note)}
            />
          ))}
        </MapView>
        {notes.map((note) => (
          <TouchableOpacity key={note.id} onPress={() => NotePress(note)}>
            <Text style={styles.note}>{note.text}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.imagePreview}>{imagePreview}</View>
      </View>
    </ScrollView>
  );
}


function NoteScreen({ navigation, route }) {
  const { note, notes, setNotes } = route.params;
  const [text, setText] = useState(note.text);
  const [location, setLocation] = useState(note.location);

  const [addNote, setAddNote] = useState(text);
  const noteId = note.id;

  const saveNote = () => {
    if (addNote && addNote.length > 0) {
      updateNote(addNote);
      Keyboard.dismiss();
      navigation.goBack();
    }
  }

  const updateNote = (newText) => {
    const newNotes = notes.map((n) => {
      if (n.id === noteId) {
        return { ...n, text: newText, location };
      } else {
        return n;
      }
    });
    setNotes(newNotes);
  }

  function DeleteNote() {
    const newNotes = notes.filter((n) => n.id !== noteId);
    setNotes(newNotes);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title='Save' onPress={saveNote} ></Button>
        <Button title='Delete' onPress={DeleteNote}></Button>
      </View>
      <TextInput
        style={styles.textInput}
        value={addNote}
        onChangeText={(text) => setAddNote(text)}
        multiline={true}
        autoFocus={true}
      />
      <MapView style={styles.map} onPress={(event) => setLocation(event.nativeEvent.coordinate)}>
        {location && <Marker coordinate={location} />}
      </MapView>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  note: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  imagePreview: {
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  mapPin: {
    width: 40,
    height: 40,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  textInput: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    Height: 20,
    width: "100%"
  },
});

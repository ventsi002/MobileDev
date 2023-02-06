import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./pokeball.png')}
        style={{ width: 200, height: 200 }}
      />
      <Image source={require('./pokemon.png')}
        style={{ marginBottom: 200 }}
      />
      <Text style={styles.text}>Phone:</Text>
      <Text style={styles.text}>E-mail:</Text>
      <Text style={styles.text}>Website:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'yellow',
    fontSize: 30,
    top: 70,
    right: 130
  }
}); 

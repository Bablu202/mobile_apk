import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder = 'your goals'/>
        <Button title = 'add Goal'/>
      </View>
      <View>
        <Text>Here we go, let's chase .. </Text>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent: 'space-around',
  },
    textInput:{
    borderWidth: 1,
    borderColor: 'blue',
    width: '80%',
    marginRight:8,
    padding: 8,

  },
  
});

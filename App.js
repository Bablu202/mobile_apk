import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  function InputHandler(entredText){
    console.log(entredText);
    
  }

  function AddGoalHandler(){

  }
  console.log('apk')
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder = 'your goals'
        onChangetext = {InputHandler}
        />
        <Button title = 'add Goal' onPress = {AddGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>Here we go, let's chase .. </Text>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal:16,
    flex:1,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:0.5,
    borderBottomColor:'purple',
  },
    textInput:{
    borderWidth: 1,
    borderColor: 'blue',
    width: '70%',
    marginRight:8,
    padding: 8,

  },
  goalsContainer:{
    flex :3,
  }
  
});

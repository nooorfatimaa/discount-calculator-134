import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const[ogPrice, setPrice] = useState("");
  const[discount, setDiscount] = useState("");
  const[text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt}>Original Price</Text>
        <TextInput style={styles.txtInput}
          keyboardType = {"number-pad"}
        />
        <Text style={styles.txt}>Discount Percentage</Text>
        <TextInput style={styles.txtInput}
          keyboardType = {"number-pad"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  txt : {
    fontSize: 20,
    fontWeight: "bold",
    color: '#b395d6', 
    fontFamily: "monospace",
  },
  txtInput: {
    width: 250,
    height: 70,
    borderColor: "coral",
    borderWidth: 1,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

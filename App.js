import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const[ogPrice, setPrice] = useState(0);
  const[discount, setDiscount] = useState(0);
  const[saving, setSaving] = useState("");
  const[finalPrice, setFinal] = useState("");

  const calculate = () => {
    let temp = 0;
    temp = ((100-discount)/100)*ogPrice;
    setFinal("Final price is " + temp);
    setSaving("You save "+ (ogPrice-temp));
    setPrice(0);
    setDiscount(0);
  }


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt}>Original Price</Text>
        <TextInput style={styles.txtInput}
          keyboardType = {"number-pad"}
          onChangeText ={(text) => setPrice(text)}
          value = {ogPrice}
        />
        <Text style={styles.txt}>Discount Percentage</Text>
        <TextInput style={styles.txtInput}
          keyboardType = {"number-pad"}
          onChangeText={(text) => setDiscount(text)}
          value = {discount}
        />
        <Pressable onPress={() => calculate()} style={styles.btn}><Text>CALCULATE</Text></Pressable>
      </View>
      <View style={styles.box2}>
        <Text style={styles.txt2}>{saving}</Text>
        <Text style={styles.txt2}>{finalPrice}</Text>
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
  txt2 : {
    fontSize: 20,
    //fontWeight: "bold",
    color: 'black', 
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
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 200,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderWidth: 1,
    height: 40,
    width: 100,
    marginBottom: 4,
  }
});

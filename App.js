iimport React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Alert } from 'react-native';


export default function App() {
  const[ogPrice, setPrice] = useState();
  const[discount, setDiscount] = useState();
  const[saving, setSaving] = useState("");
  const[finalPrice, setFinal] = useState("");

  const calculate = () => {
    let temp = 0;
    if (ogPrice >= 0 && discount <100 && discount >0) {
      temp = ((100-discount)/100)*ogPrice;
      setFinal("Final price is " + temp);
      setSaving("You save "+ (ogPrice-temp));
      setPrice(0);
      setDiscount(0);
    }
    else {
      Alert.alert("Enter a number less than 100 for discount.");
      Alert.alert("Invalid input. Make sure you enter a positive number for both fields.");
    }
  }

  const reset = () => {
    setPrice();
    setDiscount();
  }

  const save = () => {
    setPrice();
    setDiscount();
  }


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.hdr}>DISCOUNT APP</Text>
        <Text style={styles.txt}>Original Price</Text>
        <TextInput style={styles.txtInput}
          keyboardType = {"number-pad"}
          onChangeText ={(text) => setPrice(text)}
          value = {ogPrice}
          placeholder = "enter original price"
        />
        <Text style={styles.txt}>Discount Percentage</Text>
        <TextInput style={styles.txtInput}
          keyboardType = {"number-pad"}
          onChangeText={(text) => setDiscount(text)}
          value = {discount}
          placeholder = "enter discount % (< 100)"
        />
        <Pressable onPress={() => calculate()} style={styles.btn}><Text>CALCULATE</Text></Pressable>
        <Pressable onPress={() => reset()} style={styles.btn}><Text>RESET</Text></Pressable>
        <Pressable onPress={() => save()} style={styles.btn}><Text>SAVE</Text></Pressable>
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
    marginTop: 15,
  },
  hdr : {
    fontSize: 40,
    marginBottom: 25,
    fontWeight: 'bold',
    color: 'lightskyblue', 
    fontFamily: 'monospace',
  },
  txt : {
    fontSize: 15,
    fontWeight: "bold",
    color: 'darkblue', 
    fontFamily: "monospace",
  },
  txt2 : {
    fontSize: 20,
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
    backgroundColor: 'mediumpurple',
    height: 40,
    width: 150,
    marginBottom: 4,
  }
});

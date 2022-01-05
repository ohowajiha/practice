import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [isheight, setHeight] = useState(0);
  const [isweight, setWeight] = useState(0);
  const [BmiResult, setBmiResult] = useState('');

  const BMI = (height, weight) => {
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result.toFixed(2);
    setBmiResult(result);
    if (result < 18.5) {
      setBmiResult('Underweight');
    } else if (BmiResult >= 18.5 && BmiResult < 25) {
      setBmiResult('Normal weight');
    } else if (BmiResult >= 25 && BmiResult < 30) {
      setBmiResult('Overweight');
    } else if (BmiResult >= 30) {
      setBmiResult('Obese');
    } else {
      // alert('Incorrect Input!');
      setBmiResult('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Height</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Height (Cm)"
        autoCapitalize="none"
        onChangeText={text => setHeight(text)}
      />
      <Text style={styles.label}>Weight</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Weight (Kg)"
        autoCapitalize="none"
        onChangeText={text => setWeight(text)}
      />

      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => BMI(isheight, isweight)}>
        <Text style={styles.NextButtonText}> Calculate </Text>
      </TouchableOpacity>

      <Text style={styles.output}>{BmiResult}</Text>

      <Text style={styles.resultText}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#E26F1E',
    borderBottomWidth: 2,
    fontSize: 18,
    width: '50%',
    maxWidth: '50%',
    marginHorizontal: 5,
  },
  NextButton: {
    backgroundColor: '#E26F1E',
    width: 300,
    height: 38,
    marginTop: 40,
    padding: 6,
    borderRadius: 5,
  },
  NextButtonText: {
    color: 'white',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },

  output: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 15,
  },

  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    color: '#E26F1E',
  },
  label: {
    textAlign: 'left',
    marginTop: 15,
    fontSize: 20,
    marginRight: 250,
  },
});
export default App;

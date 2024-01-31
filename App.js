import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, View, Button } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  let total = '';
  let math = '';
  const [data, setData] = useState([{n1: input, n2: input2, result: total, math: math, equals: ''}]);

  const plus = () => {
    setResult(Number(input) + Number(input2));
    total = Number(input) + Number(input2);
    math = ' + ';
    setData([...data, {n1:input, n2:input2, result:total, math: math, equals: ' = ' , key: result}]);
    setInput('');
    setInput2('');
  }

  const minus = () => {
    setResult(Number(input) - Number(input2));
    total = Number(input) - Number(input2);
    math = ' - ';
    setData([...data, {n1:input, n2:input2, result:total, math: math, equals: ' = ' , key: result}]);
    setInput('');
    setInput2('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result} </Text>
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input => setInput(input)}
      value={input}
      />
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input2 => setInput2(input2)}
      value={input2}
      />
      <View style={styles.buttons}>
        <Button onPress={plus} title= '+'/>
        <Button onPress={minus} title= '-'/>
      </View>
      <View>
        <Text style={styles.text}>History:</Text>
        <FlatList 
          data={data}
          renderItem={({item}) => 
          <Text style={styles.text}>{item.n1 + item.math + item.n2 + item.equals + item.result}</Text>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 14,
  },
  result: {
    fontSize: 16,
    margin: 2
  }
});



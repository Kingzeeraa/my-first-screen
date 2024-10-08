import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  let [newTask, setNewTask] = React.useState('');

  return (
    <View style={styles.container}>

     {/*
     <Text style={styles.title}>Style Custom</Text>

      <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp}/>
      <StatusBar style="auto" />

      <Text>Data de Nascimento</Text>
      <TextInput placeholder='Data Nascimento' style={styles.textinp}/>
      <StatusBar style="auto" />

      <Text>E-mail</Text>
      <TextInput placeholder='E-mail' style={styles.textinp}/>
      <StatusBar style="auto" />

      <Text>Senha</Text>
      <TextInput placeholder='Senha' style={styles.textinp}/>
      */}

      <Text>Trabalhando com Hook useState</Text>
      <TextInput onChangeText={setNewTask} placeholder='Tarefa' style={styles.textinp}/>
      <Text>Elemento Digitado</Text>
      <Text>{newTask}</Text>

      {/*
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>add Tarefas</Text>
      </TouchableOpacity>
      */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6500',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    fontSize: 20,
  },

  textinp: {
    backgroundColor: '#Ffffff',
    width: 300,
    height: 40,
    borderRadius: 7,
    fontSize: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 35,
  },

  button: {
    backgroundColor: '#dcdcdc',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  },

  
  
});

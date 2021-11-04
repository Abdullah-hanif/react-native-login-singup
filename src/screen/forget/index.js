import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Pressable, Text, View } from 'react-native';
import Question from '../question';

export default function Forget({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Password</Text>
      <Text style={styles.text}>Please enter your email to receive a link to create a new password via email</Text>
      <TextInput autoComplete='password-new' placeholder="New Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Reset')} >
        <Text style={styles.buttontext}   >Next</Text>
      </Pressable>
      <Question />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 10,
    marginBottom: 10,
    paddingHorizontal:50,
    paddingVertical:50,
  },
  input: {
    marginBottom: 20,
    height: 50,
    width: 250,
    margin: 12,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 250
  },
  button: {
    backgroundColor: "#1ac57c",
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 25,
    marginTop: 20,
    marginBottom : 100,
  },
  buttontext: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'monospace'
  },
  green: {
    fontWeight: "bold",
    color: "green"
  }
});

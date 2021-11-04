import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Question() {
  return (
    <div>
      <View style={styles.container}>
        <Text style={styles.heading}>Quiz App</Text>
        <Text style={styles.text}>
            Q no : 1 What does CSS stand for?
        </Text>
      </View>
    </div>
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
    }
})






export default Question;

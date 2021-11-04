import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Four Item",
  },
  {
    id: "5",
    title: "five Item",
  },
  {
    id: "6",
    title: "six Item",
  },
  {
    id: "7",
    title: "seven Item",
  },
  {
    id: "8",
    title: "eigth Item",
  },
  {
    id: "9",
    title: "Nine Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image
      style={styles.tinyLogo}
      fadeDuration={300}
      source={{
        uri: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      }}
    />
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 150,
    height: 250,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;

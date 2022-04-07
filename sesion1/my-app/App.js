import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [text, setText] =React.useState("");
  return (
    <View style={styles.container}>
      {/*<ImageBackground source={image} style={styles.image}>*/}
        <TextInput style={styles.input} placeholder="Enter your name" Text={text} onChangeText={setText}/>
        <Text>{text}</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <Button
          style={styles.button}
          title="Press me"
          onPress={() => alert(text)}
        ></Button>
      {/*</ImageBackground>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  button: {
    fontSize: 20,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  input: {
    borderColor: "blue",
    borderWidth: 1,
    width: 200,
    height: 40,
    margin: 10,
  },
  image: {
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
  },
});

  /*
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque convallis rhoncus. Sed posuere aliquam dui, non venenatis
          lacus maximus eget. Morbi congue, nisl et commodo ullamcorper, mi enim
          suscipit dui, ut pulvinar risus enim et nisl. Quisque non libero
          congue, viverra mauris a, venenatis risus. Ut ullamcorper pellentesque
          lacinia. Nulla pellentesque ullamcorper eros, vitae ullamcorper augue
          consectetur vel. Vivamus venenatis erat feugiat ligula sollicitudin, a
          ornare leo scelerisque.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView:{
    backgroundColor:"blue",
    marginHorizontal:20
  },
  text:{
    fontSize:10
  }
});
*/
/*export default function App() {
  
*/

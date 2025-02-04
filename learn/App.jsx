import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
    const [isOn, setIsOn] = useState(false);
    const theme = useColorScheme();
    const isDarkMode = theme === "dark";
    const bgColor = isDarkMode ? "black" : "white";
    const txtColor = isDarkMode ? "white" : "black";
    console.log(theme, "theme");
    // const style = {
    //     container: {
    //         width: "100%", height: "100%", backgroundColor: "yellow",

    //     }
    // }
  return (
    <SafeAreaView style={[styles.appContainer, {backgroundColor: bgColor}]}>
      <Text style={[styles.txt, {color: txtColor}]}>App</Text>
      {/* <Button title='Click' onPress={() => setIsOn(!isOn)}></Button> */}
      <Pressable 
        style={styles.imgBtn}
        onPress={() => {
            setIsOn(!isOn);
            !isOn && Alert.alert("Button Pressed");
        }}>
        <Text style={[styles.btnTxt, {color: txtColor}]}>
            Click Here
        </Text>
      </Pressable>
      {
        isOn && <Image style={styles.img} source={{uri: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"}}/>
      }
      {/* {isOn ? <Text>Clicked</Text> : <Text></Text>} */}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        width: "100%", height: "100%", 
        // backgroundColor: `${isDarkMode ? "black" : "white"}`,
    },
    imgBtn: {
        padding: 10, margin: 10, backgroundColor: "#666",
        justifyContent: "center", alignItems: "center", borderRadius: 100
    },
    txt: {
        fontSize: 30, fontWeight: '800',
    },
    btnTxt: {
        fontSize: 25, fontWeight: '800'
    },
    img: {
        width: 500, height: 300,
    }
})
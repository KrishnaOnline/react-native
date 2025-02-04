import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
    const [on, isOn] = useState(false);
  return (
    <View>
      <Text>App</Text>
      {/* <Button title='Click'></Button> */}
      <TouchableOpacity onPress={() => isOn(!on)}>
        <Text>
            Click Here
        </Text>
      </TouchableOpacity>
      {
        on && <Image style={{width: 500, height: 300}} source={{uri: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"}}/>
      }
      {/* {on ? <Text>Clicked</Text> : <Text></Text>} */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
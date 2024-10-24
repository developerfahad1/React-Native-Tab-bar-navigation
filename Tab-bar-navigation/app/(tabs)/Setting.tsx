import { View, Text } from 'react-native'
import React from 'react'

const setting = () => {
  return (
    <View style={{
        backgroundColor : 'red',
        justifyContent : "center",
        flex : 1,
        alignItems : 'center'
    }}>
      <Text style={{
        fontSize : 30
      }}>Setting</Text>
    </View>
  )
}

export default setting
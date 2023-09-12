import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import MyText from './MyText'

export default function PlainButton({title, onPress}) {
  return (
    <TouchableOpacity
        onPress={onPress}
          style={{
            padding: 50,
            backgroundColor: '#303854',
            margin: 10,
            borderRadius: 10,
          }}>
          <MyText
            fontColor="white"
            fontWeight={700}
            content={title}
          />
        </TouchableOpacity>
  )
}
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Detail = () => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity>
                  <Feather name='chevron-left' color="#FFF" size={25} />
              </TouchableOpacity>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})
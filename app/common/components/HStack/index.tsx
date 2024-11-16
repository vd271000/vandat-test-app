import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface HStackProps {
  children: React.ReactNode
  containerStyle?: StyleProp<ViewStyle>
}

const HStack: React.FC<HStackProps> = ({ children, containerStyle }) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
export default HStack

import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ContainerProps {
  children: React.ReactNode
  containerStyle?: StyleProp<ViewStyle>
}

const Container: React.FC<ContainerProps> = ({ children, containerStyle }) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[{ marginTop: insets.top, marginBottom: insets.bottom }, containerStyle]}>
      {children}
    </View>
  )
}

export default Container

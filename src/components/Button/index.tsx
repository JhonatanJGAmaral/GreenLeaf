import React from 'react'
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'

type Props = RectButtonProps & {
  title?: string
  color?: string
  secondaryColor?: string
  avoidStyle?: boolean,
  fontColor?: any,
  borderRadius?: number,
  width?: any
}

export function Button({
  title,
  fontColor,
  borderRadius = 28,
  secondaryColor,
  color,
  width,
  avoidStyle = false,
  ...rest
}: Props) {
  const { secondary85 } = theme.colors
  const pickColor = color ? color : secondary85
  const color1 = color ? color : pickColor
  const color2 = secondaryColor ? secondaryColor : pickColor
  const auxAvoidStyle = avoidStyle ? null : styles.container

  return (
    <LinearGradient
      style={[styles.container, {borderRadius: (borderRadius||borderRadius==0)?borderRadius:28}, {width: width?width: "100%"}]}
      colors={[color1, color2]}
      start={{ x: 0.06, y: 0.4 }}
      end={{ x: 1, y: 0 }}
    >
      <RectButton style={[auxAvoidStyle, {borderRadius: (borderRadius||borderRadius==0)?borderRadius:28}]} {...rest} >
        <Text style={[styles.title, {color:fontColor?fontColor: "#fff"}]}>{title}</Text>
      </RectButton>
    </LinearGradient>
  )
}

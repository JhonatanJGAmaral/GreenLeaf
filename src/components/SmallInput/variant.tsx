import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

type Props = TextInputProps & {
  width?: number
  height?: number
  paddingTop?: number
  isPassword?: boolean
}

export function SmallStringInput({
  width,
  height,
  paddingTop = 0,
  isPassword=false,
  ...rest
}: Props) {
  return (
    <TextInput
    secureTextEntry={isPassword}
      style={[
        styles.container,
        {
          width: width ? width : 300,
          height: height ? height : 48,
          paddingTop: paddingTop
        }
      ]}
      keyboardType="default"
      {...rest}
    />
  )
}

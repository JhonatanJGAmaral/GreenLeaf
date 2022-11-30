import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'

type Props = TextInputProps & {
  width?: number
  height?: number
}

export function SmallInput({ width, height, ...rest }: Props) {
  return (
    <TextInput
      style={[
        styles.container,
        { width: width ? width : 300, height: height ? height : 48 }
      ]}
      keyboardType="numeric"
      {...rest}
    />
  )
}

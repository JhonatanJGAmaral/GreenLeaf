import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  width?: number | string
  height?: number
}

export function EmptyDivider({ width = '100%', height = 30 }: Props) {
  return (
    <View
      style={[
        styles.container,
        { height: height , width: width }
      ]}
    />
  )
}

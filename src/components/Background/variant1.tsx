import React, { ReactNode } from 'react' //"ReactNode" = anything like a React children
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = {
  children: ReactNode
}

export function BackgroundWithGradient({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}

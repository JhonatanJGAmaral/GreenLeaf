import React, { ReactNode } from 'react'
import { theme } from '../../global/styles/theme'

type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors
  return (
    <>{children}</>
  )
}

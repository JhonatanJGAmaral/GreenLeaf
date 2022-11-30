import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, Image, View } from 'react-native'
import { theme } from '../../global/styles/theme';
import DiscordImg from '../../assets/discord.png'
import HomeIcon from '../../assets/home_icon.png'
import PersonalIcon from '../../assets/personal_icon.png'
import { styles } from './styles'

type Props = RectButtonProps & {
  title?: string,
  iconOp: number,
  backgroundColor: any
}

export function ButtonIcon({ title, iconOp = 1, backgroundColor = "#FFF00", ...rest }: Props) {
  return (
    <RectButton style={[styles.container, {backgroundColor: backgroundColor?backgroundColor:theme.colors.primary}]} {...rest}>
      <View>
        <Image source={
          iconOp == 1? DiscordImg: (iconOp == 2? HomeIcon: (iconOp == 3?PersonalIcon:null))} style={styles.icon} />
      </View>
      <Text style={title?styles.title:null}>{title?title:null}</Text>
    </RectButton>
  )
}

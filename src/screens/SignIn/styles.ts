import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    alignItems: 'center'
  },
  image: {
    width: 530 * 0.6,
    height: 471 * 0.6,
    marginTop: '10%',
    marginBottom: '10%'
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  subtitle: {
    color: theme.colors.label,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64
  },
  text: {
    color: theme.colors.label,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64
  },
  divider: {
    padding: 3,
    height: 30,
    marginRight: 4,
    marginBottom: 10,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight
  },
  link: {
    color: theme.colors.link
  },
  icon: {
    width: 30,
    height: 30
  }
})

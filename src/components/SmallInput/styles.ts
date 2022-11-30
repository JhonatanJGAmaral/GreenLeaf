import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    color: theme.colors.input,
    borderRadius: 0.1,
    borderColor: theme.colors.field,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'left',
    paddingLeft: 10,
    borderWidth: 3
  }
})

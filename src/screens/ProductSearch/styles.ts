import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
    alignItems: 'center'
    // backgroundColor: theme.colors.background2
  },
  container_parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav_bar: {
    backgroundColor: 'green'
  },
  // header: {
  //   marginBottom: "10%",
  // },
  field_container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: theme.colors.background2
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
  hint: {
    fontSize: 24,
    position: 'relative',
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%'
  },
  text: {
    color: theme.colors.label,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64
  },
  subtitle: {
    color: theme.colors.subtitle,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: 30
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
    color: theme.colors.link,
  },
  icon: {
    width: 30,
    height: 30
  },
  home_btns: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 530 * 0.8,
    marginBottom: 0
  }
})

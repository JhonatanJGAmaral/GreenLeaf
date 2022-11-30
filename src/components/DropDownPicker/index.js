import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { SafeAreaView } from 'react-navigation'
import { theme } from '../../global/styles/theme'

const Touchable = (
  text = 'Select an option',
  onPressProp,
  width,
  selected,
  objectValue
) => {
  const TouchableComponent = () => {
    return (
      <TouchableOpacity
        onPress={onPressProp}
        style={[styles.container, { width: width ? width : 300 }]}
      >
        <Text style={styles.text}>
          {selected === null ? text : selected?.[objectValue]}
        </Text>
        <Icon name="chevron-right" color="#555" size={26} />
      </TouchableOpacity>
    )
  }

  return { TouchableComponent }
}

const Option = (item, value, objectKey, selected, onPressParm) => {
  const OptionComponent = () => {
    return (
      <TouchableOpacity style={styles.optionContainer} onPress={onPressParm}>
        <Text
          style={[
            styles.optionText,
            {
              fontWeight:
                selected?.[objectKey] === item?.[objectKey] ? 'bold' : 'normal',
              color:
                selected?.[objectKey] === item?.[objectKey] ? '#09B44D' : '#000'
            }
          ]}
        >
          {item?.[value]}
        </Text>
        {selected?.[objectKey] === item?.[objectKey] ? (
          <Icon name="check" color="#09B44D" size={26} />
        ) : null}
      </TouchableOpacity>
    )
  }
  return { OptionComponent }
}

const DropDownPicker = ({
  touchableComponent = Touchable,
  optionComponenet = Option,
  touchableText = 'Select an option',
  title = '',
  data = [],
  objectKey = 'id',
  objectValue = 'name',
  width = 300,
  onSelectItem
}) => {
  const [selected, setSelected] = useState(null)
  const [visible, setVisible] = useState(false)
  const { TouchableComponent } = touchableComponent(
    touchableText,
    () => setVisible(true),
    width,
    selected,
    objectValue
  )

  function renderOption(item) {
    const { OptionComponent } = optionComponenet(
      item,
      objectValue,
      objectKey,
      selected,
      () => toggleSelect(item)
    )
    return <OptionComponent />
  }

  function toggleSelect(item) {
    if (item?.[objectKey] === selected?.[objectKey]) {
      setSelected(null)
    } else {
      onSelectItem(item)
      setSelected(item)
      setVisible(false)
    }
  }

  return (
    <>
      <TouchableComponent />
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Icon name="close" size={26} color={'#212121'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: theme.fonts.text400,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: theme.colors.field,
    borderWidth: 3
  },
  text: {
    color: '#9D9D9D90'
  },
  header: {
    paddingTop: getStatusBarHeight(),
    borderBottomColor: '#EEE',
    borderBottomWidth: 3,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingBottom: 12,
    paddingHorizontal: 12
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    marginLeft: -38,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: theme.fonts.text400,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: theme.colors.field,
    borderBottomWidth: 0.5
  },
  optionText: {
    fontSize: 16
  }
})

export default DropDownPicker

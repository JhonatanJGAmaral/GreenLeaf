import React from 'react'
import { EmptyDivider } from '../../components/EmptyDivider/index'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { styles } from './styles'
import  SearchBarField from '../../components/SearchBarField'

export function ProductSearch() {
  const navigation = useNavigation()

  function handleUserOptions() {
    navigation.navigate('UserOptions')
  }

  function handleProductSearch() {
    navigation.navigate('ProductSearch')
  }

  return (
    <Background>
      <View style={styles.container}>
        <EmptyDivider />
        <SearchBarField/>  
        <EmptyDivider height={20} />
        <View style={{ flex: 1, alignItems: 'center' }}>
        </View>
      </View>
      <View style={styles.home_btns}>
        <ButtonIcon  
          iconOp={2}  
          backgroundColor={"#FFF"} 
          onPress={handleProductSearch} 
        />
        <ButtonIcon  
          iconOp={3}  
          backgroundColor={"#FFF"} 
          onPress={handleUserOptions} 
        />
      </View>
    </Background>
  )
}
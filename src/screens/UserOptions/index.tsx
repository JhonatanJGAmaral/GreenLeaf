import React, { useState, useEffect } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { EmptyDivider } from '../../components/EmptyDivider/index'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'
import headerImg from '../../assets/user_op.png'

export function UserOptions() {
  const navigation = useNavigation()

  function handleUserOptions() {
    navigation.navigate('UserOptions')
  }

  function handleProductSearch() {
    navigation.navigate('ProductSearch')
  }

  function handleProductRegistration() {
    navigation.navigate('ProductRegistration')
  }

  function handleSignIn() {
    navigation.navigate('SignIn')
  }

  return (
    <Background>

        <Image 
          source={headerImg} 
          style={styles.headerImg} 
        />
        <View style={styles.container}>
          <EmptyDivider />
          <EmptyDivider height={20} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button 
              title="Meu Cadastro" 
              width="150%" 
              color="#FFF" 
              fontColor="#000" 
              borderRadius={0} 
              onPress={()=>{}} 
            />
            <Button 
              title="Anunciar Produto" 
              width="150%" 
              color="#FFF" 
              fontColor="#000" 
              borderRadius={0} 
              onPress={handleProductRegistration} 
            />
            <Button 
              title="Meus Anúncios" 
              width="150%" 
              color="#FFF" 
              fontColor="#000" 
              borderRadius={0} 
              onPress={()=>{}} 
            />
            <Button 
              title="Sair" 
              width="150%" 
              color="#FFF" 
              fontColor="#000" 
              borderRadius={0}
              onPress={handleSignIn} 
            />
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
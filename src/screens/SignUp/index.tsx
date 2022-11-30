import React, { useState } from 'react'
import { View, Text, Image, StatusBar, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { SmallStringInput } from '../../components/SmallInput/variant'
import { EmptyDivider } from '../../components/EmptyDivider/index'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components/Button'
import { styles } from './styles'
import LogoImage from '../../../assets/green_logo.png'
import UserModel from '../../data/models/UserModel' 


export function SignUp() {
  const navigation = useNavigation()

  const [entity, setEntity] = useState(new UserModel());


  function handleSignIn() {
    navigation.navigate('SignIn')
  }
  function handleContinueSignUp() {
    navigation.navigate('ContinueSignUp', entity)
  }

  const onChangeHandler = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: string) =>{
    setEntity({...entity, [field]: e.nativeEvent.text})
  }
  return (
    <Background>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Image source={LogoImage} style={styles.image} resizeMode="stretch" />
        <Text style={styles.subtitle}>Bem-vindo!</Text>
        <Text style={styles.hint}>
          Complete as informações abaixo para se cadastrar!
        </Text>
        <EmptyDivider />

        <View style={styles.content}>
          <EmptyDivider />
          <SmallStringInput 
            maxLength={60} 
            placeholder="Nome Completo" 
            onChange={e => onChangeHandler(e, 'name')}
          />
          <EmptyDivider height={20} />
          <SmallStringInput 
            maxLength={60} 
            placeholder="E-mail" 
            onChange={e => onChangeHandler(e, 'email')}
          />
          <EmptyDivider height={20} />
          <SmallStringInput 
            isPassword={true} 
            maxLength={60} 
            placeholder="Senha" 
            onChange={e => onChangeHandler(e, 'password')}
          />
          <EmptyDivider height={20} />
          <SmallStringInput 
            isPassword={true} 
            maxLength={60} 
            placeholder="Confirmar senha" 
            onChange={e => onChangeHandler(e, 'password')}
          />
          <EmptyDivider height={20} />
          <Button
            title="Continuar Cadastro"
            color="#09B44D"
            onPress={handleContinueSignUp}
          />
          <EmptyDivider height={20} />
          {/* Link para cadastro */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>
              Já possui cadastro?{' '}
              <Text style={styles.link} onPress={handleSignIn}> Login </Text>
            </Text>
          </View>
        </View>
      </View>
    </Background>
  )
}

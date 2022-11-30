import React, { useState } from 'react'
import {
  View,
  Text,
  StatusBar,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native'
import { EmptyDivider } from '../../components/EmptyDivider/index'
import { SmallStringInput } from '../../components/SmallInput/variant'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SmallInput } from '../../components/SmallInput/index'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { styles } from './styles'
import UserService from '../../data/services/UserService'
import UserModel from '../../data/models/UserModel'

const service = new UserService()

export function ContinueSignUp() {
  const navigation = useNavigation()
  const router = useRoute()
  console.log('router: ', router)
  const [entity, setEntity] = useState(router.params as UserModel);
  
  function handleSignIn() {
    navigation.navigate('SignIn')
  }

  function handleContinueSignUp() {
    service.saveUser(entity).then(() => navigation.navigate('SignIn'))
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
        <EmptyDivider />
        <Text style={styles.subtitle}>Quase lá...</Text>
        <Text style={styles.hint}>
          Complete as informações de endereço e contato
        </Text>
        <EmptyDivider />

        <View style={styles.content}>
          <EmptyDivider />
          <SmallInput 
            maxLength={60} 
            placeholder="Telefone" 
            onChange={e => onChangeHandler(e, 'phonenumber')} 
          />
          <EmptyDivider height={20} />
          <SmallInput 
            maxLength={60} 
            placeholder="Celular" 
            onChange={e => onChangeHandler(e, 'mobilenumber')}
          />
          <EmptyDivider height={20} />
          <SmallStringInput 
            width={305} 
            maxLength={60} 
            placeholder="Endereço" 
            onChange={e => onChangeHandler(e, 'address')}
          />
          <EmptyDivider height={20} />
          <View style={styles.field_container}>
            <SmallInput 
              width={100} 
              maxLength={8} 
              placeholder="Nº" 
              onChange={e => onChangeHandler(e, 'addressnumber')}
            />
            <EmptyDivider width={15} height={2}/>
            <SmallStringInput 
              width={185} 
              maxLength={60} 
              placeholder="Bairro" 
              onChange={e => onChangeHandler(e, 'neighborhood')}
            />
          </View>
          <EmptyDivider height={20} />
          <View style={styles.field_container}>
            <SmallStringInput 
              width={185} 
              maxLength={8} 
              placeholder="Cidade" 
              onChange={e => onChangeHandler(e, 'city')}
            />
            <EmptyDivider width={15} height={2} />
            <SmallStringInput 
              width={100} 
              maxLength={60} 
              placeholder="UF" 
              onChange={e => onChangeHandler(e, 'uf')}
            />
          </View>
          <EmptyDivider height={20} />
          <SmallInput 
            maxLength={60} 
            placeholder="CEP" 
            onChange={e => onChangeHandler(e, 'cep')}
          />
          <EmptyDivider height={20} />
          <Button
            title="Finalizar Cadastro"
            color="#09B44D"
            onPress={handleContinueSignUp}
          />

          <EmptyDivider height={20} />
          
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.link} onPress={handleSignIn}>
              Cancelar
            </Text>
          </View>
        </View>
      </View>
    </Background>
  )
}

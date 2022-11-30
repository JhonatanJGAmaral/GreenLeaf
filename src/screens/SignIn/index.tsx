import React, { useEffect, useState } from 'react'
import { View, Text, Image, StatusBar,NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { SmallStringInput } from '../../components/SmallInput/variant'
import { EmptyDivider } from '../../components/EmptyDivider/index'
import { useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { styles } from './styles'
import IllustrationImg from '../../assets/greenleaf_logo2.png'
import UserService from '../../data/services/UserService'
import UserModel from '../../data/models/UserModel'


const service = new UserService();

export function SignIn() {

  const navigation = useNavigation()
  const [entity, setEntity] = useState(new UserModel());

  function handleSignUp() {
    navigation.navigate('SignUp')
  }

  function handleSignIn() {
    service.login(entity).then((e) => e?navigation.navigate('ProductSearch'): alert("Usuário não cadastrado!"))
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
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <EmptyDivider />
          <Text style={styles.label}>Email ID</Text>
          <SmallStringInput
            maxLength={60}
            style={{
              width: 290,
              height: 40,
              borderBottomWidth: 4,
              borderBottomColor: '#09B44D',
              marginBottom: 10
            }}
            onChange={e => onChangeHandler(e, 'email')}
            />
          <EmptyDivider />
          <Text style={styles.label}>Senha</Text>
          <SmallStringInput
            maxLength={20}
            textContentType={'password'}
            style={{
              width: 290,
              height: 40,
              borderBottomWidth: 4,
              borderBottomColor: '#09B44D',
              marginBottom: 10
            }}
            isPassword={true}
            onChange={e => onChangeHandler(e, 'password')}
          />
          <EmptyDivider />
          <EmptyDivider />
          <Button title="Log in" color="#09B44D" onPress={handleSignIn} />
          <EmptyDivider />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>
              Novo por aqui?{' '}
              <Text style={styles.link} onPress={handleSignUp}>
                Cadastre-se
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Background>
  )
}

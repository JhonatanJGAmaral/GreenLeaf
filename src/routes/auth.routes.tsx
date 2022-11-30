import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ContinueSignUp } from '../screens/ContinueSignUp'
import { ProductRegistration } from '../screens/ProductRegistration'
import { ProductSearch } from '../screens/ProductSearch'
import { UserOptions } from '../screens/UserOptions'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {

  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
        options={({}) => ({
          headerShown: false,
          duration: 3000
        })}
      />

      <Screen
        name="SignUp"
        component={SignUp}
        options={({}) => ({
          headerShown: false,
          duration: 3000
        })}
      />

      <Screen
        name="ContinueSignUp"
        component={ContinueSignUp}
        options={({}) => ({
          headerShown: false,
          duration: 3000
        })}
      />

      <Screen
        name="ProductRegistration"
        component={ProductRegistration}
        options={({}) => ({
          headerShown: false,
          duration: 3000
        })}
      />

      <Screen
        name="ProductSearch"
        component={ProductSearch}
        options={({}) => ({
          headerShown: false,
          duration: 3000
        })}
      />

      <Screen
        name="UserOptions"
        component={UserOptions}
        options={({}) => ({
          headerShown: false,
          duration: 3000
        })}
      />
    </Navigator>
  )
}

import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import { EmptyDivider } from '../../components/EmptyDivider/index'
import { SmallStringInput } from '../../components/SmallInput/variant'
import { SmallInput } from '../../components/SmallInput/index'
import DropDownPicker from '../../components/DropDownPicker'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import ProductModel from '../../data/models/ProductModel'
import ProductCategoryModel from '../../data/models/ProductCategoryModel'
import MassUnitModel from '../../data/models/MassUnitModel'
import ProductService from '../../data/services/ProductService'

const service = new ProductService()

export function ProductRegistration() {
  const navigation = useNavigation()
  const [entity, setEntity] = useState(new ProductModel());
  const [categories, setCategories] = useState<ProductCategoryModel[]>([]);
  const [units, setUnits] = useState<MassUnitModel[]>([]);

  useEffect(() => {
    void loadCategories()
    void loadUnits()
  }, [])
  
  const onSave = async () =>{
    service.saveProduct(entity).then(() => navigation.navigate('ProductSearch'))
  }

  const loadCategories = async () => {
    service.getCategories().then(categories => setCategories(categories))    
  }
  
  const loadUnits = async () => {
    service.getUnits().then(units => setUnits(units))
  }
  
  function handleUserOptions() {
    navigation.navigate('UserOptions')
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
        <Text style={styles.subtitle}>Cadastrar {'\n'} Produto</Text>
        <EmptyDivider />
        <View style={styles.content}>
          <EmptyDivider />
          <SmallStringInput 
            maxLength={60} 
            placeholder="Nome do Produto" 
            onChange={e => onChangeHandler(e, 'name')}
          />
          <EmptyDivider height={20} />
          <SmallStringInput
            height={82}
            maxLength={180}
            placeholder="Descrição"
            multiline={true}
            paddingTop={10}
            onChange={e => onChangeHandler(e, 'description')}
          />

          <EmptyDivider height={20} />
          <DropDownPicker
            touchableText="Categoria"
            title="Categoria"
            objectKey="id"
            objectValue="description"
            data={categories}
            onSelectItem={(category: any) => setEntity({...entity, idCategory: category.id})}
          />
          <EmptyDivider height={20} />
          <View style={styles.field_container}>
            <SmallInput 
              width={130} 
              maxLength={8} 
              placeholder="Valor" 
              onChange={e => onChangeHandler(e, 'price')}
            />
            <EmptyDivider width={5} height={2} />
            <Text style={styles.label} onPress={handleUserOptions}>
              Por:{'  '}
            </Text>
            <DropDownPicker
              touchableText="Unid. Medida"
              title="Mass Unit"
              objectKey="id"
              objectValue="displayText"
              data={units}
              width={125}
              onSelectItem={(unit: any) => setEntity({...entity, idUnit: unit.id})}
            />
          </View>
          
          <EmptyDivider height={20} />
          <View style={styles.field_container}>
            <Text style={styles.label}>
              Quantidade disponível:{''}
            </Text>
            <EmptyDivider width={5} height={2} />
            <SmallInput 
              width={125} 
              maxLength={8} 
              placeholder="Qtde" 
              onChange={e => onChangeHandler(e, 'stock')}
            />
          </View>

          <EmptyDivider height={20} />
          
          <Button  
            title="Finalizar Cadastro" 
            color="#09B44D" 
            onPress={onSave} 
          />
          <EmptyDivider height={20} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.link} onPress={handleUserOptions}>
              Cancelar
            </Text>
          </View>
        </View>
      </View>
    </Background>
  )
}


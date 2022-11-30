// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image ,
  FlatList,
  SafeAreaView,
} from "react-native";
import productImages from "../../utils/productImages";
import { theme } from '../../global/styles/theme'

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, id, price }) => (

  <View style={styles.item}>
    <View style={styles.left_alignment}>
      <Image
      source={productImages.find(p => p.name?.toUpperCase().includes(name?.toUpperCase()))?.url ?? ""}
      style={styles.image}
      resizeMode="stretch"
      />
    <View style={styles.text}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details.length>=16?details.substr(0, 15)+ '\n' + details.substr(16, 20) : details.substr(0, 30)}</Text>          
    </View>
      
    </View>
    <Text style={styles.price}>{'R$ ' + price + ',00'}</Text>
  </View>
);

const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.description} price={item.price}/>;
    }

    if (item?.name?.toUpperCase().includes(searchPhrase?.toUpperCase().trim().replace(/\s/g, "") //interrogação para conferir se está com valor (chamado de coalisense -> se tiver valor, aplica a função/método, senão, ignora (sem a string default, é só um Safe Call operator/optional ))
    )) {
      return <Item name={item.name} details={item.description} id={item.id} price={item.price}/>;
    }
    if (item?.details?.toUpperCase().includes(searchPhrase?.toUpperCase().trim().replace(/\s/g, "")
      )) {
      return <Item name={item.name} details={item.description} id={item.id} price={item.price}/>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
    >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    marginTop: 30,
    height: "85%",
    width: 530 * 0.6,
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  left_alignment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
  image: {
    width: 100 * 0.6,
    height: 90 * 0.6,
    marginTop: '10%',
    marginBottom: '10%',
  },
  text: {
    marginLeft: 10
  },
  price: {
    fontWeight: 'bold',
    color: theme.colors.on
  }
});
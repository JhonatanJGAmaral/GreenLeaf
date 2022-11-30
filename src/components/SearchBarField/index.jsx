import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import List from "../List";
import SearchBar from "../SearchBar";
import { EmptyDivider } from '../../components/EmptyDivider/index'
import ProductService from '../../data/services/ProductService'
import IllustrationImg from '../../assets/product_search.png'


const service = new ProductService()

const SearchBarField = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [productData, setProductData] = useState();

  useEffect(() => {
    const getData = async () => {
      service.getProducts().then(res => setProductData(res)) 
    };
    getData();
  }, []);

  return (
    // Fix this fragment
    <> 
      <Image
        style={styles.image}
        source={IllustrationImg}
        resizeMode="stretch"
      />
      <SafeAreaView style={styles.root}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase} 
          clicked={clicked}
          setClicked={setClicked}
        />
            <EmptyDivider height={20}/>

            <List
              searchPhrase={searchPhrase}
              data={productData}
              setClicked={setClicked}
              />
      </SafeAreaView>
    </>
  );
};

export default SearchBarField;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    width: "100%",
    marginTop: 50,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: "10%",
    color: '#FFF',
    marginLeft: 0
  },
  image: {
    width: 530 * 0.8,
    height: 190,
    aspectRatio: 304 / 332,
    marginTop: 0,
    marginLeft: 10,
    marginRight: "auto",
    position: "absolute"
  }
});
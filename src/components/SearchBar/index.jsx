// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { EmptyDivider } from '../../components/EmptyDivider/index'
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {

  return (
    <View>
      <EmptyDivider height={50}/>
      <View style={styles.container}>
        <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
            />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
            />
          {clicked && (
            <Entypo 
              name="cross" 
              size={15} 
              color="black" 
              style={{ padding: 1 }} 
              onPress={() => {
                setSearchPhrase("")
              }}
            />
          )}
        </View>
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
              ></Button>
          </View>
        )}
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 25,
    marginTop: 75,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%", 
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  image: {
    width: 530 * 0.8,
    height: 160,
    aspectRatio: 304 / 332,
    marginTop: 5,
    marginLeft: -60,
    marginRight: "auto",
    position: "absolute"
  }
});
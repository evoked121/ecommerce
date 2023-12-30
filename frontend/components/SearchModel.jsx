import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";

const SearchModel = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products = [],
}) => {
  const navigate = useNavigation();
  const backAction = () => {
    setSearchQuery("");
    setActiveSearch(false);
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  });
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <SafeAreaView>
        <SearchBar
          placeholder="Search..."
          onChangeText={(e) => setSearchQuery(e)}
          value={searchQuery}
          style={{ marginTop: 20 }}
        />
      </SafeAreaView>
      <ScrollView>
        <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
          {products.map((product) => (
            <SearchItem
              key={product._id}
              imgSrc={product.images[0]?.url}
              name={product.name}
              price={product.price}
              handler={() =>
                navigate.navigate("productdetails", { id: product._id })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const SearchItem = ({ price, name, imgSrc, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color2,
          elevation: 5,
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 30,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            resizeMode: "contain",
            top: -15,
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <View style={{ width: "80%", paddingHorizontal: 30 }}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline
            numberOfLines={1}
            style={{
              fontWeight: "900",
            }}
          >
            ${price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchModel;

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultImg, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModel from "../components/SearchModel";
import ProductCard from "../components/ProductCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction.js";
import { useSetCategories } from "../utils/hooks.js";
import Toast from "react-native-toast-message";

const categories = [
  { category: "Nice", _id: "sjdjd" },
  { category: "Football", _id: "sjdjdkk" },
];

const Home = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id, name, price, image, stock) => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: 1,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { products } = useSelector((state) => state.product);

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    dispatch(getAllProducts(searchQuery, category));
  }, [dispatch, searchQuery, category, isFocused]);

  return (
    <>
      {activeSearch && (
        <SearchModel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        {/* header*/}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          {/* search bar*/}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"gray"}
                size={50}
                style={{ backgroundColor: colors.color2 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* rolling buttons*/}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer />
    </>
  );
};

export default Home;

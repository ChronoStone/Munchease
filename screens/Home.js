import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import {
  HorizontalFoodCard,
  IconButton,
  CartQuantityButton,
  Header
} from "../components";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const Home = ({ navigation }) => {
  // price rating

  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: "Rice",
      icon: icons.rice_bowl,
    },
    {
      id: 2,
      name: "Noodles",
      icon: icons.noodle,
    },
    {
      id: 3,
      name: "Hot Dogs",
      icon: icons.hotdog,
    },
    {
      id: 4,
      name: "Salads",
      icon: icons.salad,
    },
    {
      id: 5,
      name: "Burgers",
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: "Pizza",
      icon: icons.pizza,
    },
    {
      id: 7,
      name: "Snacks",
      icon: icons.fries,
    },
    {
      id: 8,
      name: "Sushi",
      icon: icons.sushi,
    },
    {
      id: 9,
      name: "Desserts",
      icon: icons.donut,
    },
    {
      id: 10,
      name: "Drinks",
      icon: icons.drink,
    },
  ];

  const restaurantData = [
    {
      id: 1,
      name: "Hamburger",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.burger,
      description: "Crispy Chicken Burger",
      price: 15.45,
      duration: "30 - 45 min",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: images.burger,
          description: "Burger with crispy chicken",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger ",
          photo: images.vegBiryani,
          description: "Crispy Chicken Burger Mustard Coleslaw",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Crispy Baked French",
          photo: images.burger,
          description: "Crispy Baked French Fries",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "Pizza",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.vegBiryani,
      description: "homemade pizza crust",
      price: 25.95,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Jackson",
      },
      menu: [
        {
          menuId: 4,
          name: "Hawaiian Pizza",
          photo: images.vegBiryani,
          description: "Canadian bacon homemade pizza",
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: "Tomato Basil Pizza",
          photo: images.burger,
          description: "Fresh tomatoes aromatic basil",
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: "Tomato Pasta",
          photo: images.vegBiryani,
          description: "Pasta with fresh tomatoes",
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: "Mediterranean Salad",
          photo: images.vegBiryani,
          description: "Finely lettuce tomatoes cucumbers",
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: "Hotdogs",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.burger,
      description: "Shaved Ice with red beans",
      price: 10.75,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: "James",
      },
      menu: [
        {
          menuId: 8,
          name: "Chicago Hot Dog",
          photo: images.hotTacos,
          description: "Fresh tomatoes all beef hot dogs",
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: "Sushi",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.hotTacos,
      description: "Shaved Ice with red beans",
      price: 15.75,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Ahmad",
      },
      menu: [
        {
          menuId: 9,
          name: "Sushi sets",
          photo: images.hotTacos,
          description: "Fresh salmon fresh juicy avocado",
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: "Cuisine",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.wrapSandwich,
      description: "Vermicelli noodles prawns",
      price: 23.99,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Muthu",
      },
      menu: [
        {
          menuId: 10,
          name: "Kolo Mee",
          photo: images.wrapSandwich,
          description: "Noodles with char siu",
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: "Sarawak Laksa",
          photo: images.wrapSandwich,
          description: "Vermicelli noodles, cooked prawns",
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: "Nasi Lemak",
          photo: images.wrapSandwich,
          description: "A traditional Malay rice dish",
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: "Nasi Briyani ",
          photo: images.wrapSandwich,
          description: "A traditional Indian rice with mutton",
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: "Desserts",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.vegBiryani,
      description: "Shaved Ice with red beans",
      price: 25.5,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.hotTacos,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.vegBiryani,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.vegBiryani,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation);

  function onSelectCategory(category) {
    // filter products by categories
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 44,
          alignItems: "center",
          marginHorizontal: SIZES.padding * 1.5,
          paddingHorizontal: SIZES.radius2,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius2,
          backgroundColor: COLORS.lightGray3,
        }}
      >
        {/*  Search Icon  */}

        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* Text Input */}

        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius2,
            ...FONTS.body3,
          }}
          placeholder=" Search..."
          selectionColor={COLORS.darkgray}
        />
      </View>
    );
  }

  function renderHeader() {
    // return (
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       height: 47,
    //       marginTop: 40,
    //       marginBottom: 20,
    //     }}
    //   >
    //     {/* Top left icon */}
    //     <TouchableOpacity
    //       style={{
    //         width: 50,
    //         paddingLeft: 17,
    //         justifyContent: "center",
    //       }}
    //       onPress={() => navigation.navigate("Login")}
    //     >
    //       <Image
    //         source={icons.logout}
    //         resizeMode="contain"
    //         style={{
    //           width: 38,
    //           height: 35,
    //         }}
    //       />
    //     </TouchableOpacity>

    //     <View
    //       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    //     >
    //       <View
    //         style={{
    //           width: "68%",
    //           height: "100%",
    //           backgroundColor: COLORS.lightGray3,
    //           alignItems: "center",
    //           justifyContent: "center",
    //           borderRadius: SIZES.radius,
    //         }}
    //       >
    //         <Text style={{ ...FONTS.h3 }}>Home</Text>
    //       </View>
    //     </View>

    //     <CartQuantityButton
    //       containerStyle={{
    //         marginRight: 10,
    //       }}
    //       quantity={3}
    //       onPress={() => navigation.navigate("Cart")}
    //     />
    //   </View>
    // );

    return (
      <Header
        title="Home"
        containerStyle={{
          height: 48,
          marginHorizontal: SIZES.padding,
          marginBottom: 20,
        }}
        leftComponent={
          <IconButton
            icon={icons.back2}
            containerStyle={{
              width: 42,
              height: 44,
              marginLeft: 5,
              paddingRight: 2,
              marginTop: 2,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderRadius: 13,
              borderColor: COLORS.darkgray,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.darkgray,
            }}
            onPress={() => navigation.navigate("Welcome")}
          />
        }
        rightComponent={
          <CartQuantityButton 
            quantity={3}
            onPress={() => navigation.navigate("Cart")}
          />
        }
      />
    );
  }

  function renderCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Categories</Text>
        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderProducts() {
    const renderItem = ({ item, index }) => (
      <HorizontalFoodCard
        containerStyle={{
          height: 130,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginBottom: 15,
        }}
        imageStyle={{
          marginTop: 18,
          marginLeft: 5,
          height: 110,
          width: 120,
        }}
        item={item}
        onPress={() =>
          navigation.navigate("Product", {
            item,
            currentLocation,
          })
        }
      />
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  // main page return

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearch()}
      {renderCategories()}
      {renderProducts()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;

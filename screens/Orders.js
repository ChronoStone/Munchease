import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Header, IconButton, CartQuantityButton, Footer } from "../components";

import { icons, images, SIZES, COLORS, dummyData, FONTS } from "../constants";

import { TextInput } from "react-native-gesture-handler";

const Orders = ({ navigation }) => {
  const [ordersHistory, setOrdersHistory] = React.useState(
    dummyData.ordersHistory
  );

  function renderHeader() {
    return (
      <Header
        title="Orders"
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
            onPress={() => navigation.goBack()}
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

  function renderCartList() {
    return (
      <FlatList
        data={ordersHistory}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: 5,
          paddingHorizontal: SIZES.padding * 1.5,
          paddingBottom: 40,
        }}
        renderItem={(data, rowMap) => (
          <TouchableOpacity
            style={{
              height: 80,
              backgroundColor: COLORS.lightGray3,
              ...styles.cartItemContainer,
            }}
          >
            {/*Food image*/}
            <View
              style={{
                width: 90,
                height: 100,
              }}
            >
              <Image
                source={icons.order}
                resizeMode="contain"
                style={{
                  width: "70%",
                  height: "100%",
                }}
              />
            </View>

            {/*Food details*/}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  ...FONTS.h4,
                  marginBottom: 5,
                  color: COLORS.black,
                }}
              >
                {data.item.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.darkgray,
                    fontWeight: "bold",
                  }}
                >
                  {data.item.date}  {data.item.time}
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.darkGray,
                    fontWeight: "bold",
                    position: "absolute",
                    right: 2,
                  }}
                >
                  {data.item.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {renderSearch()}

      {/* Cart List */}
      {renderCartList()}
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius2,
    paddingHorizontal: SIZES.radius2,
    borderRadius: SIZES.radius2,
    elevation: 5,
  },
});

export default Orders;

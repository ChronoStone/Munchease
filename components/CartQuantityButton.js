import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const CartQuantityButton = ({
  containerStyle,
  iconStyle,
  quantity,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 42,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 13,
        backgroundColor: COLORS.lightOrange,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icons.cart}
        style={{
          width: 22,
          height: 22,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          height: 13,
          width: 13,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body5,
            lineHeight: 2,
            fontSize: 10,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartQuantityButton;

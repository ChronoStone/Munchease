import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const HorizontalFoodCard = ({
  navigation,
  containerStyle,
  imageStyle,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: 15,
        backgroundColor: COLORS.lightGray3,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image source={item.photo} style={imageStyle} />

      {/* Info */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

        <Text style={{ color: COLORS.darkgray }}>{item.description}</Text>

        <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
          <Text style={{ marginTop: 3, ...FONTS.h2 }}>${item.price}</Text>

          <TouchableOpacity
            style={{
              position: "absolute",
              right: 13,
              height: 40,
              width: 90,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;

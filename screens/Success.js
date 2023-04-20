import React from "react";
import { View, Text, Image, StyleSheet, BackHandler } from "react-native";

import { TextButton } from "../components";
import { SIZES, FONTS, COLORS, images } from "../constants";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

const Success = ({ navigation }) => {
  let [name, setName] = useState("");

  const htmlPrintCode = `
    
        <html>
            <body>
                <h1>Hello There !</h1>   
            </body>
        </html>
    `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: htmlPrintCode,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.lightGray2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom:320,
          left: 0,
          right: 0,
        }}
      >
        <Image
          source={images.success}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
          }}
        />

        <Text
          style={{
            marginTop: SIZES.padding2 * 1.5,
            ...FONTS.h1,
          }}
        >
          Congratulations !
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          Operation was successfully completed !
        </Text>

      </View>
      <TextButton
          buttonContainerStyle={{
            position: "absolute",
            bottom: 20,
            height: 60,
            width: SIZES.width * 0.85,
            marginTop: SIZES.padding2,
            borderRadius: SIZES.radius2,
            backgroundColor: COLORS.primary,
          }}
          label="Done"
          onPress={generatePdf}
        />
    </View>
  );
};

export default Success;

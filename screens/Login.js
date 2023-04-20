import React from "react";
import { View, Text, Image } from "react-native";

import { TextButton } from "../components";

import { SIZES, FONTS, COLORS, images, icons } from "../constants";

import OTPInputView from "@twotalltotems/react-native-otp-input";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: SIZES.padding * 5,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.lightGray,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-dra g"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding * 1.7,
        }}
      >
        {/*App icon */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={icons.logo_02}
            resizeMode="contain"
            style={{
              height: 100,
              width: 200,
            }}
          />
        </View>

        {/* Title and Subtitle */}

        <View
          style={{
            marginTop: SIZES.padding - 1,
            paddingTop: SIZES.padding - 1,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            PIN Authentication
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkgray,
              marginHorizontal: 20,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            Enter the PIN Authentication code provided by JDI Soft Service
          </Text>
        </View>

        {/* OTP Pin input */}

        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 1.5,
            paddingTop: SIZES.padding * 1.5,
          }}
        >
          <OTPInputView
            secureTextEntry={true}
            autoFocusOnLoad={true}
            pinCount={5}
            style={{
              width: "100%",
              height: 50,
            }}
            codeInputFieldStyle={{
              width: 60,
              height: 60,
              borderRadius: SIZES.radius2,
              backgroundColor: COLORS.lightGray4,
              color: COLORS.black,
              ...FONTS.h3,
            }}
            onCodeFilled={(code) => {
              console.log(code);
            }}
          />
        </View>

        {/* Footer */}

        <View>
          <TextButton
            label="Continue"
            buttonContainerStyle={{
              height: 50,
              alignItems: "center",
              borderRadius: SIZES.radius2,
              backgroundColor: COLORS.primary,
            }}
            onPress={() => navigation.navigate("Welcome")}
          />

          <View
            style={{
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.darkgray,
                ...FONTS.body3,
              }}
            >
              By signing up, you agree to our
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.body3,
              }}
            >
              Terms and Conditions
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#FC6D3F", // orange
  secondary: "#CDCDD2", // gray

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#E0E0E0",
  lightGray4: "#F8F8F9",
  lightGray4: "#EBECF0",
  transparent: "transparent",
  darkgray: "#898C95",
  lightOrange: "#ffc7b3",

  lightOrangePrim: "#FFA133",
  lightOrange2: "#FDDED4",
  lightOrange3: "#FFD9AD",
  green: "#27AE60",
  red: "#FF1717",
  red2: "#FF6C44",
  blue: "#0064C0",
  darkBlue: "#111A2C",
  darkGray: "#525C67",
  darkGray2: "#757D85",
  gray: "#898B9A",
  gray2: "#BBBDC1",
  gray3: "#CFD0D7",

  transparent: "transparent",
  transparentWhite1: "rgba(255, 255, 255, 0.1)",
  transparentBlack1: "rgba(0, 0, 0, 0.1)",
  transparentBlack7: "rgba(0, 0, 0, 0.7)",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  radius2: 12,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 50,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export default { COLORS, SIZES, FONTS };

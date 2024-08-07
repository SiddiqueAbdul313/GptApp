import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors

  primary: "#29a1d9",
  secondary: "#29d9cd",

  blue: "#00D1E0",
  lightBlue: "#0070E0",
  extralightblue: "#7fc4f5",

  red: "#FF4134",
  lightRed: "#990000",

  purple: "#6B3CE9",
  lightpurple: "#F3EFFF",

  yellow: "#FFC664",
  lightyellow: "#FFF9EC",

  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#FCFBFC",
  gray: "#C1C3C5",
  darkgray: "#C3C6C7",

  success: "#00A854",
  danger: "#bb2124",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
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
    fontFamily: "Roboto-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
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
export const darkTheme = {
  COLORS: {
    primary: "#003087",
    secondary: "#1f1f1f",
    text: "#ffffff",
    danger:"#bb2124",
  },
};
export const lightTheme = {
  COLORS: {
    primary: "#ffffff",
    secondary: "#f0f0f0",
    text: "#003087",
    danger:"#bb2124",
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

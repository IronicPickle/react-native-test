import { Platform, TextStyle, ViewStyle } from "react-native";
import { colors } from "./vars";

const common = {
  color: colors.black,
  fontSize: 16,
  borderRadius: Platform.OS === "ios" ? 12 : 8,
  borderWidth: 0,
  paddingHorizontal: Platform.OS === "ios" ? 0 : 8,
  paddingVertical: Platform.OS === "ios" ? 0 : 6,
  minWidth: 150,
  height: Platform.OS === "ios" ? "unset" : 32,
} as ViewStyle;

export const pickers = {
  item: {
    color: colors.black,
    fontSize: 14,
    textAlign: "center",
    height: 96,
  } as TextStyle,
  contained: {
    ...common,
    backgroundColor: colors.smoke,
  } as ViewStyle,
  outlined: {
    ...common,
    borderWidth: 1,
    borderColor: colors.gray,
  } as ViewStyle,
};

export default { pickers };

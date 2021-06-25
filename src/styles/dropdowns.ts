import { Platform, TextStyle } from "react-native";
import { colors } from "./vars";

const common = {
  position: "absolute",
  color: colors.black,
  fontSize: 16,
  borderRadius: 12,
  borderWidth: 0,
  paddingHorizontal: 16,
  paddingVertical: Platform.OS === "android" ? 10 : 12,
  maxHeight: 200,
} as TextStyle;

export const dropdowns = {
  select: {
    contained: {
      ...common,
      backgroundColor: colors.smoke,
    } as TextStyle,
    outlined: {
      ...common,
      borderWidth: 1,
      borderColor: colors.smoke,
      backgroundColor: colors.white,
    } as TextStyle,
  },
  option: {
    margin: 4,
    cursor: "pointer",
  },
};

export default { dropdowns };
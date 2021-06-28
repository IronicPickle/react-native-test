import { Platform, TextStyle, ViewStyle } from "react-native";
import { colors } from "./vars";

const common = {
  position: "absolute",
  color: colors.black,
  fontSize: 16,
  borderRadius: 12,
  borderWidth: 0,
  paddingHorizontal: 16,
  maxHeight: 200,
  zIndex: 10000,
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
    paddingVertical: Platform.OS === "android" ? 10 : 12,
    margin: 4,
    zIndex: 10000,
  } as ViewStyle,
};

export default { dropdowns };

import { Platform, TextStyle } from "react-native";
import { colors } from "./vars";

const common = {
  color: colors.black,
  fontSize: 16,
  borderRadius: 12,
  borderWidth: 0,
  paddingHorizontal: 16,
  paddingVertical: Platform.OS === "android" ? 10 : 12,
  minWidth: 150,
} as TextStyle;

export const inputs = {
  contained: {
    ...common,
    backgroundColor: colors.smoke,
  } as TextStyle,
  outlined: {
    ...common,
    borderWidth: 1,
    borderColor: colors.smoke,
  } as TextStyle,
};

export default { inputs };

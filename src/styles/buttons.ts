import { TextStyle, ViewStyle } from "react-native";
import { colors } from "./vars";

const common = {
  borderRadius: 12,
  borderWidth: 0,
  paddingHorizontal: 16,
  paddingVertical: 12,
} as TextStyle;

export const buttons = {
  text: {
    color: colors.black,
    fontSize: 16,
    textAlign: "center",
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

export default { buttons };

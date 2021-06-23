import { TextStyle, ViewStyle } from "react-native";
import { colors } from "./vars";

export const tabs = {
  base: {
    alignItems: "center",
    flexGrow: 1,
    padding: 16,
    backgroundColor: colors.mist,
  } as ViewStyle,
  baseSelected: {
    backgroundColor: colors.smoke,
  } as ViewStyle,
  text: {
    color: colors.black,
    fontSize: 16,
  } as TextStyle,
  selectedText: {
    fontWeight: "bold",
  } as TextStyle,
};

export default { tabs };

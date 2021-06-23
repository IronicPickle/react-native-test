import { TextStyle } from "react-native";
import { colors } from "./vars";

const common = {
  color: colors.black,
};

export const text = {
  h1: {
    ...common,
    fontSize: 64,
  } as TextStyle,
  h2: {
    ...common,
    fontSize: 48,
  } as TextStyle,
  h3: {
    ...common,
    fontSize: 32,
  } as TextStyle,
  h4: {
    ...common,
    fontSize: 28,
  } as TextStyle,
  h5: {
    ...common,
    fontSize: 24,
  } as TextStyle,
  h6: {
    ...common,
    fontSize: 18,
  } as TextStyle,
  p: {
    ...common,
    fontSize: 16,
  } as TextStyle,
  small: {
    ...common,
    fontSize: 12,
  } as TextStyle,
};

export default { text };

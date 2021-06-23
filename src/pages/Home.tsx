import React from "react";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";

export default function Home() {
  const [text, setText] = useState("Type some text");

  return (
    <View style={styles.misc.screen}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{
          marginTop: 8,
          borderWidth: 1,
          borderColor: "darkgray",
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 8,
          minWidth: 200,
        }}
      ></TextInput>
    </View>
  );
}

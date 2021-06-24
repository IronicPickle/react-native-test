import React from "react";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";

export default function Home() {
  const [text, setText] = useState("Type some text");

  return (
    <View style={styles.misc.screen}>
      <Text style={styles.text.h3}>{text}</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{
          ...styles.inputs.contained,
          marginTop: 32,
        }}
      ></TextInput>
    </View>
  );
}

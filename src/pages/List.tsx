import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import styles from "../styles";

export default function List() {
  const [list, setList] = useState([] as string[]);
  const [newItem, setNewItem] = useState("");

  return (
    <View style={styles.misc.screen}>
      <Text style={styles.text.h2}>List</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <TextInput
          style={{ ...styles.inputs.outlined, flexGrow: 1 }}
          placeholder="Item Name"
          value={newItem}
          onChange={(event) => setNewItem(event.nativeEvent.text)}
        />
        <Pressable
          android_ripple={{ radius: 64 }}
          onPress={() => setList([...list, newItem])}
          style={{ ...styles.buttons.contained, marginLeft: 32 }}
        >
          <Text style={styles.buttons.text}>Add Item</Text>
        </Pressable>
      </View>

      <View style={{ margin: 12, width: "100%" }}>
        {list.map((item, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <Text style={styles.text.h6}>{item}</Text>
            <Pressable
              android_ripple={{ radius: 32 }}
              style={{ ...styles.buttons.contained, minWidth: 0 }}
              onPress={() => {
                let newList = [...list];
                newList.splice(i, 1);
                setList(newList);
              }}
            >
              <Text style={styles.buttons.text}>X</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

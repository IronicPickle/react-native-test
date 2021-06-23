import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { TabParamList } from "../../Routes";
import styles from "../../styles/index";

export default function NavBar(props: BottomTabBarProps<TabParamList>) {
  const { descriptors, navigation, state } = props;

  const currentRoute = state.routes[state.index];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgba(240,240,240,1)",
      }}
    >
      {state.routes.map((route, i) => {
        const isSelected = route.name === currentRoute.name;
        return (
          <Pressable
            key={i}
            onPress={() => navigation.navigate(route.name)}
            style={{
              ...styles.tabs.base,
              ...(isSelected ? styles.tabs.baseSelected : {}),
            }}
            android_ripple={{
              radius: 128,
            }}
          >
            <Text
              style={{
                ...styles.tabs.text,
                ...(isSelected ? styles.tabs.selectedText : {}),
              }}
            >
              {route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

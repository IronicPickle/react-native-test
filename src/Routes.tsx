import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import List from "./pages/List";
import Currencies from "./pages/Currencies";

export type ScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<StackParamList>
>;

export type TabParamList = {
  Home: {};
  List: {};
  Misc: {};
};

export type StackParamList = {};

export default function Routes() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <Tab.Navigator
      tabBar={(props: any) => <NavBar {...props} />}
      initialRouteName="Home"
    >
      <Tab.Group>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Currencies" component={Currencies} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

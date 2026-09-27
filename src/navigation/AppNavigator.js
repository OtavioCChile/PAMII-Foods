import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FoodsListScreen from "../screens/FoodsListScreen";
import FoodFormScreen from "../screens/FoodFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "iFomo - Página Inicial" }} />
      <Stack.Screen name="FoodsList" component={FoodsListScreen} options={{ title: "Comidas" }} />
      <Stack.Screen name="FoodForm" component={FoodFormScreen} options={{ title: "Nova Comida" }} />
    </Stack.Navigator>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";
import { AppRoutes } from "src/constants";
import { Movie } from "src/movie/Movie";
import { TabsNavigator } from "./Tabs";
const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName={AppRoutes.TABS}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={AppRoutes.TABS} component={TabsNavigator} />
        <Stack.Screen name={AppRoutes.MOVIE} component={Movie} />
        {/* <Stack.Screen name={AppRoutes.HOME} component={Home} />
      <Stack.Screen name={AppRoutes.SEARCH} component={Search} />
      <Stack.Screen name={AppRoutes.SAVE} component={Save} />
      <Stack.Screen name={AppRoutes.PROFILE} component={Search} /> */}
      </Stack.Navigator>
    </>
  );
};

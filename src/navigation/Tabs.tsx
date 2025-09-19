import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AppRoutes } from "src/constants";
import { Home } from "src/home";
import { Profile } from "src/profile";
import { Save } from "src/save";
import { Search } from "src/search";
import TabBarContent from "./components/TabBarContent";

const BottomTab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <>
      <BottomTab.Navigator
        initialRouteName={AppRoutes.HOME}
        tabBar={() => <TabBarContent />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <BottomTab.Screen
          name={AppRoutes.HOME}
          component={Home}
          options={{
            //title: "Home",
            headerShown: false,
          }}
        />
        <BottomTab.Screen name={AppRoutes.SEARCH} component={Search} />
        <BottomTab.Screen name={AppRoutes.SAVE} component={Save} />
        <BottomTab.Screen name={AppRoutes.PROFILE} component={Profile} />
      </BottomTab.Navigator>
    </>
  );
};

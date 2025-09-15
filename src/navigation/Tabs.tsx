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
          tabBarShowLabel: true,
        }}
      >
        <BottomTab.Screen
          name={AppRoutes.HOME}
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
            // tabBarIcon: () => (
            //   <>
            //     <ImageBackground
            //       source={images.highlight}
            //       className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center overflow-hidden rounded-full"
            //     >
            //       <Image
            //         source={icons.home}
            //         tintColor="#151312"
            //         className="size-5"
            //       />
            //     </ImageBackground>
            //   </>
            // ),
          }}
        />
        <BottomTab.Screen name={AppRoutes.SEARCH} component={Search} />
        <BottomTab.Screen name={AppRoutes.SAVE} component={Save} />
        <BottomTab.Screen name={AppRoutes.PROFILE} component={Profile} />
      </BottomTab.Navigator>
    </>
  );
};

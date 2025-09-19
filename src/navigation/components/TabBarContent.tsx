import React from "react";
import { View } from "react-native";
import { AppRoutes } from "src/constants";
import { icons } from "src/constants/icons";
import { useAppNavigationWithRef } from "src/hooks/useAppNavigationWithRef";
import { TabBarItem } from "./TabBarItem";

const TabBarContent: React.FC = () => {
  const { navigateToTab } = useAppNavigationWithRef();
  return (
    <View
      className="absolute bg-[#0F0D23] left-4 right-4 bottom-9 rounded-full h-14
      border border-[#0F0D23] overflow-hidden"
    >
      <View className="flex flex-row justify-between items-center h-full">
        <TabBarItem
          label="Home"
          icon={icons.home}
          route={AppRoutes.HOME}
          onPress={() => navigateToTab(AppRoutes.HOME)}
        />
        <TabBarItem
          label="Search"
          icon={icons.search}
          route={AppRoutes.SEARCH}
          onPress={() => navigateToTab(AppRoutes.SEARCH)}
        />
        <TabBarItem
          label="Saved"
          icon={icons.save}
          route={AppRoutes.SAVE}
          onPress={() => navigateToTab(AppRoutes.SAVE)}
        />
        <TabBarItem
          label="Profile"
          icon={icons.person}
          route={AppRoutes.PROFILE}
          onPress={() => navigateToTab(AppRoutes.PROFILE)}
        />
      </View>
    </View>
  );
};

export default TabBarContent;

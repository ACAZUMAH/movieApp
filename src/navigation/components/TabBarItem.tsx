import { useNavigationState } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import Conditional from "src/components/conditional/Conditional";
import { images } from "src/constants/images";

interface TabBarItemProps {
  label: string;
  icon: ImageSourcePropType;
  route?: string;
  onPress?: () => void;
}

export const TabBarItem: React.FC<TabBarItemProps> = ({
  label,
  icon,
  route,
  onPress,
}) => {
  const currentRouteName = useNavigationState((state) => {
    const findCurrentRoute = (route: any) => {
      if (!route?.state) return route.name;
      const currentRoute = route.state.routes[route.state.index];
      return findCurrentRoute(currentRoute);
    };
    const current = state.routes[state.index];
    return findCurrentRoute(current);
  });

  const isFocused = currentRouteName === route;

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
      >
        <Conditional condition={isFocused}>
          <ImageBackground
            source={images.highlight}
            className="flex flex-row w-full flex-1 min-w-[112px] min-h-14
        justify-center items-center rounded-full overflow-hidden"
          >
            <Image source={icon} tintColor="#151312" className="size-5" />
            <Text className="text-secondary text-base font-semibold ml-2">
              {label}
            </Text>
          </ImageBackground>
        </Conditional>
        <Conditional condition={!isFocused}>
          <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </Conditional>
      </TouchableOpacity>
    </>
  );
};

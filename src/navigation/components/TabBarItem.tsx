import { useNavigationState } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View
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
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Conditional condition={isFocused}>
          <ImageBackground
            source={images.highlight}
            className="flex flex-row w-full flex-1 min-w-[100px] min-h-14
        justify-center items-center rounded-full overflow-hidden"
          >
            <Image source={icon} tintColor="#151312" className="size-5" />
            <Text className="text-secondary text-base font-semibold ml-2">
              {label}
            </Text>
          </ImageBackground>
        </Conditional>
        <Conditional condition={!isFocused}>
          <View className="size=full justify-center items-center rounded-full px-11">
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
          </View>
        </Conditional>
      </TouchableOpacity>
    </>
  );
};

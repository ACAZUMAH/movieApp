import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigator } from "./Stack";
import { navigationRef } from "./navigationRef";

export const Navigation = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

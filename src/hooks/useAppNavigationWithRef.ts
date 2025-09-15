import { StackActions, TabActions } from "@react-navigation/native";
import { navigationRef } from "src/navigation/navigationRef";

export const useAppNavigationWithRef = () => {
  const navigationWithRef = (name: string, params?: object) => {
    if (!navigationRef.isReady()) return;
    return navigationRef.dispatch(StackActions.push(name, params));
  };

  const navigateToTab = (name: string, params?: object) => {
    if (!navigationRef.isReady()) return;
    return navigationRef.dispatch(TabActions.jumpTo(name, params));
  };

  return { navigationWithRef, navigateToTab }
};

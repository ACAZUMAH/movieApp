import {
    StackActions,
    TabActions,
    useNavigation,
} from "@react-navigation/native";

export const useAppNavigation = () => {
  const navigation = useNavigation();

  const navigate = (name: string, params?: object) => {
    return navigation.dispatch(StackActions.push(name, params));
  };

  const navigateToTab = (name: string, params?: object) => {
    return navigation.dispatch(TabActions.jumpTo(name, params));
  };

  const navigateBack = () => {
    return navigation.dispatch(StackActions.pop());
  };

  const navigateByReplace = (name: string, params?: object) => {
    return navigation.dispatch(StackActions.replace(name, params));
  };

  return {
    navigate,
    navigateBack,
    navigateByReplace,
    navigateToTab,
  };
};

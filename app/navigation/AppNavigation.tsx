import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../screens/Home";
import PostDetails from "../screens/Home/components/PostDetails";
import { AppRoute } from "./AppRoute";
import CommonStackWrapper from "./CommonStackWrapper";

const Stack = createNativeStackNavigator();
export const appNavigationRef = createNavigationContainerRef();

export default function AppNavigation() {
  console.log("[Render] AppNavigation");

  useReactNavigationDevTools(appNavigationRef);

  return (
    // <NavigationContainer ref={appNavigationRef} theme={DefaultTheme}>
    <Stack.Navigator
      initialRouteName={AppRoute.HomePage}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name={AppRoute.HomePage} component={HomePage} />
      <Stack.Screen name={AppRoute.PostDetails} component={PostDetails} />
      {CommonStackWrapper()}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

import { useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { AppRoute } from "./AppRoute";

import { appNavigationRef } from "./AppNavigation";
import { Alert } from "react-native";

const AppLaunching = () => {
  const [doneSplash, setDoneSplash] = useState(false);
  useEffect(() => {
    if (doneSplash) {
      if (appNavigationRef.isReady()) {
        appNavigationRef.dispatch(StackActions.replace(AppRoute.HomePage));
      }
    }
  }, [doneSplash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoneSplash(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  console.log("[Render] AppLaunching");
  return null;
};

export default AppLaunching;

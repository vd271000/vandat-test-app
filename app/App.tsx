import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./controllers/redux";
import AppNavigation from "./navigation/AppNavigation";
import "../ReactotronConfig";

const MyApp = () => {
  useEffect(() => {
    if (__DEV__) {
      console.log("App started in development mode");
      console.log("Reactotron configured");
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <AppNavigation />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

let App: any;
if (__DEV__) {
  App = MyApp;
} else {
  App = MyApp;
}

export default App;

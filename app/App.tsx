import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./controllers/redux";
import AppNavigation from "./navigation/AppNavigation";

const MyApp = () => {
  console.log("App");
  console.log("====================================");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            {/* <AppLaunching /> */}
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

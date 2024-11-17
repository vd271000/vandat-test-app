import Reactotron from "reactotron-react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { reactotronRedux } from "reactotron-redux";

export default reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "TEST APP",
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /localhost/,
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect();

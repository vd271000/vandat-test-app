import React, { useEffect } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppRoute } from "./AppRoute";
import { useAppDispatch } from "../controllers/redux";
import { PostActions } from "../screens/Home/slice";

const AppSplash = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchPostData();
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: AppRoute.HomePage }],
      });
    }, 1000); // Thời gian hiển thị splash screen

    return () => clearTimeout(timer);
  }, []);

  const fetchPostData = async () => {
    // await dispatch(PostActions.getPost({ page: 1, limit: 10 }));
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default AppSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

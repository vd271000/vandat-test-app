import React, { useEffect } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";

const AppSplash = (props: any) => {
  useEffect(() => {
    Alert.alert("1");
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <ActivityIndicator size={"small"} />
    </View>
  );
};

export default AppSplash;

const styles = StyleSheet.create({});

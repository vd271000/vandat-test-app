import { AppColors } from "@/app/assets";
import { Screen } from "@/app/common/components/Screen";
import { AppTypo } from "@/app/constants";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import InforUser from "./components/InforUser";
import News from "./components/News";
import Post from "./components/Post";
import PostFellings from "./components/PostFellings";
import Account from "./components/Account";

const HomePage = () => {
  const [selectedUtil, setSelectedUtil] = useState("Bài viết");

  const fakeUtils = [
    {
      name: "Bài viết",
      touch: {},
    },
    {
      name: "Giới thiệu",
      touch: {},
    },
    {
      name: "Bạn bè",
      touch: {},
    },
    {
      name: "Ảnh",
      touch: {},
    },
    {
      name: "Video",
      touch: {},
    },
    {
      name: "Cửa hàng",
      touch: {},
    },
  ];

  const renderUtilsHorizoltal = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 14,
          backgroundColor: AppColors.white,
          borderBottomWidth: 1,
          borderBottomColor: AppColors.buttonNonFill,
        }}
      >
        {fakeUtils.map((item, index) => (
          <View
            key={index}
            style={{
              marginRight: 24,
            }}
          >
            <Text
              onPress={() => setSelectedUtil(item.name)}
              style={{
                ...AppTypo.body.bold,
                fontWeight: "600",
                color:
                  selectedUtil === item.name
                    ? AppColors.blue500
                    : AppColors.black,
                borderBottomWidth: selectedUtil === item.name ? 2 : 0,
                borderBottomColor: AppColors.blue500,
                paddingBottom: 4,
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderContent = () => {
    switch (selectedUtil) {
      case "Bài viết":
        return (
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <PostFellings />
            <Post />
          </ScrollView>
        );
      case "Giới thiệu":
        return <Account />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Screen.Header title="Nguyễn Thọ Trung" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <InforUser />
        <News />
        <View style={styles.utilsContainer}>{renderUtilsHorizoltal()}</View>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.buttonNonFill,
  },
  utilsContainer: {
    backgroundColor: AppColors.white,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
});

export default HomePage;

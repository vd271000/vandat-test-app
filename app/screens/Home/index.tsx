import { AppColors } from "@/app/assets";
import { Screen } from "@/app/common/components/Screen";
import { AppTypo } from "@/app/constants";
import React, { useState, useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import InforUser from "./components/InforUser";
import News from "./components/News";
import Post from "./components/Post";
import PostFellings from "./components/PostFellings";
import Account from "./components/Account";

const HomePage = () => {
  const [selectedUtil, setSelectedUtil] = useState("Bài viết");
  const [scrollOffset, setScrollOffset] = useState(0);
  const scrollViewRef = useRef(null);

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
      <View>
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
                  color: AppColors.black,
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
      </View>
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
      {selectedUtil === "Bài viết" && (
        <Screen.Header title="Nguyễn Thọ Trung" />
      )}
      {scrollOffset > 570 ? renderUtilsHorizoltal() : null}
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        {selectedUtil === "Bài viết" && (
          <>
            <InforUser />
            <News />
          </>
        )}

        <View
          style={[
            styles.utilsContainer,
            {
              position: scrollOffset > 570 ? "absolute" : "relative",
              top: 0,
              zIndex: 1,
            },
          ]}
        >
          {renderUtilsHorizoltal()}
        </View>
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
    width: "100%",
    top: 0,
  },
});

export default HomePage;

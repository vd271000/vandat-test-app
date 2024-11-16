import { AppColors, AppImages } from "@/app/assets";
import { HStack } from "@/app/common/components/View";
import { AppTypo } from "@/app/constants";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const fakeData: any = [
  {
    avatar: AppImages.avatar,
    name: "Thêm tin",
    isNews: {},
  },
  {
    avatar: AppImages.avatar,
    name: "FWB",
    isNews: {
      news1: AppImages.background,
      news2: AppImages.background,
    },
  },
  {
    avatar: AppImages.avatar,
    name: "Travel",
    isNews: {
      news1: AppImages.background,
    },
  },
  {
    avatar: AppImages.avatar,
    name: "Friends",
    isNews: {},
  },
  {
    avatar: AppImages.avatar,
    name: "Travel",
    isNews: {
      news1: AppImages.background,
    },
  },
  {
    avatar: AppImages.avatar,
    name: "Travel",
    isNews: {
      news1: AppImages.background,
    },
  },
  {
    avatar: AppImages.avatar,
    name: "Travel",
    isNews: {
      news1: AppImages.background,
    },
  },
];

const News = () => {
  return (
    <FlatList
      style={{
        marginVertical: 8,
        backgroundColor: AppColors.white,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={fakeData}
      renderItem={({ item, index }) => (
        <HStack
          style={{
            paddingLeft: 8,
            paddingVertical: 16,
          }}
        >
          <View style={{ gap: 8, alignItems: "center" }}>
            <View
              style={{
                width: 74,
                height: 74,
                borderWidth: 2,
                borderColor:
                  Object.keys(item.isNews).length > 0
                    ? AppColors.buttonSubmit
                    : AppColors.gray300,
                borderRadius: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? (
                  <View
                    style={{
                      alignSelf: "center",
                      backgroundColor: AppColors.gray300,
                      height: 64,
                      width: 64,
                      borderRadius: 80,
                      justifyContent: "center",
                    }}
                  />
                ) : (
                  <Image
                    source={index === 0 ? null : item.avatar}
                    style={{
                      height: 64,
                      width: 64,
                      borderRadius: 80,
                    }}
                  />
                )}

                <View
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    alignSelf: "center",
                    backgroundColor: fakeData.isNews
                      ? "rgba(128, 128, 128, 0.1)"
                      : "null",
                    height: 64,
                    width: 64,
                    borderRadius: 80,
                    justifyContent: "center",
                  }}
                />
                {index === 0 ? (
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: AppColors.white,
                      position: "absolute",
                      alignSelf: "center",
                    }}
                  >
                    +
                  </Text>
                ) : null}
                {Object.keys(item.isNews).length > 0 ? (
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: AppColors.white,
                      position: "absolute",
                      alignSelf: "center",
                    }}
                  >
                    +5
                  </Text>
                ) : null}
              </TouchableOpacity>
            </View>
            <Text style={{ ...AppTypo.body.bold, fontWeight: "400" }}>
              {item.name}
            </Text>
          </View>
        </HStack>
      )}
    />
  );
};

export default News;

import { AppColors, AppIcons, AppImages } from "@/app/assets";
import { Icon } from "@/app/common/components/Icon";
import { HStack } from "@/app/common/components/View";
import { AppTypo } from "@/app/constants";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const fakePost = [
  {
    icon: AppIcons.camera_video,
    name: "Phát trực tiếp",
  },
  {
    icon: AppIcons.location,
    name: "Vị trí",
  },
  {
    icon: AppIcons.user_add,
    name: "Bạn bè",
  },
  {
    icon: AppIcons.smile_ellipse,
    name: "Cảm xúc",
  },
];

const PostFellings = () => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: AppColors.white,
        marginVertical: 16,
      }}
    >
      <Text style={{ ...AppTypo.body.bold, fontWeight: "600" }}>
        Bài viết của bạn
      </Text>
      <HStack
        style={{
          borderRadius: 40,
          width: "100%",
          paddingVertical: 16,
        }}
      >
        <Image
          source={AppImages.avatar}
          style={{ height: 40, width: 40, borderRadius: 50 }}
        />
        <TextInput
          placeholder="Bạn đang nghĩ gì"
          placeholderTextColor={AppColors.gray400}
          style={{ left: 10 }}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 10, alignSelf: "center" }}
        >
          <Icon source={AppIcons.image} size={20} />
        </TouchableOpacity>
      </HStack>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fakePost.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              marginRight: 12,
              borderRadius: 30,
              backgroundColor: AppColors.buttonNonFill,
              paddingHorizontal: 14,
              paddingVertical: 8,
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Icon source={item.icon} />
            <Text style={{ ...AppTypo.body.bold, fontWeight: "600" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PostFellings;

import { AppColors, AppIcons, AppImages } from "@/app/assets";
import { Icon, VectorIcon } from "@/app/common/components/Icon";
import { HStack } from "@/app/common/components/View";
import { AppRoute } from "@/app/navigation";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Post = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 16,
        flexShrink: 1,
        backgroundColor: AppColors.white,
        marginBottom: 16,
      }}
    >
      <HStack style={{ alignItems: "center" }}>
        <Image
          source={AppImages.avatar}
          style={{ height: 40, width: 40, borderRadius: 40, marginRight: 8 }}
        />
        <View style={{}}>
          <HStack style={{ alignItems: "center", gap: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sơn Tùng MTP
            </Text>
            <Icon source={AppIcons.vector} size={16} />
          </HStack>
          <HStack>
            <Text style={{ fontSize: 12, fontWeight: "200" }}>@hoanghai</Text>
            <Icon
              source={AppIcons.dot}
              size={5}
              style={{ alignSelf: "center", paddingHorizontal: 5 }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "200",
                textDecorationLine: "underline",
              }}
            >
              2 giờ
            </Text>
          </HStack>
        </View>
        <TouchableOpacity style={{ right: 5, position: "absolute" }}>
          <VectorIcon name="dots-horizontal" size={20} />
        </TouchableOpacity>
      </HStack>

      <TouchableOpacity
        activeOpacity={1}
        // onPress={() => RootNavigation.push(AppRoute.PostDetails)}
        onPress={() => navigation.navigate(AppRoute.PostDetails)}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingTop: 10,
          }}
        >
          Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng
          châu thổ sông Hồng ở miền Bắc Việt Nam.
        </Text>

        <Image
          source={AppImages.avatar}
          style={{
            width: "100%",
            height: 418,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
            marginVertical: 10,
          }}
        />
      </TouchableOpacity>

      <HStack
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          borderBottomColor: AppColors.buttonNonFill,
          borderBottomWidth: 1,
          paddingBottom: 14,
        }}
      >
        <VectorIcon name="cards-heart-outline" size={20} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          11k
        </Text>
      </HStack>

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
          placeholder="Nhập bình luận"
          placeholderTextColor={AppColors.gray400}
          style={{
            marginLeft: 10,
            backgroundColor: AppColors.buttonNonFill,
            width: "70%",
            borderRadius: 14,
            paddingLeft: 12,
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: "center",
            width: 32,
            height: 32,
            backgroundColor: AppColors.buttonNonFill,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 4,
            left: 4,
          }}
        >
          <Icon source={AppIcons.smile} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            width: 32,
            height: 32,
            backgroundColor: AppColors.buttonNonFill,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 6,
          }}
        >
          <Icon source={AppIcons.image} size={20} />
        </TouchableOpacity>
      </HStack>
    </View>
  );
};

export default Post;

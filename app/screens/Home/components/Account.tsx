import { AppColors, AppIcons } from "@/app/assets";
import { Icon, VectorIcon } from "@/app/common/components/Icon";
import { HStack } from "@/app/common/components/View";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const getIcon = (iconName: string) => {
  return <VectorIcon name={iconName} size={24} />;
};

const fakeAccount = [
  {
    icon: getIcon("account"),
    name: "Nam",
    util: "Giới tính",
    public: true,
    touch: {},
  },
  {
    icon: getIcon("language-php"),
    name: "22 tháng 2, 2002",
    util: "Ngày sinh",
    public: false,
    touch: {},
  },
  {
    icon: getIcon("language-java"),
    name: "Ngôn ngữ",
    util: "Tiếng việt",
    public: true,
    touch: {},
  },
];

const fakeLived = [
  {
    name: "Thanh Hoá",
    util: "Quê quán",
    public: true,
    touch: {},
  },
  {
    name: "Hà Nội",
    util: "Tỉnh/Thành phố hiện tại",
    public: false,
    touch: {},
  },
];

const Account = () => {
  return (
    <ScrollView style={{ marginTop: 2 }}>
      <View style={{ backgroundColor: AppColors.white, marginBottom: 16 }}>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 14,
            fontWeight: "500",
            paddingTop: 16,
          }}
        >
          Thông tin cơ bản
        </Text>
        <View style={{ paddingTop: 10 }}>
          {fakeAccount.map((item, index) => (
            <HStack
              key={index}
              style={{
                alignItems: "center",
                paddingVertical: 12,
                paddingLeft: 16,
                borderBottomWidth: 1,
                borderBottomColor: AppColors.buttonNonFill,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: AppColors.buttonNonFill,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  {item.util}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  {item.name}
                </Text>
              </View>
              <HStack style={{ right: 14, position: "absolute", gap: 8 }}>
                {item.public ? (
                  <TouchableOpacity>
                    <Icon source={AppIcons.public} size={18} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <VectorIcon name="lock" size={18} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity>
                  <Icon source={AppIcons.edit} size={20} />
                </TouchableOpacity>
              </HStack>
            </HStack>
          ))}
        </View>
      </View>

      <View style={{ backgroundColor: AppColors.white }}>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 14,
            fontWeight: "500",
            marginTop: 16,
          }}
        >
          Nơi từng sống
        </Text>
        <View style={{ paddingTop: 10 }}>
          {fakeLived.map((item, index) => (
            <HStack
              key={index}
              style={{
                alignItems: "center",
                paddingVertical: 12,
                paddingLeft: 16,
                borderBottomWidth: 1,
                borderBottomColor: AppColors.buttonNonFill,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: AppColors.buttonNonFill,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <VectorIcon name="map-marker" size={20} />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  {item.util}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  {item.name}
                </Text>
              </View>
              <HStack style={{ right: 14, position: "absolute", gap: 8 }}>
                {item.public ? (
                  <TouchableOpacity>
                    <Icon source={AppIcons.public} size={18} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <VectorIcon name="lock" size={18} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity>
                  <Icon source={AppIcons.edit} size={20} />
                </TouchableOpacity>
              </HStack>
            </HStack>
          ))}
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            paddingVertical: 12,
            paddingLeft: 16,
            borderBottomWidth: 1,
            borderBottomColor: AppColors.buttonNonFill,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: AppColors.buttonNonFill,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VectorIcon
              name="plus-circle"
              size={20}
              color={AppColors.blue500}
            />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: AppColors.blue500,
              }}
            >
              Thêm tỉnh/ thành phố
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;

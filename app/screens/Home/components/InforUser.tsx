import { AppColors, AppIcons, AppImages } from "@/app/assets";
import AppButton from "@/app/common/components/AppButton";
import { Icon, VectorIcon } from "@/app/common/components/Icon";
import { HStack } from "@/app/common/components/View";
import { AppTypo } from "@/app/constants";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const InforUser = () => {
  return (
    <View style={{ backgroundColor: AppColors.white, paddingBottom: 20 }}>
      <View style={{ marginBottom: 70 }}>
        <Image source={AppImages.background} style={styles.imgBackground} />
        <View style={styles.viewAvt}>
          <Image source={AppImages.avatar} style={styles.imgAvt} />
          <View style={styles.viewCamera}>
            <Icon source={AppIcons.camera} style={styles.icoCamera} />
          </View>
        </View>
      </View>
      <HStack style={styles.viewNameUser}>
        <Text style={styles.txtNameUser}>Nguyễn Thọ Trung</Text>
        <Icon source={AppIcons.vector} style={styles.icoNameUser} />
      </HStack>
      <Text style={styles.txtEmail}>trungntho@gmail.com</Text>
      <HStack style={{ justifyContent: "space-evenly", paddingVertical: 12 }}>
        <HStack style={{ gap: 4, alignItems: "center" }}>
          <Text style={styles.txtFollower}>700K</Text>
          <Text style={styles.txtTitleFollower}>Bạn bè</Text>
        </HStack>
        <HStack style={{ gap: 4, alignItems: "center" }}>
          <Text style={styles.txtFollower}>700K</Text>
          <Text style={styles.txtTitleFollower}>Người theo dõi</Text>
        </HStack>
      </HStack>
      <HStack style={{ justifyContent: "space-evenly" }}>
        <TouchableOpacity
          style={{
            height: 36,
            backgroundColor: AppColors.buttonSubmit,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 14,
            borderRadius: 8,
            gap: 8,
          }}
        >
          <VectorIcon name="plus" size={20} color={AppColors.white} />
          <Text
            style={{
              ...AppTypo.body.bold,
              color: AppColors.white,
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Thêm tin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 36,
            backgroundColor: AppColors.buttonNonFill,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 14,
            borderRadius: 8,
            gap: 8,
            width: "60%",
          }}
        >
          <Text
            style={{
              ...AppTypo.body.bold,
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Chỉnh sửa trang cá nhân
          </Text>
        </TouchableOpacity>

        {/* <AppButton
          title="Thêm tin"
          containerStyle={{
            borderRadius: 8,
            paddingHorizontal: 14,
            height: 50,
          }}
          textStyle={styles.txtBtn}
          isChildren
          nameIcon={"plus"}
        />
        <AppButton
          title="Chỉnh sửa trang cá nhân"
          containerStyle={{
            backgroundColor: AppColors.buttonNonFill,
            paddingHorizontal: 14,
            height: 50,
          }}
          textStyle={{ ...AppTypo.body.bold, fontWeight: "600" }}
        /> */}
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: 173,
  },
  viewAvt: {
    position: "absolute",
    zIndex: 99,
    alignSelf: "center",
    alignItems: "flex-end",
    bottom: -70,
    width: 128,
    height: 128,
  },
  imgAvt: {
    borderRadius: 80,
    borderWidth: 3,
    borderColor: AppColors.white,
  },
  viewCamera: {
    position: "absolute",
    zIndex: 99,
    width: 32,
    height: 32,
    backgroundColor: AppColors.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  icoCamera: {
    width: 20,
    height: 20,
  },
  viewNameUser: {
    alignSelf: "center",
    gap: 8,
    paddingTop: 12,
    paddingBottom: 2,
  },
  txtNameUser: {
    ...AppTypo.h2.bold,
  },
  icoNameUser: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  txtEmail: {
    ...AppTypo.body.regular,
    alignSelf: "center",
  },
  txtFollower: {
    ...AppTypo.body.bold,
    fontWeight: "900",
  },
  txtTitleFollower: {
    fontSize: 14,
    fontWeight: "400",
  },
  txtBtn: {
    ...AppTypo.body.bold,
    color: AppColors.white,
    fontWeight: "600",
  },
});

export default InforUser;

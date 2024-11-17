import { AppColors, AppIcons, AppImages } from "@/app/assets";
import { Icon, VectorIcon } from "@/app/common/components/Icon";
import { HStack } from "@/app/common/components/View";
import { getHoursAgo } from "@/app/utils";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
};

type PostDetailsProps = {
  route: RouteProp<{
    params: {
      character: Character;
    };
  }>;
};

const PostDetails = ({ route }: PostDetailsProps) => {
  const navigation = useNavigation();
  const character = route.params?.character;
  const timeAgo = getHoursAgo(character.created);

  return (
    <View style={styles.viewContainer}>
      <HStack style={styles.viewHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <VectorIcon name="chevron-left" size={24} style={styles.icoBack} />
        </TouchableOpacity>
        <Image source={{ uri: character.image }} style={styles.imgAvatar} />
        <View style={styles.viewUserInfo}>
          <HStack style={styles.viewNameContainer}>
            <Text style={styles.txtName}>{character.name}</Text>
            <Icon source={AppIcons.vector} size={16} />
          </HStack>
          <HStack>
            <Text style={styles.txtUsername}>
              @{character.species.toLowerCase()}
            </Text>
            <Icon source={AppIcons.dot} size={5} style={styles.icoDot} />
            <Text style={styles.txtTime}>{timeAgo} giờ trước</Text>
          </HStack>
        </View>
        <TouchableOpacity style={styles.btnMenu}>
          <VectorIcon name="dots-horizontal" size={20} />
        </TouchableOpacity>
      </HStack>

      <ScrollView style={styles.viewContent}>
        <TouchableOpacity activeOpacity={1}>
          <Text style={styles.txtContent}>
            {`${character.name} is a ${character.status} ${
              character.species
            } from ${character.origin.name}. 
            Currently located in ${character.location.name}.
            ${character.type ? `Special type: ${character.type}` : ""}`}
          </Text>

          <Image source={{ uri: character.image }} style={styles.imgContent} />
        </TouchableOpacity>

        <Text style={styles.txtViews}>55k lượt xem</Text>

        <HStack style={styles.viewLikeContainer}>
          <VectorIcon name="cards-heart-outline" size={20} />
          <Text style={styles.txtLikeCount}>11k</Text>
        </HStack>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <HStack style={styles.viewCommentContainer}>
          <Image source={AppImages.avatar} style={styles.imgCommentAvatar} />
          <TextInput
            placeholder="Nhập bình luận"
            placeholderTextColor={AppColors.gray400}
            style={styles.inputComment}
          />
          <TouchableOpacity style={[styles.btnAction, styles.btnSmile]}>
            <Icon source={AppIcons.smile} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnAction, styles.btnImage]}>
            <Icon source={AppIcons.image} size={20} />
          </TouchableOpacity>
        </HStack>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    position: "relative",
  },
  viewHeader: {
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: AppColors.white,
    padding: 12,
  },
  viewUserInfo: {},
  viewNameContainer: {
    alignItems: "center",
    gap: 8,
  },
  viewContent: {
    backgroundColor: AppColors.white,
    paddingHorizontal: 16,
    flex: 1,
  },
  viewLikeContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  viewCommentContainer: {
    padding: 16,
    position: "absolute",
    bottom: 0,
    backgroundColor: AppColors.white,
  },

  txtName: {
    fontSize: 18,
    fontWeight: "600",
  },
  txtUsername: {
    fontSize: 12,
    fontWeight: "200",
  },
  txtTime: {
    fontSize: 12,
    fontWeight: "200",
    textDecorationLine: "underline",
  },
  txtContent: {
    fontSize: 16,
    fontWeight: "400",
    paddingTop: 10,
  },
  txtViews: {
    fontSize: 12,
    fontWeight: "400",
    paddingVertical: 8,
  },
  txtLikeCount: {
    fontSize: 14,
    fontWeight: "400",
  },

  imgAvatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 8,
  },
  imgContent: {
    width: "100%",
    height: 418,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginVertical: 10,
  },
  imgCommentAvatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },

  icoBack: {
    marginRight: 6,
  },
  icoDot: {
    alignSelf: "center",
    paddingHorizontal: 5,
  },

  btnMenu: {
    right: 15,
    position: "absolute",
  },
  btnAction: {
    alignSelf: "center",
    width: 32,
    height: 32,
    backgroundColor: AppColors.buttonNonFill,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSmile: {
    marginHorizontal: 4,
    left: 4,
  },
  btnImage: {
    marginHorizontal: 6,
  },

  inputComment: {
    marginLeft: 10,
    backgroundColor: AppColors.buttonNonFill,
    width: "68%",
    borderRadius: 14,
    paddingLeft: 12,
  },
});

export default PostDetails;

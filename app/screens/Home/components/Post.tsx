import { AppColors, AppIcons, AppImages } from "@/app/assets";
import { Icon, VectorIcon } from "@/app/common/components/Icon";
import { HStack } from "@/app/common/components/View";
import { useAppDispatch, useAppSelector } from "@/app/controllers/redux";
import { AppRoute } from "@/app/navigation";
import { getHoursAgo } from "@/app/utils";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { PostActions } from "../slice";
import axios from "axios";
import { AppConfigs } from "@/app/constants";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
  created: string;
};

type PostProps = {
  getPost: Character[];
};

const Post = ({ getPost }: PostProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [posts, setPosts] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isFirstLoad = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isFirstLoad.current) {
      fetchPosts();
      isFirstLoad.current = false;
    }
  }, []);

  const fetchPosts = async () => {
    if (isLoading || !hasMore) return;

    try {
      console.log("Fetching page:", page);
      setIsLoading(true);

      const response = await axios.get(
        `${AppConfigs.API}/character?page=${page}&limit=10`
      );
      const { results, info } = response.data;

      if (page === 1) {
        setPosts(results);
      } else {
        setPosts((prev) => [...prev, ...results]);
      }

      setHasMore(!!info.next);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
      Alert.alert("Error", "Could not load posts");
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!isLoading && hasMore) {
        console.log("Triggered load more");
        fetchPosts();
      }
    }, 500);
  }, [isLoading, hasMore]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderFooter = () => {
    if (!hasMore) {
      return (
        <View style={styles.footerLoader}>
          <Text style={styles.txtEmpty}>No more posts</Text>
        </View>
      );
    }

    if (isLoading) {
      return (
        <View style={styles.footerLoader}>
          <ActivityIndicator size="small" color={AppColors.blue500} />
          <Text style={styles.txtLoading}>Loading more posts...</Text>
        </View>
      );
    }

    return null;
  };

  const renderItem = ({ item }: { item: Character }) => {
    const timeAgo = getHoursAgo(item.created);

    return (
      <View style={styles.viewContainer}>
        <HStack style={styles.viewHeader}>
          <Image source={{ uri: item.image }} style={styles.imgAvatar} />
          <View style={styles.viewUserInfo}>
            <HStack style={styles.viewNameContainer}>
              <Text style={styles.txtName}>{item.name}</Text>
              <Icon source={AppIcons.vector} size={16} />
            </HStack>
            <HStack>
              <Text style={styles.txtUsername}>@{item.species}</Text>
              <Icon source={AppIcons.dot} size={5} style={styles.icoDot} />
              <Text style={styles.txtTime}>{timeAgo} giờ trước</Text>
            </HStack>
          </View>
          <TouchableOpacity style={styles.btnMenu}>
            <VectorIcon name="dots-horizontal" size={20} />
          </TouchableOpacity>
        </HStack>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate(AppRoute.PostDetails, { character: item })
          }
        >
          <Text style={styles.txtContent}>
            {`${item.name} is a ${item.species} from ${item.location.name}`}
          </Text>

          <Image source={{ uri: item.image }} style={styles.imgContent} />
        </TouchableOpacity>

        <HStack style={styles.viewLikeContainer}>
          <VectorIcon name="cards-heart-outline" size={20} />
          <Text style={styles.txtLikeCount}>
            {Math.floor(Math.random() * 10000)}
          </Text>
        </HStack>

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
      </View>
    );
  };

  if (!posts.length) {
    return (
      <View style={styles.viewEmpty}>
        <ActivityIndicator size="large" color={AppColors.blue500} />
        <Text style={styles.txtEmpty}>Loading posts...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}`}
      ListFooterComponent={renderFooter}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.2}
      contentContainerStyle={styles.viewList}
    />
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexShrink: 1,
    backgroundColor: AppColors.white,
    marginBottom: 16,
  },
  viewHeader: {
    alignItems: "center",
  },
  viewUserInfo: {},
  viewNameContainer: {
    alignItems: "center",
    gap: 8,
  },
  viewLikeContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderBottomColor: AppColors.buttonNonFill,
    borderBottomWidth: 1,
    paddingBottom: 14,
  },
  viewCommentContainer: {
    borderRadius: 40,
    width: "100%",
    paddingVertical: 16,
  },
  viewEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  viewList: {
    paddingBottom: 20,
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
  txtLikeCount: {
    fontSize: 14,
    fontWeight: "400",
  },
  txtEmpty: {
    marginTop: 10,
    fontSize: 16,
    color: AppColors.gray400,
  },

  imgAvatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 8,
  },
  imgContent: {
    width: "100%",
    height: 300,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginVertical: 10,
  },
  imgCommentAvatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },

  icoDot: {
    alignSelf: "center",
    paddingHorizontal: 5,
  },

  btnMenu: {
    right: 5,
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
    width: "70%",
    borderRadius: 14,
    paddingLeft: 12,
  },

  emptyList: {
    flex: 1,
    justifyContent: "center",
  },

  footerLoader: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txtLoading: {
    marginTop: 8,
    fontSize: 14,
    color: AppColors.gray400,
  },
});

export default Post;

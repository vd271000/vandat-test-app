import { createSlice } from "@reduxjs/toolkit";
import { ThunkReducers } from "./thunkReducer";
import { PostState } from "../modal";

const { getPost } = ThunkReducers;

const initialState: PostState = {
  posts: [],
  page: 1,
  loadMore: true,
  refresh: false,
  hasNextPost: true,
  isLoading: false,
};

export const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
    resetPage: (state) => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      const { results, info } = action.payload.data; //info chứa thông tin trang.
      const { next } = info; //next chứa URL của trang tiếp theo nếu còn dữ liệu.

      if (state.page === 1) {
        state.posts = results;
      } else {
        state.posts = [...state.posts, ...results];
      }

      state.page += 1;
      state.hasNextPost = !!next; //Nếu next tồn tại, còn dữ liệu để tải.
    });
  },
});

export const PostActions = {
  ...PostSlice.actions,
  getPost,
};

export default PostSlice.reducer;

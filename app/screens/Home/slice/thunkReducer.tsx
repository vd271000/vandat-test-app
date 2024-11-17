import { AppConfigs } from "@/app/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface PostParams {
  page?: number;
  limit?: number;
}

const getPost = createAsyncThunk(
  "home/getPost",
  async ({ page = 1, limit = 10 }: PostParams) => {
    const response = await axios.get(
      `${AppConfigs.API}/character?page=${page}&limit=${limit}`
    );
    // console.log("get res:", JSON.stringify(response));

    return response;
  }
);

export const ThunkReducers = { getPost };

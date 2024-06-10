import { GreeveApi } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface Author {
  id: string;
  username: string;
  name: string;
  avatar_url: string;
}

interface Discussion {
  id: string;
  title: string;
  description: string;
  author: Author;
}

interface ForumState {
  discussions: Discussion[];
  loading: boolean;
  error: string | null;
  status: boolean;
  message: string;
}

const initialState: ForumState = {
  discussions: [],
  loading: false,
  error: null,
  status: false,
  message: "",
};

export const fetchDiscussions = createAsyncThunk(
  "forum/fetchDiscussions",
  async () => {
    try {
      const response = await GreeveApi.get("/forums");
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.status : error.message;
      }
      throw error;
    }
  }
);

export const forumSlice = createSlice({
  name: "forum",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscussions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiscussions.fulfilled, (state, action) => {
        state.discussions = action.payload.data;
        state.loading = false;
        state.status = true;
        state.message = "Get Forum Success";
      })
      .addCase(fetchDiscussions.rejected, (state, action) => {
        state.error = action.payload as string | null;
        state.loading = false;
        state.status = false;
        state.message = "Get Forum Failed";
      });
  },
});

export default forumSlice.reducer;
export const {} = forumSlice.actions;

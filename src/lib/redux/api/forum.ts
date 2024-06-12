import { GreeveApi } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface Author {
  id: string;
  username: string;
  name: string;
  avatar_url: string;
}
interface ForumMessage {
  id: string;
  user_id: string;
  message: string;
}

interface Discussion {
  id: string;
  title: string;
  description: string;
  author: Author;
}
interface DiscussionDetail {
  id: string;
  title: string;
  description: string;
  author: Author;
  forum_messages: ForumMessage[];
}

interface ForumState {
  discussions: Discussion[];
  discussionsDetail: DiscussionDetail;
  loading: boolean;
  error: string | null;
  status: boolean;
  message: string;
}

const initialState: ForumState = {
  discussions: [],
  discussionsDetail: {
    id: "",
    title: "",
    description: "",
    author: {
      id: "",
      username: "",
      name: "",
      avatar_url: "",
    },
    forum_messages: [],
  },
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

export const fetchDiscussionById = createAsyncThunk(
  "forum/fetchDiscussionById",
  async (forum_id: string) => {
    try {
      const response = await GreeveApi.get(`/forums/${forum_id}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.data : error.message;
      }
      throw error;
    }
  }
);

export const deleteForumById = createAsyncThunk(
  "forum/deleteForumById",
  async (forum_id: string) => {
    try {
      const response = await GreeveApi.delete(`/forums/${forum_id}`);
      if (response.status === 200) {
        return forum_id; // Return the id of the deleted forum
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.data : error.message;
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
      })
      .addCase(fetchDiscussionById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiscussionById.fulfilled, (state, action) => {
        state.discussionsDetail = action.payload.data; // Correctly assigning the payload to discussionsDetail
        state.loading = false;
        state.status = true;
        state.message = "Get Specific Forum Success";
      })
      .addCase(fetchDiscussionById.rejected, (state, action) => {
        state.error = action.payload as string | null;
        state.loading = false;
        state.status = false;
        state.message = "Get Specific Forum Failed";
      })
      .addCase(deleteForumById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteForumById.fulfilled, (state, action) => {
        state.discussions = state.discussions.filter(
          (discussion) => discussion.id !== action.payload
        );
        state.loading = false;
        state.status = true;
        state.message = "Delete Forum Success";
      })
      .addCase(deleteForumById.rejected, (state, action) => {
        state.error = action.payload as string | null;
        state.loading = false;
        state.status = false;
        state.message = "Delete Forum Failed";
      });
  },
});

export default forumSlice.reducer;
export const {} = forumSlice.actions;

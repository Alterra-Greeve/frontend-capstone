import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getChallenges = createAsyncThunk(
  "challenges/getChallenges",
  async () => {
    try {
      const response = await GreeveApi.get('/admin/challenges');
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

export const deleteChallenge = createAsyncThunk(
  "challenges/deleteChallenge",
  async (id: string) => {
    try {
      // const response = await GreeveApi.delete(`/admin/challenges/${id}`);
      // if (response.status === 200) {
      return id;
      // }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.status : error.message;
      }
      throw error;
    }
  }
);

interface CategoriesProps {
  impact_category: {
    name: string;
    impact_point: number;
  }
}

export interface ChallengeProps {
  id: string;
  title: string;
  description: string;
  image_url: string;
  date_start: string;
  date_end: string;
  categories: CategoriesProps[];
}

interface InitialState {
  data: ChallengeProps[];
  originalData: ChallengeProps[];
  metadata: {
    current_page: number;
    total_page: number;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: [],
  originalData: [],
  metadata: {
    current_page: 0,
    total_page: 0
  },
  isLoading: false,
  isError: false,
  error: null
};

export const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    usersCurrentPage: (state, action: PayloadAction<number>) => {
      const newPage = action.payload;
      const totalPages = state.metadata.total_page;

      if (
        newPage >= 1 &&
        newPage <= totalPages &&
        state.metadata.current_page !== newPage
      ) {
        state.metadata.current_page = newPage;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getChallenges.pending, state => {
        state.isLoading = true;
      })
      .addCase(getChallenges.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.originalData = payload.data;
        state.metadata = payload.metadata;
      })
      .addCase(getChallenges.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload as string;
      })

      .addCase(deleteChallenge.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((item: ChallengeProps) => item.id !== action.payload);
      })
      .addCase(deleteChallenge.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
      });
  }
});

export const challengesReducer = challengesSlice.reducer;

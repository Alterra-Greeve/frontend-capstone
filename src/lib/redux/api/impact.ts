import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getAllDataImpact = createAsyncThunk(
  "impact/getAllDataImpact",
  async () => {
    try {
      const response = await GreeveApi.get('/impact');
      if (response.status === 200) {
        return response.data.data[0];
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.status : error.message;
      }
      throw error;
    }
  }
)

export interface ImpactProps {
  id: string;
  name: string;
  impact_poin: number;
  icon_url: string;
  image_url: string;
  description: string;
}

interface ImpactState {
  data: ImpactProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ImpactState = {
  data: [],
  isLoading: false,
  error: null,
}

export const impactSlice = createSlice({
  name: "impact",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllDataImpact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllDataImpact.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllDataImpact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message as string;
    });
  }
});

export default impactSlice;
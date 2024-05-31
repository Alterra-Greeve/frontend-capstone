import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface LoginPayload {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }: LoginPayload) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {
        email,
        password
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Login failed');

    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.data : error.message;
      }
      throw error;
    }
  }
);

interface AuthState {
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  token: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  isError: false,
  error: null,
  token: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("greeve-token");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.token = action.payload.data.token;

      localStorage.setItem("greeve-token", action.payload.data.token);
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message as string;
    });
  }
})

export default authSlice.reducer;
export const { logout } = authSlice.actions;
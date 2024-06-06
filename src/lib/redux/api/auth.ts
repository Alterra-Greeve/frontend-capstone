import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

interface LoginPayload {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }: LoginPayload) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`, {
        email,
        password
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Login failed');

    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.status : error.message;
      }
      throw error;
    }
  }
);

interface AuthState {
  session: "authenticated" | "unauthenticated";
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  token: string | null;
}

const initialState: AuthState = {
  session: getCookie("greeve-token") ? "authenticated" : "unauthenticated",
  isLoading: false,
  isError: false,
  error: null,
  token: getCookie("greeve-token") || null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signOut: (state) => {
      state.token = null;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.session = "unauthenticated";

      deleteCookie("greeve-token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      const { data } = action.payload;

      state.isLoading = false;
      state.token = data.token;
      state.isError = false;
      state.error = null;
      state.session = "authenticated";

      setCookie("greeve-token", data.token, {
        maxAge: 60 * 60, // 1 hour
        path: "/",
        sameSite: "strict"
      })
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.session = "unauthenticated";
      state.error = action.error.message as string;
    });
  }
})

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
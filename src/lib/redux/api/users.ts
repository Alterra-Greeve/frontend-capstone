import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    try {
      const response = await GreeveApi.get('/admin/users');
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

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId: string) => {
    try {
      const response = await GreeveApi.delete(`/admin/users/${userId}`);
      if (response.status === 200) {
        return userId;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response ? error.response.status : error.message;
      }
      throw error;
    }
  }
);

export interface UsersProps {
  address: string;
  avatar_url: string;
  coin: number;
  email: string;
  exp: number;
  gender: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  username: string;
}

interface InitialState {
  data: UsersProps[];
  originalData: UsersProps[];
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

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
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
    filteredUsers: (state, action: PayloadAction<{
      name?: string | undefined;
      username?: string | undefined;
      gender?: string | undefined
    }>) => {
      const { name, username, gender } = action.payload;

      const lowercasedName = name?.toLowerCase();
      const lowercasedUsername = username?.toLowerCase();
      const lowercasedGender = gender ? gender?.toLowerCase() : '';

      state.data = state.originalData.filter((item) => {
        const isNameMatch = item.name.toLowerCase().includes(lowercasedName!);
        const isUsernameMatch = item.username.toLowerCase().includes(lowercasedUsername!);
        const isGenderMatch = gender ? item.gender.toLowerCase() === lowercasedGender : true;

        return (isNameMatch || isUsernameMatch) && isGenderMatch;
      });
    },
    resetFilter: (state) => {
      state.data = [...state.originalData];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.originalData = action.payload.data;
        state.metadata = action.payload.metadata;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((item: UsersProps) => item.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
      });
  }
});

export default usersSlice.reducer;
export const {
  usersCurrentPage,
  filteredUsers,
  resetFilter
} = usersSlice.actions;
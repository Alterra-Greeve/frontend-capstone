import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (usersPage?: string) => {
    try {
      const response = await GreeveApi.get(
        `/admin/users?page=${usersPage || "1"}`
      );
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
//edit user function reducer
export const editUser = createAsyncThunk(
  "users/editUsers",
  async ({ userId, data }: { userId: any; data: any }) => {
    try {
      const response = await GreeveApi.put(`/admin/users/${userId}`, data);
      if (response.status == 200) {
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
//edit user function reducer

export interface UsersProps {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  address: string;
  gender: string;
  phone: string;
  coin: number;
  exp: number;
  avatar_url: string;
  created_at: string;
  updated_at: string;
}
export interface filterProps {
  name: string;
  username: string;
  gender: string;
}

interface InitialState {
  data: UsersProps[];
  filter: filterProps;
  originalData: UsersProps[];
  metadata: {
    current_page: number;
    total_page: number;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  message: string;
}

const initialState: InitialState = {
  data: [],
  filter: { name: "", username: "", gender: "" },
  originalData: [],
  metadata: {
    current_page: 0,
    total_page: 0,
  },
  isLoading: false,
  isError: false,
  error: null,
  message: "",
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
    filteredUsers: (
      state,
      action: PayloadAction<{
        name?: string | undefined;
        username?: string | undefined;
        gender?: string | undefined;
      }>
    ) => {
      const { name, username, gender } = action.payload;

      const lowercasedName = name?.toLowerCase() || "";
      const lowercasedUsername = username?.toLowerCase() || "";
      const lowercasedGender = gender?.toLowerCase() || "";

      state.filter = {
        name: lowercasedName,
        username: lowercasedUsername,
        gender: lowercasedGender,
      };

      state.data = state.originalData.filter((item) => {
        const isNameMatch = lowercasedName
          ? item.name.toLowerCase().includes(lowercasedName)
          : true;
        const isUsernameMatch = lowercasedUsername
          ? item.username.toLowerCase().includes(lowercasedUsername)
          : true;
        const isGenderMatch = lowercasedGender
          ? item.gender.toLowerCase() === lowercasedGender
          : true;

        return isNameMatch && isUsernameMatch && isGenderMatch;
      });
    },
    resetFilter: (state) => {
      state.data = [...state.originalData];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isError = false;
        state.message = "";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.originalData = action.payload.data;
        state.metadata = action.payload.metadata;
        state.isError = false;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
        state.message = "Failed to load users."; // Added failure message
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item: UsersProps) => item.id !== action.payload
        );
        state.isLoading = false;
        state.isError = false;
        state.message = "User successfully deleted."; // Added success message
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
        state.message = "Failed to delete user."; // Added failure message
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isError = false;
        state.message = "";
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.data = state.data.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        state.originalData = state.originalData.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        state.isLoading = false;
        state.isError = false;
        state.message = "User successfully updated."; // Added success message
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
        state.message = "Failed to update user."; // Added failure message
      });
  },
});

export default usersSlice.reducer;
export const { usersCurrentPage, filteredUsers, resetFilter } =
  usersSlice.actions;

import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await GreeveApi.get("/admin/users");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response ? error.response.status : error.message;
    }
    throw error;
  }
});

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

      const lowercasedName = name?.toLowerCase();
      const lowercasedUsername = username?.toLowerCase();
      const lowercasedGender = gender ? gender?.toLowerCase() : "";

      state.filter = {
        name: name || "",
        username: username || "",
        gender: gender || "",
      };
      state.data = state.originalData.filter((item) => {
        const isNameMatch = item.name.toLowerCase().includes(lowercasedName!);
        const isUsernameMatch = item.username
          .toLowerCase()
          .includes(lowercasedUsername!);
        const isGenderMatch = gender
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
        state.data = state.data.filter(
          (item: UsersProps) => item.id !== action.payload
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        //edit users
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
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
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
      }); //edit users
  },
});

export default usersSlice.reducer;
export const { usersCurrentPage, filteredUsers, resetFilter } =
  usersSlice.actions;

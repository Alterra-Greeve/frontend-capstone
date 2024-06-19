import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const convertDate = (date: string): string => {
  const [day, month, year] = date.split('/');
  return `20${year}-${month}-${day}`;
};

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

export const getChallengeById = createAsyncThunk(
  "challenges/getChallengeById",
  async (id: string) => {
    try {
      const response = await GreeveApi.get(`/admin/challenges/${id}`);
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

export const updateChallengeById = createAsyncThunk(
  "challenges/updateChallengeById",
  async ({ id, data }: {
    id: string,
    data: Omit<ChallengeProps, "id" | "participant" | "categories" | "image_url"> &
    { category: string[], image_url?: string }
  }) => {
    try {
      console.log(data);
      const response = await GreeveApi.put(`/admin/challenges/${id}`, data);
      console.log(response);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        throw error.response ? error.response.status : error.message;
      }
      throw error;
    }
  }
);

export const createChallenge = createAsyncThunk(
  "challenges/createChallenge",
  async (data: Omit<ChallengeProps, "id" | "participant" | "categories" | "image_url"> & {
    categories: string[],
    image_url?: string
  }) => {
    try {
      const response = await GreeveApi.post('/admin/challenges', data);
      if (response.status === 201) {
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
      const response = await GreeveApi.delete(`/admin/challenges/${id}`);
      if (response.status === 200) {
        return id;
      }
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
    id?: string;
    name: string;
    impact_point: number;
    icon_url: string;
  }
}

export interface ChallengeProps {
  id: string;
  title: string;
  coin: number;
  exp: number;
  participant: number;
  difficulty: string;
  description: string;
  image_url: string;
  date_start: string;
  date_end: string;
  categories: CategoriesProps[];
}

interface InitialState {
  singleData: ChallengeProps | null;
  data: ChallengeProps[];
  originalData: ChallengeProps[];
  filter: {
    title?: string;
    difficulty?: string[];
    exp_min?: number;
    exp_max?: number;
    coin_min?: number;
    coin_max?: number;
    helper?: string[];
  };
  metadata: {
    current_page: number;
    total_page: number;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  message?: string | null;
}

const initialState: InitialState = {
  singleData: null,
  data: [],
  originalData: [],
  filter: {
    difficulty: undefined,
    exp_min: undefined,
    exp_max: undefined,
    coin_min: undefined,
    coin_max: undefined,
    helper: undefined
  },
  metadata: {
    current_page: 0,
    total_page: 0
  },
  isLoading: false,
  isError: false,
  error: null,
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
    searchChallenges: (state, action: PayloadAction<string>) => {
      state.filter = { title: action.payload };
      state.data = state.originalData.filter((item: ChallengeProps) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    filterChallenges: (state, action: PayloadAction<InitialState["filter"]>) => {
      state.filter = action.payload;
      state.data = state.originalData.filter((item: ChallengeProps) => {
        const isDifficulty = state.filter.difficulty && state.filter.difficulty.length
          ? state.filter.difficulty.some(difficulty =>
            item.difficulty.toLowerCase() === difficulty.toLowerCase()
          )
          : true;

        const isExp = (state.filter.exp_min !== undefined && state.filter.exp_max !== undefined)
          ? item.exp >= state.filter.exp_min && item.exp <= state.filter.exp_max
          : (state.filter.exp_min !== undefined)
            ? item.exp >= state.filter.exp_min
            : (state.filter.exp_max !== undefined)
              ? item.exp <= state.filter.exp_max
              : true;

        const isCoin = (state.filter.coin_min !== undefined && state.filter.coin_max !== undefined)
          ? item.coin >= state.filter.coin_min && item.coin <= state.filter.coin_max
          : (state.filter.coin_min !== undefined)
            ? item.coin >= state.filter.coin_min
            : (state.filter.coin_max !== undefined)
              ? item.coin <= state.filter.coin_max
              : true;

        const isHelper = state.filter.helper && state.filter.helper.length
          ? state.filter.helper.some(helper => item.categories.some(
            category => category.impact_category.name.toLowerCase() === helper.toLowerCase()
          ))
          : true;

        return isDifficulty && isExp && isCoin && isHelper;
      });
    },
    resetFilter: state => {
      state.filter = {
        difficulty: undefined,
        exp_min: undefined,
        exp_max: undefined,
        coin_min: undefined,
        coin_max: undefined,
        helper: undefined
      };
      state.data = state.originalData;
    },
    deleteCurrentImage: (state) => {
      state.singleData = {
        ...state.singleData!,
        image_url: ''
      };
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.singleData = {
        ...state.singleData!,
        image_url: action.payload
      };
    },
    setNewSingleData: (
      state,
      action: PayloadAction<
        Omit<ChallengeProps, "id" | "participant" | "categories" | "image_url"> & {
          categories: string[],
          image_url?: string
        }>
    ) => {
      // @ts-expect-error categories is not assignable to type 'CategoriesProps[]'
      state.singleData = {
        ...state.singleData!,
        ...action.payload
      };
    },
    clearSingleData: state => {
      state.singleData = null;
    }
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
      .addCase(getChallengeById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getChallengeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload.data);

        payload.data.date_start = convertDate(payload.data.date_start);
        payload.data.date_end = convertDate(payload.data.date_end);

        state.singleData = payload.data;
      })
      .addCase(getChallengeById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload as string;
      })

      .addCase(deleteChallenge.fulfilled, (state, action) => {
        state.data = state.data.filter((item: ChallengeProps) => item.id !== action.payload);
      })
  }
});

export const challengesReducer = challengesSlice.reducer;
export const {
  usersCurrentPage,
  filterChallenges,
  resetFilter,
  deleteCurrentImage,
  setImageUrl,
  setNewSingleData,
  clearSingleData,
  searchChallenges
} = challengesSlice.actions;


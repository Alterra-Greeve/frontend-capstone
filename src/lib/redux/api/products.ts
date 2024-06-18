import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await GreeveApi.get("/products");
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id: string) => {
    try {
      const response = await GreeveApi.delete(`/products/${id}`);
      if (response.status === 200) {
        return id;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export interface ProductsProps {
  product_id: string;
  name: string;
  description: string;
  price: number;
  coin: number;
  stock: number;
  created_at: string;
  updated_at: string;
  category: string[];
  image_url: string[];
}

interface initialStateProps {
  data: ProductsProps[];
  originialData: ProductsProps[];
  filteredData?: {
    harga_min?: number;
    harga_max?: number;
    stok_min?: number;
    stok_max?: number;
    koin_min?: number;
    koin_max?: number;
    category?: string[];
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: initialStateProps = {
  data: [],
  originialData: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.originialData = action.payload;
    })
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message as string;
    })

    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.data = state.data.filter((product) => product.product_id !== action.payload);
    })
  }
});
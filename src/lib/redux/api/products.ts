import { GreeveApi } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  filteredData: {
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
  filteredData: {},
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredProducts: (
      state,
      action: PayloadAction<initialStateProps['filteredData']>
    ) => {
      state.filteredData = action.payload;

      state.data = state.originialData.filter((product) => {
        const isHarga = (state.filteredData?.harga_min && state.filteredData?.harga_max)
          ? product.price >= state.filteredData.harga_min && product.price <= state.filteredData.harga_max
          : (state.filteredData?.harga_min !== undefined)
            ? product.price >= state.filteredData.harga_min
            : (state.filteredData?.harga_max !== undefined)
              ? product.price <= state.filteredData.harga_max
              : true;

        const isStok = (state.filteredData?.stok_min && state.filteredData?.stok_max)
          ? product.stock >= state.filteredData.stok_min && product.stock <= state.filteredData.stok_max
          : (state.filteredData?.stok_min !== undefined)
            ? product.stock >= state.filteredData.stok_min
            : (state.filteredData?.stok_max !== undefined)
              ? product.stock <= state.filteredData.stok_max
              : true;

        const isKoin = (state.filteredData?.koin_min && state.filteredData?.koin_max)
          ? product.coin >= state.filteredData.koin_min && product.coin <= state.filteredData.koin_max
          : (state.filteredData?.koin_min !== undefined)
            ? product.coin >= state.filteredData.koin_min
            : (state.filteredData?.koin_max !== undefined)
              ? product.coin <= state.filteredData.koin_max
              : true;

        const isHelper = state.filteredData?.category && state.filteredData?.category.length
          ? state.filteredData.category.some(helper => product.category.some(
            category => category === helper
          ))
          : true;

        return isHarga && isStok && isKoin && isHelper;
      });
    },
  },
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

export const { filteredProducts } = productsSlice.actions;

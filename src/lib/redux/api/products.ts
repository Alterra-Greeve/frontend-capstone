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

export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (data: Omit<ProductsProps, "product_id" | "created_at" | "updated_at" | "categories"> & {
    category: string[];
  }) => {
    try {
      const response = await GreeveApi.post("/products", data);
      if (response.status === 201) {
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
      const response = await GreeveApi.delete(`/admin/products/${id}`);
      if (response.status === 200) {
        return id;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: string) => {
    try {
      const response = await GreeveApi.get(`/products/${id}`);
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const updateProductById = createAsyncThunk(
  "products/updateProductById",
  async ({ id, data }: {
    id: string;
    data: Omit<ProductsProps, "product_id" | "created_at" | "updated_at">
  }) => {
    try {
      const response = await GreeveApi.put(`/admin/products/${id}`, data);
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
)

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
  singleData: Omit<ProductsProps, "product_id" | "updated_at"> | null;
  originialData: ProductsProps[];
  imageUrl: string[],
  filteredData: {
    name?: string;
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
  singleData: null,
  imageUrl: [],
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
    searchProducts: (state, action: PayloadAction<string>) => {
      state.filteredData.name = action.payload;
      state.data = state.originialData.filter((product) => {
        const isName = product.name.toLowerCase().includes(action.payload.toLowerCase());

        return isName
      });
    },
    setTempImage: (state, action: PayloadAction<string>) => {
      state.imageUrl.push(action.payload);
    },
    deleteTempImage: (state, action: PayloadAction<number>) => {
      state.imageUrl = state.imageUrl.filter((_, index) => index !== action.payload);
    },
    clearTempImage: (state) => {
      state.imageUrl = [];
    },
    setNewProduct: (
      state,
      action: PayloadAction<Omit<ProductsProps,
        "product_id" | "updated_at"
      >>
    ) => {
      state.singleData = action.payload;
    }
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

    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleData = action.payload;
      state.imageUrl = action.payload.image_url;
    })
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message as string;
    })
  }
});

export const {
  filteredProducts,
  searchProducts,
  setTempImage,
  deleteTempImage,
  setNewProduct,
  clearTempImage
} = productsSlice.actions;

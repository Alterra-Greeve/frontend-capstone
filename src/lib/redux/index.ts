import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "@/lib/redux/api/auth";
import { usersSlice } from "./api/users";
import { forumSlice } from "@/lib/redux/api/forum";
import { challengesSlice } from "./api/challenges";
import impactSlice from "./api/impact";
import { productsSlice } from "./api/products";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    challenges: challengesSlice.reducer,
    forum: forumSlice.reducer,
    impact: impactSlice.reducer,
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

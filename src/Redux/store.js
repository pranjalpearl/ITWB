import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@/utils/storage";
import { setStore } from "@/utils/axiosInstance";

import authReducer from "./feature/auth/authSlice";


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isAuthenticated"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);


setStore(store);

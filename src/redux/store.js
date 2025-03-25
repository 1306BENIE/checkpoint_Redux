import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Configuration de Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store Redux
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

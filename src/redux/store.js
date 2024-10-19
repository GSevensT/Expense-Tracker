import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      token: null,
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload;
      },
      clearToken: (state) => {
        state.token = null;
      },
    },
  });
  
  const persistConfig = {
    key: 'expense_auth',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
  
  const store = configureStore({
    reducer: {
      auth: persistedReducer,
    },
  });
  
  // Create a persistor
  const persistor = persistStore(store);
  
  export { store, persistor };
  export const { setToken, clearToken } = authSlice.actions;
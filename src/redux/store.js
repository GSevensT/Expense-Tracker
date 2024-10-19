// store.js
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    sid: null,
    refreshToken: null,
  },
  reducers: {
    setTokens: (state, action) => {
      const { accessToken, sid, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.sid = sid;
      state.refreshToken = refreshToken;
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.sid = null;
      state.refreshToken = null;
    },
  },
});

// Persist configuration for the auth slice
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'sid', 'refreshToken'], // Specify which tokens to persist
};

// Create a persisted reducer
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

// Configure the store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);

// Export actions for use in components
export const { setTokens, clearTokens } = authSlice.actions;

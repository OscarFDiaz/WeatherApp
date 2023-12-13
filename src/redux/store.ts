import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  // Agrega otros slices aquí si los tienes
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

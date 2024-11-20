import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import customerReducer from './customer/customerSlice'; 
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { addMenu1Reducer, addMenu2Reducer, addMenuReducer } from './menu/menuSlice';


// Persist Config
const persistConfig = {
  key: 'root',
  storage,
  timeout: 50, 
};

// Combine Reducers
const rootReducer = combineReducers({
  customers: customerReducer,
  menu: addMenuReducer,
  menu1: addMenu1Reducer,
  menu2: addMenu2Reducer
});

// Create Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor for the Store
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

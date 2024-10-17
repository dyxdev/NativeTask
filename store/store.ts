import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'

// Slices
import tasksSlice from './slices/tasksSlice';
import mockFetchSlice from './slices/mockDataSlice';


const rootReducer = combineReducers({
  tasks: tasksSlice,
  mock: mockFetchSlice
});

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Persist config reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist'; // 修正导入路径
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // 修正变量名

export const store = configureStore({
    reducer: persistedReducer, // 使用修正后的 persistedReducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);

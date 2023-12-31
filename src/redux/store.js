import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import homeReducer from './slice/homeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineReducers({
    // login: loginReducer,
    home: homeReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    timeout: null,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['home'], //Things u want to persist
    blacklist: [], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store);
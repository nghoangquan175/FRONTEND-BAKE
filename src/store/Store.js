import RootReducer from "../reducer/RootReducer";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

export { store, persistor }
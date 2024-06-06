import {configureStore} from '@reduxjs/toolkit'
import termsOfUseReducer from './slices/termsOfUseSlice'
import authReducer from './slices/roleSlice'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistedTermsOfUseReducer = persistReducer({key: 'termsOfUse', storage}, termsOfUseReducer)
const persistedAuthReducer = persistReducer({key: 'auth', storage}, authReducer)

export default () => {
    let store = configureStore({
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
        reducer: {
            termsOfUse: persistedTermsOfUseReducer,
            auth: persistedAuthReducer
        },
    })
    let persistor = persistStore(store)
    return {store, persistor}
}

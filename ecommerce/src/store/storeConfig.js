import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import usuarioReducer from './reducers/usuarios/usuario'

const reducers = combineReducers({
    usuario: usuarioReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const storeConfig = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(storeConfig)

export { storeConfig, persistor }
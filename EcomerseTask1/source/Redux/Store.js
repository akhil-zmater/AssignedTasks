// import { configureStore } from "@reduxjs/toolkit";
// import CartReducer from '../../source/Redux/Reducer/CartReducer';

// export const Store = configureStore({
//     reducer: {
//         CartReducer: CartReducer  
//     }
// });

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import CartReducer from './Reducer/CartReducer';
import { createStore } from 'redux';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, CartReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)


// persistor.persist().then(() => {
//     const currentState = store.getState();
//     console.log(currentState);
//   });
  
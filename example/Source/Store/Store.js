import {configureStore} from '@reduxjs/toolkit';
import cartreducer from './Slice';

const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});
export default store;

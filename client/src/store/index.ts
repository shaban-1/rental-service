import { configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './reducer';

const store = configureStore({
	reducer: offersReducer,
});

export { store };
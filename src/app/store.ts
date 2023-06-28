import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {appReducer} from "../features/app/appReducer";
import {exampleReducer} from "../features/app/exampleSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    example: exampleReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

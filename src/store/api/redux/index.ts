import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import coronaDataSaga from "./covid-data/actions";
import coronaDataReducer from "./covid-data";
import commonReducer from "./common";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coronaData: coronaDataReducer,
    common: commonReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(coronaDataSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
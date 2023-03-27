/* eslint-disable func-style */
import { AxiosError, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import requests from "../../axiosservice/requests";
import { ApiError } from "../../types";

import { fetchCountriesDataStart,
  fetchCountriesDataSuccess,
  fetchCountriesDataError,
  fetchStatsStart,
  fetchStatsSuccess,
  fetchStatsError } from "./";

function* fetchCountriesData() {
  try {
    const response: AxiosResponse = yield call(requests.getAllCountries);
    yield put(fetchCountriesDataSuccess(response.data as CountriesData[]));
  }
  catch (error: any | AxiosError) {
    if (error.isAxiosError)
      yield put(fetchCountriesDataError(error as AxiosError));
    else yield put(fetchCountriesDataError(error as ApiError));
  }
}

function* fetchStats() {
  try {
    const response: AxiosResponse = yield call(requests.getGeneralStats);
    yield put(fetchStatsSuccess(response.data as Stats));
  }
  catch (error: any | AxiosError) {

    yield put(fetchStatsError(error as ApiError));
  }
}

export default function* coronaDataSaga() {
  yield takeLatest(fetchCountriesDataStart.type, fetchCountriesData);
  yield takeLatest(fetchStatsStart.type, fetchStats);
}

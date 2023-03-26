import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiError } from "../../types";

type CoronaDataState = {
  countries: CountriesData[] | null,
  stats: Stats | null
  loading: boolean,
  error: ApiError | null;
}

const initialState: CoronaDataState = {
  countries: null,
  stats: null,
  loading: false,
  error: null
};

const coronaDataSlice = createSlice({
  name: "coronaData",
  initialState,
  reducers: {
    fetchCountriesDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCountriesDataSuccess(state, action: PayloadAction<CountriesData[]>) {
      state.countries = action.payload;
      state.loading = false;
    },
    fetchCountriesDataError(state, action: PayloadAction<ApiError>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStatsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStatsSuccess(state, action: PayloadAction<Stats>) {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsError(state, action: PayloadAction<ApiError>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchCountriesDataStart,
  fetchCountriesDataSuccess,
  fetchCountriesDataError,
  fetchStatsStart,
  fetchStatsSuccess,
  fetchStatsError } = coronaDataSlice.actions;

export default coronaDataSlice.reducer;

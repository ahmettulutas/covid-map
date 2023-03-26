import { RootState } from "..";
import { selectSearchQuery } from "../common/selectors";

export const selectAllCountryData = (state:RootState) => state.coronaData.countries;
export const selectStats = (state:RootState) => state.coronaData.stats;

export const selectFilteredCountries = (state:RootState) => {
  const searchTerm = selectSearchQuery(state);
  const allCountries = selectAllCountryData(state);
  return allCountries?.filter((item:CountriesData) => item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
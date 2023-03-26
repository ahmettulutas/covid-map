import React from "react";
import { selectFilteredCountries } from "~/store/api/redux/covid-data/selectors";
import { useAppSelector } from "~/utils/hooks";
import { SearchBar } from "../UIComponents";

const DropdownSearch:React.FC = () => {
  const filteredData = useAppSelector(selectFilteredCountries);
  return (
    <div className="px-2">
      <SearchBar />
      <section className={`${!filteredData ? "animate-pulse bg-gray-200" : ""} h-60 overflow-y-scroll custom-scrollbar`}>
        <ul>
          {filteredData?.map(item => (
            <div key={item.countryInfo._id} className="flex justify-between p-2 even:bg-gray-100 dark:even:bg-transparent">
              <p>{item.country}</p>
              <p>{item.cases.toLocaleString("en-US")}</p>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default React.memo(DropdownSearch);

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Layout from "~/components/Layout";
import { StatsContainer } from "~/components/UIComponents";
import { useAppSelector } from "~/utils/hooks";

const CountryDetailPage:React.FC = () => {

  const { id } = useParams();
  const { t } = useTranslation();
  const countries = useAppSelector(state => state.coronaData.countries);
  const filteredCountry = useMemo(() => countries?.find(item => String(item.countryInfo._id) === id), [countries, id]);

  const tableHeadings = filteredCountry && Object.entries(filteredCountry).map(([key, values], index) => {
    if (typeof values !== "object")
      return (
        <th key={index} className="border border-gray-300 px-4 py-2 font-medium">{`${t(`lbl.${key}`)}`}</th>
      );
  });

  const tableRows = filteredCountry && Object.values(filteredCountry).map((value, index) => {
    if (typeof value !== "object")
      return (
        <td key={index}
          className={`${value < 0 ? "text-green-400" : value > 0 ? "text-red-400" : ""} border border-gray-300 px-4 py-2 text-center`}>
          {value.toLocaleString("en-US")}
        </td>
      );
  });

  return (
    <Layout>
      <div className="container">
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-2xl">{filteredCountry?.country}</h1>
          <img className="w-10 h-auto" src={filteredCountry?.countryInfo.flag} />
        </div>
        <section className="grid gap-4 grid-cols-1 w-full overflow-x-hidden">
          <StatsContainer data={filteredCountry} />
          <div className="overflow-x-auto">
            <table className="table-auto w-full lg:w-[30%] m-auto my-4">
              <tbody>
                <tr>{tableHeadings}</tr>
                <tr>{tableRows}</tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>

  );
};

export default CountryDetailPage;

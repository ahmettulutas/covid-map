import React from "react";
import Layout from "~/components/Layout";
import DropdownSearch from "~/components/SelectDropdown";
import { LoadingSpinner } from "~/components/UIComponents";
import ErrorModal from "~/components/UIComponents/ErrorModal";
import CovidMap from "~/components/UIComponents/Map";
import StatsContainer from "~/components/UIComponents/StatsContainer";
import { useAppSelector } from "~/utils/hooks";

const HomePage:React.FC = () => {
  const coronaData = useAppSelector(state => state.coronaData);
  return (
    <Layout>
      {
        coronaData.loading ?
          <LoadingSpinner />
          :
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 container">
            <section className="grid gap-4 grid-cols-1 col-span-2">
              <StatsContainer data={coronaData?.stats} />
              <CovidMap />
            </section>
            <DropdownSearch />
            <ErrorModal />
          </div>
      }
    </Layout>
  );
};

export default HomePage;
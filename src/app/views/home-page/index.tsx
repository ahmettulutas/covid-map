import React from "react";
import Layout from "~/components/Layout";
import { LoadingSpinner } from "~/components/UIComponents";
import CovidMap from "~/components/UIComponents/Map";
import StatsContainer from "~/components/UIComponents/StatsContainer";
import { useAppSelector } from "~/utils/hooks";

const HomePage = () => {
  const data = useAppSelector(state => state.coronaData);  
  const stats = useAppSelector(state => state.coronaData.stats);
  return (
    <Layout>
      {
        data.loading ?
          <LoadingSpinner />
          :
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 container">
          <section className="grid gap-4 grid-cols-1 col-span-2">
            <StatsContainer data={stats} />
            <CovidMap />
          </section>
          <h2>SearchBar</h2>
          </div>
      }
    </Layout>
  );
};

export default HomePage;
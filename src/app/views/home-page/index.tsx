import React from "react";
import Layout from "~/components/Layout";
import { LoadingSpinner } from "~/components/UIComponents";
import CovidMap from "~/components/UIComponents/Map";
import { useAppSelector } from "~/utils/hooks";

const HomePage = () => {
  const data = useAppSelector(state => state.coronaData);
  return (
    <Layout>
      {
        data.loading ?
          <LoadingSpinner />
          :
          <>
            <CovidMap />
            {/*             <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {data.countries?.map(country => <Animate.FadeIn key={country.country}>
                <h1>{country.deaths}</h1>
              </Animate.FadeIn>
              )}
            </div> */}
          </>
      }
    </Layout>
  );
};

export default HomePage;
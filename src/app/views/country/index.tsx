import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Layout from "~/components/Layout";

const CountryDetailPage = () => {

  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{id}</div>
    </Layout>

  );
};

export default CountryDetailPage;

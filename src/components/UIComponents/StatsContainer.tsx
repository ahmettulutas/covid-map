import React from "react";
import { useTranslation } from "react-i18next";
import StatBox from "./StatBox";

type DataProps = {
  todayCases?: number;
  cases?: number;
  todayRecovered?: number;
  recovered?: number;
  todayDeaths?: number;
  deaths?: number;
};

type StatsContainerProps<T extends DataProps | null | undefined> = {
  data: T;
};

const StatsContainer = <T extends DataProps | null | undefined>({ data }: StatsContainerProps<T>) => {

  const { t } = useTranslation();
  return (
    <div className="grid gap-2 xs:grid-cols-1 sm:grid-cols-3 h-auto">
      <StatBox title={t("lbl.cases")} todayCases={data?.todayCases} total={data?.cases} type="danger"/>
      <StatBox title={t("lbl.recovered")} todayCases={data?.todayRecovered} total={data?.recovered} type="success"/>
      <StatBox title={t("lbl.deaths")} todayCases={data?.todayDeaths} total={data?.deaths} type="danger"/>
    </div>
  );
};

export default StatsContainer;
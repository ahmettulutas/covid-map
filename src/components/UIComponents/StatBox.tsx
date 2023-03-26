import React from "react";
import { Enums } from "~/lib/enums";

type TStatBox = {
  title: string,
  todayCases: number | undefined,
  total: number | undefined,
  type: Enums["status"]
}

const StatBox:React.FC<TStatBox> = ({ title, todayCases, total, type }) => {
  const coloring = {
    danger: { text: "text-red-400", border: "border-t-red-400" },
    success: { text: "text-green-400", border: "border-t-green-400" }
  };

  return (
    <div className={`shadow-sm rounded-md p-4 ${coloring[type].border} border-4`}>
      <h2>{title}</h2>
      <p className={`${!total ? "animate-pulse bg-gray-200 h-3" : ""} ${coloring[type].text} text-xl`}>{total?.toLocaleString("en-US")}</p>
      {todayCases === undefined ?
        <p className="animate-pulse bg-gray-200 h-3 mt-2"></p>
        :
        <p>{`+ ${todayCases?.toLocaleString("en-US")}`}</p>
      }
    </div>
  );
};

export default StatBox;
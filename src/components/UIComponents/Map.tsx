import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useAppSelector } from "~/utils/hooks";
import { Link } from "react-router-dom";
import Leaflet from "leaflet";
import { useTranslation } from "react-i18next";

const CovidMap:React.FC = () => {
  const covidData = useAppSelector(state => state.coronaData.countries);
  const { t } = useTranslation();

  useEffect(() => {
    (async function init() {
      Leaflet.Icon.Default.mergeOptions({
        iconSize: [16, 16],
        shadowSize: [16, 16]
      });
    })();
  }, []);

  return (
    <MapContainer
      className="h-80 m-auto w-full lg:w-[50%]"
      center={[39, 35]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        noWrap
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      {covidData?.map(country => (
        <Marker
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}

        >
          <Popup>
            <h2>{country.country}</h2>
            <p>{t("lbl.cases")}: {country.cases}</p>
            <p>{t("lbl.deaths")}: {country.deaths}</p>
            <p>{t("lbl.recovered")}: {country.recovered}</p>
            <Link to={`/country/${country.countryInfo._id}`}>{t("lbl.viewDetails")}</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;

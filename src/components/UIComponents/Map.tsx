import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useAppSelector } from "~/utils/hooks";
import { Link } from "react-router-dom";
import { Icon } from "leaflet";
import { useTranslation } from "react-i18next";
import SearchIcon from "~/assets/icons/search.svg";
import marker from "../../assets/icons/marker-icon.png";


const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [16, 16],
  shadowSize: [16, 16]
});

const ZoomControl:React.FC<{coords:[number, number]}> = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 5);
  return null;
};

const CovidMap:React.FC = () => {
  const covidData = useAppSelector(state => state.coronaData.countries);
  const { t } = useTranslation();
  const selectedCountry = useAppSelector(state => state.common.selectedCountry);

  return (
    <MapContainer
      className="h-80 w-full"
      center={[39, 35]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        noWrap
        minZoom={3}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      {covidData?.map(country => (
        <Marker
          icon={myIcon}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <h2 className="text-lg">{country.country}</h2>
            <p className="text-red-400 m-1">{t("lbl.cases")}: {country.cases.toLocaleString("en-US")}</p>
            <p className="text-red-400 m-1">{t("lbl.deaths")}: {country.deaths.toLocaleString("en-US")}</p>
            <p className="text-green-400 m-1">{t("lbl.recovered")}: {country.recovered.toLocaleString("en-US")}</p>
            <Link className="hover:underline flex gap-1" to={`/country/${country.countryInfo._id}`}>
              {t("lbl.viewDetails")}
              <SearchIcon className="w-4 h-4"/>
            </Link>
          </Popup>
          <ZoomControl coords={[(selectedCountry?.countryInfo.lat || 35), (selectedCountry?.countryInfo.long || 50)]}/>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;

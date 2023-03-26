import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
const Footer:React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-gray-400">
      <div className="container flex px-3 py-4">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold">{t("lbl.about")}</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <a href="https://github.com/ahmettulutas/covid-map" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
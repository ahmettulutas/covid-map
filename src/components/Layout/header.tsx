import React, { useState } from "react";
import DarkModeToggle from "../UIComponents/DarkModeToggle";
import MenuButton from "~/assets/icons/menu-button.svg";
import ToggleLang from "../UIComponents/ToggleLang";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header:React.FC = () => {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-30 top-0 fixed dark:bg-gray-900 bg-white">
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <label className="cursor-pointer md:hidden block" onClick={() => setOpen(!open)}>
          <MenuButton className="fill-current text-gray-900 dark:text-yellow-500"/>
        </label>
        <div className={`${open ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full order-3 md:order-1`} id="menu">
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
            <li><Link className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4" to="/">{t("lbl.stats")}</Link></li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <Link className="flex items-center tracking-wide no-underline font-bold text-xl" to="#">
            COVIDMAP
          </Link>
        </div>
        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <ToggleLang />
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
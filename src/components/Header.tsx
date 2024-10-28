import React from "react";
import { motion } from "framer-motion";
import HangingLight from "./navbar/HangingLight";

type TPage = {
  name: string;
  url: string;
  photo: string;
};

const Header = () => {
  const pages: TPage = [];

  return (
    <header className={`flex justify-between`}>
      {/* left side only has a logo saying, 'Adarsh' */}
      <div className={`flex items-center`}>
        Adarsh
        {/* <img src="/logo.png" alt="Adarsh" className={`w-12 h-12`} /> */}
      </div>

      {/* right side has a nav bar with links that appear as a hanging lantern*/}
      <HangingLight />
    </header>
  );
};

export default Header;

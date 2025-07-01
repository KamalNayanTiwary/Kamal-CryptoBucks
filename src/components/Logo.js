import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-cyan flex items-center gap-2 text-lg font-bold
        justify-center md:justify-start"
    >
      <img src={logoSvg} alt="CryptoBucks" className="w-6 h-6" />
      <span>CryptoBucks</span>
    </Link>
  );
};

export default Logo;

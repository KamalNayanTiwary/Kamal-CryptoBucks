import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-full md:w-auto flex flex-col md:flex-row gap-2 md:gap-4 
      justify-center md:justify-end items-center mt-4 md:mt-0"
    >
      {["/", "/trending", "/saved"].map((path, i) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `w-full md:w-auto text-base text-center font-nunito px-4 py-2
            ${
              isActive
                ? "bg-cyan text-black"
                : "bg-gray-200 text-white hover:text-cyan"
            }
            rounded capitalize font-semibold transition-all duration-200`
          }
        >
          {["Crypto", "Trending", "Saved"][i]}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;

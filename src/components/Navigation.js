import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full md:w-[40%] mt-4 md:mt-16 flex flex-col md:flex-row gap-2 md:gap-0 justify-around items-center border border-cyan rounded-lg px-4">
      {["/", "/trending", "/saved"].map((path, i) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `w-full md:w-auto text-base text-center font-nunito px-4 py-2
            ${isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"}
            border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          {["Crypto", "Trending", "Saved"][i]}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;

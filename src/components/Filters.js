import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { CryptoContext } from "./../context/CryptoContext";

const Filters = () => {
  let { setCurrency, setSortBy, resetFunction } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className="w-full border-2 border-gray-100 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-4">
      <Search />

      <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Currency Input */}
        <form className="flex items-center" onSubmit={handleCurrencySubmit}>
          <label htmlFor="currency" className="mr-2 font-bold">
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-20 rounded bg-gray-200 placeholder:text-gray-100 pl-2 outline-0 border border-transparent focus:border-cyan text-sm"
          />
          <button type="submit" className="ml-1 cursor-pointer">
            <img src={submitIcon} alt="submit" className="w-full h-auto" />
          </button>
        </form>

        {/* Sort Dropdown */}
        <label className="flex items-center">
          <span className="font-bold mr-2">Sort by:</span>
          <div className="relative">
            <select
              name="sortby"
              className="rounded bg-gray-200 text-sm pl-2 pr-10 py-1 capitalize focus:outline-0"
              onChange={handleSort}
            >
              <option value="market_cap_desc">market cap desc</option>
              <option value="market_cap_asc">market cap asc</option>
              <option value="volume_desc">volume desc</option>
              <option value="volume_asc">volume asc</option>
              <option value="id_desc">id desc</option>
              <option value="id_asc">id asc</option>
              <option value="gecko_desc">gecko desc</option>
              <option value="gecko_asc">gecko asc</option>
            </select>
            <img
              src={selectIcon}
              alt="submit"
              className="w-4 h-4 absolute right-2 top-2 pointer-events-none"
            />
          </div>
        </label>

        {/* Reset Button */}
        <button
          className="w-8 h-8 ml-2 hover:scale-110 transition-all"
          onClick={resetFunction}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-full h-full fill-cyan"
            style={{ transform: "rotate(360deg)" }}
          >
            <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
            <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filters;

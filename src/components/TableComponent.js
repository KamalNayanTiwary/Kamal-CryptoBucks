import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CryptoContext } from "./../context/CryptoContext";
import Pagination from "./Pagination";
import { StorageContext } from "./../context/StorageContext";

const SaveBtn = ({ data }) => {
  const { saveCoin, allCoins, removeCoin } = useContext(StorageContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (allCoins.includes(data.id)) {
      removeCoin(data.id);
    } else {
      saveCoin(data.id);
    }
  };

  return (
    <button
      className="outline-0 border-0 bg-none cursor-pointer"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-[1.5rem] h-[1.5rem] ml-1.5 ${
          allCoins.includes(data.id) ? "fill-cyan" : "fill-gray-300"
        } hover:fill-cyan`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
          6.5 3.5 5 5.5 5c1.54 0 3.04.99 
          3.57 2.36h1.87C13.46 5.99 14.96 5 
          16.5 5 18.5 5 20 6.5 20 
          8.5c0 3.78-3.4 6.86-8.55 
          11.54L12 21.35z" />
      </svg>
    </button>
  );
};

const TableComponent = () => {
  const { cryptoData, currency, error } = useContext(CryptoContext);

  return (
    <>
      <div className="w-full overflow-x-auto mt-9">
        <div className="inline-block min-w-full align-middle">
          <div className="shadow overflow-hidden border border-gray-100 rounded">
            {cryptoData ? (
              <table className="min-w-[650px] w-full table-auto">
                <thead className="capitalize text-sm sm:text-base text-gray-100 font-medium border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Asset</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Total Volume</th>
                    <th className="px-4 py-2 text-left">Market Cap Change</th>
                    <th className="px-4 py-2 text-left hidden lg:table-cell">1H</th>
                    <th className="px-4 py-2 text-left hidden lg:table-cell">24H</th>
                    <th className="px-4 py-2 text-left hidden lg:table-cell">7D</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((data) => (
                    <tr
                      key={data.id}
                      className="text-sm sm:text-base text-gray-100 border-b border-gray-100 hover:bg-gray-200"
                    >
                      <td className="px-4 py-3 flex items-center gap-2 uppercase">
                        <SaveBtn data={data} />
                        <img
                          className="w-5 h-5"
                          src={data.image}
                          alt={data.name}
                        />
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.symbol}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: currency,
                        }).format(data.current_price)}
                      </td>
                      <td className="px-4 py-3">{data.total_volume}</td>
                      <td className="px-4 py-3">
                        {data.market_cap_change_percentage_24h}%
                      </td>
                      <td
                        className={`px-4 py-3 hidden lg:table-cell ${
                          data.price_change_percentage_1h_in_currency > 0
                            ? "text-green"
                            : "text-red"
                        }`}
                      >
                        {Number(
                          data.price_change_percentage_1h_in_currency
                        ).toFixed(2)}
                      </td>
                      <td
                        className={`px-4 py-3 hidden lg:table-cell ${
                          data.price_change_percentage_24h_in_currency > 0
                            ? "text-green"
                            : "text-red"
                        }`}
                      >
                        {Number(
                          data.price_change_percentage_24h_in_currency
                        ).toFixed(2)}
                      </td>
                      <td
                        className={`px-4 py-3 hidden lg:table-cell ${
                          data.price_change_percentage_7d_in_currency > 0
                            ? "text-green"
                            : "text-red"
                        }`}
                      >
                        {Number(
                          data.price_change_percentage_7d_in_currency
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : !error.data && !error.search ? (
              <div className="w-full min-h-[50vh] flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-solid border-cyan rounded-full border-b-gray-200 animate-spin" />
                <span className="text-base ml-2">please wait...</span>
              </div>
            ) : error.data || error.search ? (
              <h1 className="min-h-[60vh] text-lg text-red flex items-center justify-center">
                {error.data
                  ? error.data
                  : error.search
                  ? error.search
                  : "Something unexpected happened!"}
              </h1>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-4 capitalize gap-3 md:gap-0">
        <span>
          Data provided by {" "}
          <a
            className="text-cyan"
            href="http://www.coingecko.com"
            rel="noreferrer"
            target="_blank"
          >
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>
    </>
  );
};

export default TableComponent;

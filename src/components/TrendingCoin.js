import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  const navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="bg-gray card p-4 rounded-lg cursor-pointer hover:bg-opacity-40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4"
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          {/* Text Info */}
          <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
            <h3 className="text-base flex items-center justify-center sm:justify-start my-1">
              <span className="text-gray capitalize">Name:&nbsp;</span>
              <span className="text-cyan font-semibold">{data.name}</span>
              <img
                src={data.small}
                alt={data.name}
                className="w-6 h-6 mx-2 rounded-full"
              />
            </h3>

            <h3 className="text-base flex items-center justify-center sm:justify-start my-1">
              <span className="text-gray capitalize">Market Cap Rank:&nbsp;</span>
              <span className="text-cyan">{data.market_cap_rank}</span>
            </h3>

            <h3 className="text-base flex items-center justify-center sm:justify-start my-1">
              <span className="text-gray capitalize">Price (in BTC):&nbsp;</span>
              <span className="text-cyan">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "btc",
                  maximumSignificantDigits: 5,
                }).format(data.price_btc)}
              </span>
            </h3>

            <h3 className="text-base flex items-center justify-center sm:justify-start my-1">
              <span className="text-gray capitalize">Score:&nbsp;</span>
              <span className="text-cyan">{data.score}</span>
            </h3>
          </div>

          {/* Coin Logo */}
          <img
            src={data.large}
            alt={data.name}
            className="w-20 h-20 object-contain rounded-full"
          />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin" role="status" />
          <span className="ml-2">Please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;

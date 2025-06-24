import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "./../context/CryptoContext";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  const handleInput = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <>
      <form
        className="w-full sm:w-96 relative flex items-center ml-2 sm:ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 py-1
            outline-0 border border-transparent focus:border-cyan"
          placeholder="Search crypto..."
        />
        <button type="submit" className="absolute right-2 cursor-pointer">
          <img src={searchIcon} className="w-5 h-5" alt="search" />
        </button>
      </form>

      {searchText.length > 0 && (
        <ul
          className="absolute top-[3.5rem] left-2 sm:left-7 w-[90vw] sm:w-96 max-h-96 rounded z-10
            overflow-y-auto py-2 bg-gray-200 bg-opacity-80 backdrop-blur-md
            scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200"
        >
          {searchData ? (
            searchData.map((coin) => (
              <li
                key={coin.id}
                onClick={() => selectCoin(coin.id)}
                className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <img
                  className="w-[1rem] h-[1rem] mr-2"
                  src={coin.thumb}
                  alt={coin.name}
                />
                <span>{coin.name}</span>
              </li>
            ))
          ) : (
            <div className="w-full h-20 flex justify-center items-center">
              <div className="w-6 h-6 border-4 border-cyan rounded-full border-b-gray-200 animate-spin" />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      )}
    </>
  );
};

const Search = () => {
  const { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce((val) => {
    getSearchResult(val);
  }, 1000);

  return (
    <div className="relative w-full sm:w-auto">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;

import React from "react";
import logoSvg from "./logo.svg"; // default react logo if still using
import Logo from "./components/Logo"; // ✅ your Logo component
import Navigation from "./components/Navigation"; // ✅ your Navigation component

function App() {
  return (
    <div className="bg-gray-900 text-white px-4">
      {/* Header: Logo + Navigation */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between px-4 mt-4 md:mt-8 relative"
      >
        <Logo />
        <Navigation />
      </div>

      {/* Default React content */}
      <header className="flex flex-col items-center text-center mt-8">
        <img
          src={logoSvg}
          alt="React Logo"
          className="w-32 h-32 animate-spin mb-6"
        />

        <p className="text-lg sm:text-xl md:text-2xl text-red-400 mb-4">
          Edit <code className="bg-gray-800 px-1 py-0.5 rounded">src/App.js</code> and save to reload.
        </p>

        <a
          className="text-indigo-400 hover:underline text-sm sm:text-base"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

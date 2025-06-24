import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <header className="flex flex-col items-center text-center">
        <img
          src={logo}
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

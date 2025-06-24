
# Crypto Screener Application

A beginner-friendly React application to explore and monitor cryptocurrencies. This project serves as a tutorial for learning key React concepts and integrating external APIs.

## Features

- **Search**: Quickly find cryptocurrencies by name or symbol.
- **Sort**: Organize cryptocurrencies by metrics like price, market cap, or volume.
- **Details View**: View detailed information about individual cryptocurrencies.
- **Pagination**: Navigate through large datasets efficiently.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.
- **API Integration**: Fetch real-time data using the [CoinGecko API](https://www.coingecko.com/en/api).

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **Routing**: React Router
- **Hooks**: useState, useEffect, useRef

## Getting Started

### Prerequisites

- Node.js installed on your system
- Basic knowledge of JavaScript and React.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-screener.git
   ```

2. Navigate to the project directory:
   ```bash
   cd crypto-screener
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Usage

1. Use the search bar to find specific cryptocurrencies.
2. Click on column headers to sort data.
3. Click on a cryptocurrency name to view detailed information.
4. Use pagination controls to navigate through the list.

## Folder Structure

```plaintext
crypto-screener/
├── public/
├── src/
│   ├── components/   # Reusable components (e.g., SearchBar, Table, Pagination)
│   ├── pages/        # Main pages (e.g., HomePage, DetailsPage)
│   ├── context/      # Context API for state management
│   ├── utils/        # Helper functions and API calls
│   └── App.js        # Main application file
├── package.json      # Project configuration
└── README.md         # Project documentation
```

## API Reference

This app uses the [CoinGecko API](https://www.coingecko.com/en/api) for cryptocurrency data. Ensure to comply with their usage guidelines.

### Example Endpoints

- **List Cryptocurrencies**: `https://api.coingecko.com/api/v3/coins/markets`
- **Single Cryptocurrency Details**: `https://api.coingecko.com/api/v3/coins/{id}`

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.



### Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api) for providing cryptocurrency data.
- React.js and Tailwind CSS for their amazing tools and frameworks.

---




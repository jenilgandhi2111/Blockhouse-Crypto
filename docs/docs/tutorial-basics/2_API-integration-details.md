---
sidebar_position: 5
---

# API Integration Details

## Introduction:
I have used CoinGecko API to get the top 5 cryptocurrency prices. Alongside, I applied multiple filters to make the app look visually appealing.

## Filters Used:
- **vs_currency**: `usd` - This filter specifies the prices should be in USD.
- **order**: `market_cap_desc` - This sorts the coins by market capitalization in descending order to ensure we get the top 5 popular ones.
- **per_page**: `5` - Limits the results to the top 5 cryptocurrencies (As stated in the project).
- **page**: `1` - Specifies that the first page of the results should be displayed.
- **sparkline**: `false` - Disables the display of sparkline data (small, detailed charts) for each coin.
- **price_change_percentage**: `24h` - Filters the coins to show the price change percentage over the last 24 hours.
- **url used:**`'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h'`


## How data is fetched and updated?
- Data is fetched using the `useQuery` hook from `@tanstack/react-query` in the `CryptoList` component. The `fetchCryptos` function makes a `GET` request to the CoinGecko API to retrieve the top 5 cryptocurrencies sorted by market capitalization in USD.
- The query is set to refetch automatically at intervals by utilizing the `staleTime` option (5000ms).
- If the user clicks the "Refresh Prices" button, the `handleRefresh` function is triggered, which calls `refetch()` to fetch the latest data from the API.
- A search feature is included that allows the user to filter cryptocurrencies by name or symbol. The `filteredData` array holds the filtered list based on the `searchTerm` entered by the user.
- The component handles loading and error states by displaying skeleton loaders while fetching data and showing an error message if the fetch fails.

## State Management:
- `searchTerm`: Stores the current search input for filtering the cryptocurrency list.
- `isRefreshing`: Tracks whether the "Refresh Prices" button is active (while new data is being fetched).
- `queryClient`: Used for caching and managing the query state with React Query.
- `data`, `isLoading`, `error`, `refetch`, `isFetching`: States returned from the `useQuery` hook to manage the fetched data and handle loading/error scenarios.

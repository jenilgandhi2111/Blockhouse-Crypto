---
sidebar_position: 7
---

# Challenges & Solutions

During the development of this project, several challenges arose. Below is a list of the key issues Iencountered and the solutions implemented to address them:

## 1. **Handling Asynchronous Data Fetching**  
   - **Challenge**: The app needed to fetch cryptocurrency data asynchronously from the CoinGecko API. Managing this data fetching and updating the UI without affecting the user experience posed a challenge.
   - **Solution**: To manage this, React Query was used. React Query’s `useQuery` hook was leveraged to handle the asynchronous fetch, while also providing caching, background data syncing, and automatic refetching. This approach helped simplify data management and reduce the need for manual handling of loading, error, and refresh states.

## 2. **Ensuring Smooth UI Updates on Data Fetching**  
   - **Challenge**: When data was being fetched, showing loading states, and then smoothly updating the UI without causing flickering or delays was a concern.
   - **Solution**: I implemented skeleton loaders in place of the actual data using conditional rendering, which allowed users to see that the app was fetching data while avoiding a blank screen. Additionally, the app uses `staleTime` in React Query to ensure data is cached, reducing unnecessary loading states during frequent data fetching.

## 3. **Managing Search and Filter Functionality Efficiently**  
   - **Challenge**: Filtering the displayed cryptocurrencies based on the search term (name or symbol) without causing performance bottlenecks was a concern, specially when handling larger datasets.
   - **Solution**: The filtering logic was applied directly to the data fetched from the API. Using React’s `useState` hook for the search term allowed for real-time filtering, while only filtering the current list of cryptocurrencies. This minimized any performance issues and ensured smooth interactions.

## 4. **Handling Refresh and Re-fetching Data**  
   - **Challenge**: The app required a way to refresh the cryptocurrency prices on demand. Ensuring the refresh was seamless and didn’t cause any interruptions to the user experience or result in redundant data fetching was a challenge.
   - **Solution**: React Query’s `refetch` function was used to refresh the data when the "Refresh Prices" button was clicked. By keeping track of the refresh state using `isFetching` and `isRefreshing`, the UI provided real-time feedback to users, showing them that data was being fetched without causing UI disruptions.

## 5. **Dealing with API Limitations and Rate Limits**  
   - **Challenge**: CoinGecko API has rate limits that could restrict the number of requests we could make in a short time, especially with frequent data refreshes.
   - **Solution**: To mitigate this, I set up a short `staleTime` in React Query to ensure that data is not fetched too frequently and to avoid hitting the rate limit. Additionally, the app caches the image data for a while before re-fetching, reducing the number of unnecessary requests.

## 6. **Error Handling for Failed API Requests**  
   - **Challenge**: Handling errors when the API request fails (e.g., due to network issues) in a way that is informative to the user and doesn’t leave the app in a broken state.
   - **Solution**: React Query’s built-in `error` state was utilized to detect when a fetch failed. In case of an error, a "failed to fetch" message was displayed, informing the user that the data could not be fetched. This ensured that the app remained resilient even in the case of failure and offered feedback to the user.



## Conclusion
Building this project involved several challenges related to data fetching, filtering, performance optimization, and handling edge cases. By leveraging React Query, careful state management, and implementing efficient error handling, the app is both performant and user-friendly. The solutions put in place not only enhanced the overall user experience but also ensured that the app remained robust and scalable for future improvements. Also, we can extend this using pagination to ensure effective state management.

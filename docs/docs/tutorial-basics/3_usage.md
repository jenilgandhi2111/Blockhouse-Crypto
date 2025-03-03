---
sidebar_position: 6
---

# State Management Explanation

## Why React Query?

React Query was chosen for managing the state related to fetching, caching, and synchronizing remote data in this application. Here are the main reasons for choosing React Query:

### 1. **Automatic Data Fetching and Caching**:
- React Query streamlines the process of fetching and caching data via the `useQuery` hook. This simplifies API data management by eliminating the need to manually handle HTTP requests and responses. 
- By using `staleTime`, React Query ensures the data remains current for a designated period, reducing unnecessary re-fetching and enhancing overall application efficiency.
### 2. **Background Data Syncing (Refetching)**:
- The framework offers integrated capabilities to refetch data as necessary. Within the `CryptoList` component, users can refresh cryptocurrency prices with a simple click on the `refetch` function, which triggers retrieval of the latest information from the API. 
- This guarantees that data remains aligned with what is hosted on remote servers, enabling users to access real-time updates reliably.
### 3. **Error Handling**:
  - Error handling is made easier through an accessible error state provided by React Query, which allows developers to display user-friendly messages when a fetch operation fails. 
  - This feature proves especially beneficial during instances such as network disruptions or API outages since it enables clear communication with users regarding any issues encountered.
### 4. **Optimized Performance**:
   - By effectively caching information and performing background updates, React Query minimizes redundant data retrieval upon each render cycle which leads to superior performance outcomes. 
   - With capabilities like pagination and filters built in, there is no requirement for manual state adjustments whenever changes occur in fetched data; thus contributing to a more fluid experience for end-users. 

## Conclusion for not choosing Zustand or Context API?

While Zustand and Context API are excellent state management solutions, React Query was preferred beacause it is built keeping server state management in mind, ease of data fetching, refetching, background syncing and caching.


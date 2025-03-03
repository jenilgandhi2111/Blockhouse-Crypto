import React from 'react'

const SearchBar = ({ onSearchChange }: { onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <label className="input w-full flex items-center gap-2 p-2 border rounded-lg bg-base-100 shadow-md">
      <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        className="w-full bg-transparent outline-none"
        placeholder="Search"
        onChange={onSearchChange}
      />
    </label>
  )
}

export default SearchBar

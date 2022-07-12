import React, { useState } from "react";

const Search = ({ allPosts, setSearchTerm, searchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.searchBar.value);
    console.log(searchTerm);
  };
  return (
    <form id="searchBar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        required
        name="searchBar"
        placeholder="Search all postings"
      ></input>
      <button name="searchBar" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

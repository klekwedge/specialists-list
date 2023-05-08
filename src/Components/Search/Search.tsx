import { useState } from "react";
import "./Search.scss";
import SearchIcon from "/src/assets/svg/search.svg";
import FilterIcon from "/src/assets/svg/filter.svg";

function Search() {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  };

  return (
    <>
      <h2 className="specialist__search-title">Поиск</h2>
      <div className="specialist__input-container">
        <img
          className="specialist__search"
          src={SearchIcon}
          alt="Search icon"
        />
        <input
          value={inputValue}
          onChange={changeInputValue}
          className="specialist__input"
          placeholder="Введи имя, тег, почту..."
        />
        <img
          className="specialist__filter"
          src={FilterIcon}
          alt="Filter icon"
        />
      </div>
    </>
  );
}

export default Search;

import { useState } from "react";
import "./Search.scss";
import SearchIcon from "/src/assets/svg/search.svg";
import FilterIcon from "/src/assets/svg/filter.svg";
import Sort from "../Sort/Sort";
import { SortValues } from "../../types/user";

interface SearchProps {
  inputValue: string;
  sortValue: SortValues;
  changeSortValue: (value: SortValues) => void;
  changeInputValue: (value: string) => void;
}

function Search({
  inputValue,
  sortValue,
  changeInputValue,
  changeSortValue,
}: SearchProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search">
      <h2 className="search__title">Поиск</h2>
      <div className="search__input-container">
        <img
          className="search__image"
          src={SearchIcon}
          alt="Search icon"
        />
        <input
          value={inputValue}
          onChange={(e) => changeInputValue(e.target.value)}
          className="search__input"
          placeholder="Введи имя, тег, почту..."
        />
        <img
          className="search__filter"
          src={FilterIcon}
          alt="Filter icon"
          onClick={() => setIsModalOpen(true)}
        />
        {isModalOpen ? (
          <Sort
            title={"Сортировка"}
            sort={sortValue}
            closeModal={closeModal}
            changeSort={changeSortValue}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Search;

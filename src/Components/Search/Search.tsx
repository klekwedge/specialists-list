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
          onChange={(e) => changeInputValue(e.target.value)}
          className="specialist__input"
          placeholder="Введи имя, тег, почту..."
        />
        <img
          className="specialist__filter"
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
    </>
  );
}

export default Search;

import { useState } from "react";
import "./Search.scss";
import SearchIcon from "/src/assets/svg/search.svg";
import FilterIcon from "/src/assets/svg/filter.svg";
import Modal from "../Modal/Modal";
import Sort from "../Sort/Sort";

interface SearchProps {
  inputValue: string;
  changeInputValue: (value: string) => void;
}

function Search({ inputValue, changeInputValue }: SearchProps) {
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
          <Modal title={"Сортировка"} closeModal={closeModal}>
            <Sort />
          </Modal>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Search;

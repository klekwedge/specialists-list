import "./Sort.scss";
import { SortValues } from "../../types/user";
import { useEffect, useState } from "react";
import closeIcon from "/src/assets/svg/close.svg";

interface SortProps {
  sort: SortValues;
  title: string;
  changeSort: (value: SortValues) => void;
  closeModal: () => void;
}

const Sort = ({ sort, title, changeSort, closeModal }: SortProps) => {


  return (
    <div className="modal" onClick={closeModal}>
      <section className="modal__main" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal__title"> {title}</h3>
        <button type="button" className="modal__button" onClick={closeModal}>
          <img className="modal__close" src={closeIcon} alt="Close Icon" />
        </button>
        <ul className="sort">
          <li className="sort__item">
            <input
              type="radio"
              className="custom-radio"
              name="sort"
              id="alphabet"
              value="alphabet"
              checked={sort === 'alphabet'}
              onChange={() => changeSort("alphabet")}
            />
            <label htmlFor="alphabet">По алфавиту</label>
          </li>
          <li className="sort__item">
            <input
              type="radio"
              name="sort"
              id="birthday"
              value="birthday"
              className="custom-radio"
              checked={sort === 'birthday'}
              onChange={() => changeSort("birthday")}
            />
            <label htmlFor="birthday">По дню рождения</label>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Sort;

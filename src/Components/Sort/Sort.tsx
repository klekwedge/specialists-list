import { useState } from "react";
import "./Sort.scss";

const Sort = () => {
  const [currentRadio, setCurrentRadio] = useState("alphabet");

  return (
    <ul className="sort">
      <li className="sort__item">
        <input
          type="radio"
          className="custom-radio"
          name="sort"
          id="alphabet"
          value="alphabet"
          checked={currentRadio === "alphabet"}
          onChange={() => setCurrentRadio("alphabet")}
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
          checked={currentRadio === "birthday"}
          onChange={() => setCurrentRadio("birthday")}
        />
        <label htmlFor="birthday">По дню рождения</label>
      </li>
    </ul>
  );
};

export default Sort;

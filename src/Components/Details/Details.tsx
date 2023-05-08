import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PlugImage from "/src/assets/img/avatar-plug.png";
import StarIcon from "/src/assets/svg/star.svg";
import PhoneIcon from "/src/assets/svg/phone.svg";
import ArrowIcon from "/src/assets/svg/arrow.svg";
import IUser from "../../types/user";
import "./Details.scss";

interface Birthday {
  date: string;
  diff: string | number;
}

const months = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

function Details() {
  const { specialistId } = useParams();
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [birthday, setBirthday] = useState<Birthday | null>(null);

  const formatDate = (date: string) => {
    const currentDate = date.split(".");
    currentDate[1] = months[currentDate[1]];
    return currentDate.join(" ");
  };

  useEffect(() => {
    if (currentUser) {
      const currentDate = formatDate(
        new Date(currentUser.birthday).toLocaleDateString()
      );

      const dateDiff = Math.floor(
        Math.abs(Date.now() - new Date(currentUser.birthday).getTime()) /
          (1000 * 3600 * 24 * 365)
      );

      setBirthday({
        date: currentDate,
        diff: dateDiff,
      });
    }
  }, [currentUser]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((req) => determineCurrentUser(req.data))
      .catch((e) => {
        console.log(e);
        throw new Error("Some error occurred while sending the request!!!");
      });
  }, [specialistId]);

  function determineCurrentUser(users: IUser[]) {
    const currentUser = users.find((user) => user.id === specialistId);
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }

  if (!currentUser) {
    return <></>;
  }

  // console.log(currentUser);

  return (
    <div className="details">
      <div className="details__header">
        <Link to="/">
          <img className="details__back" src={ArrowIcon} alt="arrow icon" />
        </Link>
        <img src={PlugImage} alt="user image" />
        <h1>
          {currentUser.firstName} {currentUser.lastName}{" "}
          <span>{currentUser.userTag}</span>
        </h1>
        <h2>{currentUser?.position}</h2>
      </div>

      <div className="details__footer">
        <div className="details__info">
          <div>
            <img src={StarIcon} alt="star icon" />
            <h3>{birthday?.date}</h3>
          </div>
          <h3>{birthday?.diff} лет</h3>
        </div>
        <div className="details__info">
          <img src={PhoneIcon} alt="phone icon" />
          <h3>{currentUser?.phone}</h3>
        </div>
      </div>
    </div>
  );
}

export default Details;

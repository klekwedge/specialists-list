import { Link } from "react-router-dom";
import "./SpecialistItem.scss";
import IUser from "../../types/user";
import PlugIcon from "/src/assets/img/avatar-plug.png";

interface SpecialistsItemProps {
  user: IUser;
}

function SpecialistsItem({ user }: SpecialistsItemProps) {

  return (
    <>
      {user ? (
        <li className="specialist__item specialist">
          <img
            src={PlugIcon}
            alt="specialist image"
            className="specialist__image"
          />
          <div className="specialist__info">
            <Link className="specialist__name" to={`/${user.id}`}>
              {`${user.firstName} ${user.lastName} `}
              <span>{user.userTag.toLowerCase()}</span>
            </Link>
            <h4 className="specialist__position">{user.position}</h4>
          </div>
        </li>
      ) : (
        ""
      )}
    </>
  );
}

export default SpecialistsItem;

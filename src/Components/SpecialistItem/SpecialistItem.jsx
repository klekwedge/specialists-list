import { Link } from "react-router-dom";
import "./SpecialistItem.scss";

function SpecialistsItem({ user }) {
  console.log(user);

  return (
    <>
      {user ? (
        <Link to={`/${user.id}`}>
          <li className="specialist__item specialist">
            <img
              // src={user.avatarUrl}
              src="#"
              alt="specialist image"
              className="specialist__image"
            />
            <div className="specialist__info">
              <h3 className="specialist__name">
                {`${user.firstName} ${user.lastName} `}
                <span>{user.userTag.toLowerCase()}</span>
              </h3>
              <h4 className="specialist__position">{user.position}</h4>
            </div>
          </li>
        </Link>
      ) : null}
    </>
  );
}

export default SpecialistsItem;

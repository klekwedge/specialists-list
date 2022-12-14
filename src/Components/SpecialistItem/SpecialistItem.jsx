import "./SpecialistItem.scss";

function SpecialistsItem({ user }) {
  console.log(user);

  return (
    <>
      {user ? (
        <li className="specialist__item specialist">
          <img
            // src={user.avatarUrl}
            src='#'
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
      ) : null}
    </>
  );
}

export default SpecialistsItem;

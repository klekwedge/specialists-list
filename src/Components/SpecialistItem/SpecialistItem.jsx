import "./SpecialistItem.scss";

function SpecialistsItem() {
  return (
    <li className="specialist__item specialist">
      <img src="#" alt="specialist image" className="specialist__image" />
      <div className="specialist__info">
        <h3 className="specialist__name">Name <span>role</span></h3>
        <h4 className="specialist__post">Post</h4>
      </div>
    </li>
  );
}

export default SpecialistsItem;

import MagnifyingGlassImage from "/src/assets/img/magnifying-glass.png";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <img
        className="not-found__image"
        src={MagnifyingGlassImage}
        alt="magnifying glass"
      />
      <h2 className="not-found__title">Мы никого не нашли</h2>
      <h3 className="not-found__subtitle">Попробуй скорректировать запрос</h3>
    </div>
  );
}

export default NotFound;

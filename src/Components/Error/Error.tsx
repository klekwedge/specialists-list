import FlyingSaucerImage from "/src/assets/img/flying-saucer.png";
import "./Error.scss";

function Error() {
  return (
    <div className="error">
      <img
        className="error__image"
        src={FlyingSaucerImage}
        alt="magnifying glass"
      />
      <h2 className="error__title">Какой-то сверхразум все сломал</h2>
      <h3 className="error__subtitle">Постараемся быстро починить</h3>
      <button className="error__button">Попробовать снова</button>
    </div>
  );
}

export default Error;

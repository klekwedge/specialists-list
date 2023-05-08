import "./InternetError.scss";

function InternetError() {
  return (
    <div className="internet-error">
      <h2 className="internet-error__title">Поиск</h2>
      <h3 className="internet-error__subtitle">
        Не могу обновить данные. Проверь соединение с интернетом.
      </h3>
    </div>
  );
}

export default InternetError;

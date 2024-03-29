import { Link } from "react-router-dom";
import "./Page404.scss";

function Page404() {
  return (
    <div className="page404">
      <div className="page404__mainbox">
        <div className="page404__err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="page404__err2">4</div>
        <div className="page404__msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page404;

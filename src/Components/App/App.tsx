import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";

const MainPage = lazy(() => import("../../pages/MainPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage"));
const Page404 = lazy(() => import("../../pages/Page404/Page404"));

function App() {
  return (
    <div className="_container">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:specialistId" element={<DetailsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

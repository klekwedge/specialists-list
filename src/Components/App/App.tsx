import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const MainPage = lazy(() => import("../../pages/MainPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage"));
const Page404 = lazy(() => import("../../pages/Page404"));

function App() {
  return (
    <div className='app'>
      <Router>
        <Suspense fallback={<h1>loading...</h1>}>
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

import "./App.css";
import MainList from "./Container/MainList";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import SinglePage from "./Container/SinglePage/SinglePage";

function App() {
  return (
    <>
      {/* <div>
        <MainList />
      </div> */}
      <div>
        {/* <SinglePage/> */}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<MainList />} />
          <Route path="/Home/SinglePage/:id" element={<SinglePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

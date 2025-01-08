import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import PlanPage from "./page/PlanPage";

const App = () => {

  useEffect(() => {
    axios.get("/common/actions").then((response) => {
      console.log(response.data);
    });
  })

  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/plan" element={<PlanPage />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;

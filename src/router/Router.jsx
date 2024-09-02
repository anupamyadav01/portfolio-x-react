import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import ProjectsPage from "../components/ProductsPage/ProjectsPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

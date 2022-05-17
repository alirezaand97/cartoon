import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./utils/routes";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path={routes.HOME_ROUTE} element={<MainLayout />} >
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

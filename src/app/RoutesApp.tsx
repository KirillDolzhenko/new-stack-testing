import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import AppRouter from "@/routers/AppRouter";

function RoutesApp() {
  return (
    <>
      <Link to={"/"} data-testid={"link-main"}>
        main
      </Link>

      <Link to={"/about"} data-testid={"link-about"}>
        about
      </Link>

      <AppRouter />
    </>
  );
}

export default RoutesApp;
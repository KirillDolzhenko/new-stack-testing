import AboutPage from "@/app/pages/AboutPage";
import ErrorPage from "@/app/pages/ErrorPage";
import MainPage from "@/app/pages/MainPage";
import UserPage from "@/app/pages/UserPage";
import Users from "@/app/users/Users";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/users"} element={<Users />} />
      <Route path={"/user/:id"} element={<UserPage />} />
      <Route path={"/*"} element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;

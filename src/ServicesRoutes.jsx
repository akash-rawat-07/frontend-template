import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Sidebar from "./components/Sidebar";

const ServicesRoutes = () => {
  const routesData = [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ];



  return (
    <div className="bg-[#FFFFFF] w-screen h-screen">
      <div className="w-full h-full flex gap-[30px]">
        <div className="w-[260px]">
          <Sidebar />
        </div>
        <div className="w-[calc(100%-260px-30px)] h-full">
          <Routes>
            {
              routesData.map((item, index) => (
                <Route
                  element={item?.element}
                  key={index}
                  path={item.path}
                />
              ))
            }
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ServicesRoutes;

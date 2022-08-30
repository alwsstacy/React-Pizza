import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
      </div>
      <div className="content"> <Outlet /></div>
    </div>
  );
};

export default MainLayout;

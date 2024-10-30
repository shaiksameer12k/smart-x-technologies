import React from "react";
import HeroSection from "./DashboardComponents/HeroSection";
import TopCourseSection from "./DashboardComponents/TopCourseSection";
import "../../styles/HeroSection.css";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="min-h-lvh ">
      <HeroSection />
      <TopCourseSection />
      
    </div>
  );
};

export default Main;

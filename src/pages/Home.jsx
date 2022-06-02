import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/NavbarComponents/Navbar";
import HeroSection from "../components/HomeComponents/HeroCmp/HeroSection";
import AboutUs from "../components/HomeComponents/AboutUsCmp/AboutUs";
import BlogSection from "../components/HomeComponents/BlogCmp/BlogSection";
export default function Home() {
  return (
    <Router>
      <Navbar />
      {/* <HeroSection /> */}
      {/* <AboutUs /> */}
      {/* <BlogSection /> */}
    </Router>
  );
}

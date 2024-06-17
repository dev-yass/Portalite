import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Services from "./Pages/Service";
import Reservation from "./Pages/Reservation";
import Simulation from "./Pages/Simulation";
import axios from "axios";
import Custompage from "./Pages/CustomPage";
import BlogDetail from "./Pages/BlogDetail";
import NousChoisir from "./Pages/NousChoisir";
import GuidePortage from "./Pages/GuidePortage";
import Accompagnement from "./Pages/Accompagnement";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/pages")
        .then((response) => {
          if (response.data) {
            setdata(response.data);
          }
        });
    })();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/Simulation" element={<Simulation />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/guide" element={<GuidePortage />} />
          <Route path="/pourquoinouschoisir" element={<NousChoisir />} />
          <Route path="/accompagnement" element={<Accompagnement />} />
          {data.map((page:any)=><Route path={`/${page.name}/:name`} element={<Custompage />} />)}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

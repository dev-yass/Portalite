import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import moment from "moment";

const Service = (props) => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/services", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setservices(response.data);
          }
        });
    })();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    speed: 1000,
    autoplaySpeed: 1300,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: "200px",
    swipe: true,
  };
  const settingsOP = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">Nos Services</h2>
        </div>
      </section>
      {/* End Pagebanner */}
      {/* breadcrumb */}
      <div className="breadcrumb-main">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <i className="fa fa-home" />
              </Link>
            </li>
            <li className="active">Nos Services</li>
          </ul>
        </div>
      </div>
      {/* End breadcrumb */}
      {/** Services**/}
      <section id="mt_services" className="wow slideInLeft">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">{/* section title */}</div>
          </div>
          <div className="row">
            {services.map((serv, i) => (
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="box mar-bottom-30 text-center">
                  <img
                    src={serv.fa_icon}
                    alt="services-1"
                    className="imagemaxheight"
                  />
                  <div className="box-content">
                    <h3>
                      <Link to="#">{serv.title}</Link>
                    </h3>
                    <p>{serv.resume}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/** End Services**/}
    </div>
  );
};

export default Service;

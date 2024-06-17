import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [data, setData] = useState();
  const [nav, setnav] = useState([]);
  const [article, setarticle] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/socials", {
          method: "GET",
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response?.data) {
            setData(response.data[0]);
          }
        });

      await axios
        .get("https://portalite.fr/api/nav", {
          method: "GET",
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response?.data) {
            setnav(response.data);
          }
        });
      await axios
        .get("https://portalite.fr/api/articles", {
          method: "GET",
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setarticle(response.data.slice(0, 3));
          }
        });
    })();
  }, []);
  return (
    <div>
      {/**Footer**/}
      <footer id="mt_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="follow_us">
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
                  <img
                    src="Logo-Portalite.png"
                    style={{ height: "10rem", width: "13rem" }}
                    alt="Logo"
                  />
                </Link>

                <p>
                  Tout seul on va plus vite ensemble on va plus loin . Fédérer
                  un réseau de consultants portés qui s'entraident pour le sucès
                  de chacun est le centre de nos occupations chez PORTALITE.
                </p>
                <h4>Suivez-nous</h4>
                <ul className="social_icons">
                  <li>
                    <a href={data?.pinterest}>
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href={data?.linkedin}>
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href={data?.twitter}>
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={data?.facebook}>
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 col-sm-6 col-xs-12">
              <div className="mt_contact_ftr">
                <h3>Liens</h3>
                <ul>
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
                      <i className="fa fa-angle-right" />
                      Portalite
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <i className="fa fa-angle-right" />A propos de nous
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <i className="fa fa-angle-right" />
                      Nos services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <i className="fa fa-angle-right" />
                      Nous contacter
                    </Link>
                  </li>
                  {nav?.map((nav) => (
                    <li>
                      <Link
                        to={`/${nav.navname}/${nav.navname}`}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <i className="fa fa-angle-right" />
                        {nav.navname}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_footer_copy">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="copy_txt">
                  <p>© Copyright 2023 - Portalite | Portage Salarial</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="made_txt">
                  <ul className="pull-right">
                    <li>
                      <Link
                        to="/about"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        A propos de nous
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Nous contacter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/** End Footer**/}
      {/* back to top */}
      <a
        id="back-to-top"
        href="#"
        className="btn btn-primary btn-lg back-to-top"
        role="button"
        title
        data-placement="left"
      >
        <span className="fa fa-arrow-up" />
      </a>

      <a
        id="simul"
        role="button"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        title
        data-placement="left"
      >
        <Link to="/Simulation" className="btn mt_btn_yellow">
          <i class="fa fa-calculator calculatorico" aria-hidden="true"></i>
        </Link>

        <Link to="/contact" className="btn mt_btn_yellow mar-top-10">
          <i class="fa fa-phone calculatorico" aria-hidden="true"></i>
        </Link>
      </a>
    </div>
  );
};

export default Footer;

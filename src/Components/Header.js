import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [nav, setnav] = useState();
  const [OpenMenu, setOpenMenu] = useState(false);

  const [I1, setI1] = useState(false);
  const [I2, setI2] = useState(false);
  const [I3, setI3] = useState(false);
  const [I4, setI4] = useState(false);
  const [I5, setI5] = useState(false);
  const [I6, setI6] = useState(false);
  const [I7, setI7] = useState(false);
  const closeallsubnav = () => {
    setI1(false);
    setI2(false);
    setI3(false);
    setI4(false);
    setI5(false);
  };
  const OnhandelClick = () => {
    closeallsubnav();
    setOpenMenu(!OpenMenu);
  };

  const OnhandelClick1 = () => {
    setI1(!I1);
  };
  const OnhandelClick2 = () => {
    setI2(!I2);
  };
  const OnhandelClick3 = () => {
    setI3(!I3);
  };
  const OnhandelClick4 = () => {
    setI4(!I4);
  };
  const OnhandelClick5 = () => {
    setI5(!I5);
  };

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/informations", {
          method: "GET",
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setInfo(response.data[0]);
          }
        });

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
    })();
  }, []);

  return (
    <header id="inner-navigation">
      {/* top bar */}
      <div className="topbar-section">
        <div className="container">
          <div className="topbar-inner">
            <div className="top-bar-left pull-left">
              <ul>
                <li>
                  <i className="fa fa-phone" /> Telephone: {info?.phone}
                </li>
                <li>
                  <i className="fa fa-envelope" /> Email: {info?.email}
                </li>
              </ul>
            </div>
            <div className="top-bar-right pull-right">
              <ul>
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
        </div>
      </div>
      <div id="inner-navigation">
        {/* navbar start */}
        <nav className="navbar navbar-default navbar-fixed-top navbar-sticky-function navbar-arrow">
          <div className="container">
            <div className="logo pull-left">
              <Link
                to=""
                onClick={() => {
                  setOpenMenu(false);
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <img
                  src="assets/images/Logo-Portalite.png"
                  alt=""
                  width={90}
                  height={70}
                />
              </Link>
            </div>
            <div id="navbar" className="navbar-nav-wrapper pull-right">
              <ul className="nav navbar-nav navbar-right" id="responsive-menu">
                <li>
                  <Link to="/">
                    Portalite <i className={"fa fa-angle-down"} />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/about">A propos de Nous</Link>
                    </li>
                    <li>
                      <Link to="/services">Nos services</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link>
                    Je suis consultant <i className={"fa fa-angle-down"} />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/guide">Guide du portage</Link>
                    </li>
                    <li>
                      <Link to="/pourquoinouschoisir">
                        Pourquoi nous choisir
                      </Link>
                    </li>
                  </ul>
                  {/* 
                       <Link to="#">
                    {nav?.find((nav) => nav.id === 32)?.navname}&nbsp;
                    <i className="fa fa-angle-down" />
                  </Link>
                  <ul>
                    {nav
                      ?.find((nav) => nav.id === 32)
                      ?.child.map((nav) => (
                        <li>
                          <Link to={`/${nav.navname}/${nav.navname}`}>
                            {nav.navname}
                          </Link>
                        </li>
                      ))}
                  </ul> */}
                </li>

                <li>
                  <Link>
                    Je suis une entreprise <i className={"fa fa-angle-down"} />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/accompagnement">Notre Accompagnement</Link>
                    </li>
                  </ul>
                  {/* <Link to="#">
                    {nav?.find((nav) => nav.id === 30)?.navname}&nbsp;
                    <i className="fa fa-angle-down" />
                  </Link>
                  <ul>
                    {nav
                      ?.find((nav) => nav.id === 30)
                      ?.child.map((nav) => (
                        <li>
                          <Link to={`/${nav.navname}/${nav.navname}`}>
                            {nav.navname}
                          </Link>
                        </li>
                      ))}
                  </ul> */}
                </li>

                <li>
                  <Link>
                    Contact <i className={"fa fa-angle-down"} />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/contact">Nous contacter</Link>
                    </li>
                    <li>
                      <Link to="/reservation">
                        Réserver un créneau d'échange
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.hoggo.com/espace-salarie/sign_in">
                    Espace Adhérent
                  </a>
                </li>

                {/* <li>
                  <Link to="#">
                    {nav?.find((nav) => nav.id === 31)?.navname}&nbsp;
                    <i className="fa fa-angle-down" />
                  </Link>
                  <ul>
                    {nav
                      ?.find((nav) => nav.id === 31)
                      ?.child?.map((nav) => (
                        <li>
                          <Link to={`/${nav.navname}/${nav.navname}`}>
                            {nav.navname}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li> */}

                <li>
                  <div className="get-quote">
                    <Link to="/Simulation" className="btn mt_btn_yellow">
                      Simuler&nbsp;&nbsp;&nbsp;
                      <i
                        class="fa fa-calculator calculatorico"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            {/*/.nav-collapse */}
          </div>

          <div id="slicknav-mobile">
            <div className="mobilemenu">
              <a>
                <i
                  className={
                    !OpenMenu
                      ? "fa fa-align-justify iconmenu"
                      : "fa fa-times iconmenu"
                  }
                  onClick={OnhandelClick}
                ></i>

                <div id="navbar" className={OpenMenu ? "menuOpen" : "menucl"}>
                  <ul className="nav navbar-navmobile navbar-rightmobile">
                    <li>
                      <Link to="/" onClick={OnhandelClick1}>
                        Portalite <i className="fa fa-angle-down" />
                      </Link>
                      <ul className={I1 ? "menuOpen" : "menucl"}>
                        <li>
                          <Link
                            to="/about"
                            onClick={() => {
                              setOpenMenu(false);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            A propos de Nous
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services"
                            onClick={() => {
                              setOpenMenu(false);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            Nos services
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="#" z onClick={OnhandelClick2}>
                        Je suis consultant <i className={"fa fa-angle-down"} />
                      </Link>
                      <ul className={I2 ? "menuOpen" : "menucl"}>
                        <li>
                          <Link
                            to={`/guide`}
                            onClick={() => {
                              setOpenMenu(false);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            Guide du portage
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/pourquoinouschoisir`}
                            onClick={() => {
                              setOpenMenu(false);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            Pourquoi nous choisir
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="#" onClick={OnhandelClick3}>
                        Je suis une entreprise{" "}
                        <i className={"fa fa-angle-down"} />
                      </Link>
                      <ul className={I3 ? "menuOpen" : "menucl"}>
                        <li>
                          <Link
                            to={`/accompagnement`}
                            onClick={() => {
                              setOpenMenu(false);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            Notre Accompagnement
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link onClick={OnhandelClick4}>
                        Contact <i className="fa fa-angle-down" />
                      </Link>
                      <ul className={I4 ? "menuOpen" : "menucl"}>
                        <li>
                          <Link
                            to="/contact"
                            onClick={() => {
                              setOpenMenu(false);
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
                        <li>
                          <Link
                            to="/reservation"
                            onClick={() => {
                              setOpenMenu(false);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            Obtenir une date
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="https://www.hoggo.com/espace-salarie/sign_in">
                        Espace Adhérent
                      </a>
                    </li>

                    <li>
                      <Link to="#" onClick={OnhandelClick5}>
                        {nav?.find((nav) => nav.id === 31)?.navname}&nbsp;
                        <i className="fa fa-angle-down" />
                      </Link>
                      <ul className={I5 ? "menuOpen" : "menucl"}>
                        {nav
                          ?.find((nav) => nav.id === 31)
                          ?.child?.map((nav) => (
                            <li>
                              <Link
                                to={`/${nav.navname}/${nav.navname}`}
                                onClick={() => {
                                  setOpenMenu(false);
                                  window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {nav.navname}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>

                    <li>
                      <div className="get-quote">
                        <Link to="/Simulation" className="btn mt_btn_yellow">
                          Simuler
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </nav>
        {/* navbar end */}
      </div>
    </header>
  );
};

export default Header;

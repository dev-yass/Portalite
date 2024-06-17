import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import image from "../images/About.png";
import CountUp from "react-countup";

const About = (props) => {
  const [services, setservices] = useState([]);
  const [weare, setweare] = useState([]);
  const [partner, setpartner] = useState([]);

  const [data, setdata] = useState([]);

  const [team, setteam] = useState([]);
  const [article, setarticle] = useState([]);
  const [opinions, setopinions] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/services", {
          method: "GET",

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

      await axios
        .get("https://portalite.fr/api/weare", {
          method: "GET",

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            setweare(response.data);
          }
        });

      await axios
        .get("https://portalite.fr/api/teams", {
          method: "GET",

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            setteam(response.data);
          }
        });

      await axios
        .get("https://portalite.fr/api/data", {
          method: "GET",

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            setdata(response.data);
          }
        });

      await axios
        .get("https://portalite.fr/api/parteners", {
          method: "GET",

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            setpartner(response.data);
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
            setarticle(response.data);
          }
        });

      await axios
        .get("https://portalite.fr/api/opinions", {
          method: "GET",

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            setopinions(response.data);
          }
        });
    })();
  }, []);

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">A propos de Nous</h2>
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
            <li className="active">A propos de Nous</li>
          </ul>
        </div>
      </div>
      {/* End breadcrumb */}

      {/**About**/}
      <section id="mt_about">
        <div className="container">
          <div className="about_inner">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="about-content">
                  <span className="mar-bottom-15">A propos de Nous</span>
                  <h2 className="mar-bottom-30">
                    15 années d'expériences dans le consulting , notre approche est : Tout seul on va plus vite ensemble on va
                    plus loin
                  </h2>
                  <p className="mar-bottom-40">
                    Fédérer un réseau de consultants portés qui s'entraident pour le sucès de chacun est le centre de nos
                    occupations chez PORTALITE.
                  </p>
                  <Link to="/services" className="btn mt_btn_yellow">
                    Nos Services
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 wow slideInDown">
                <div className="about-img">
                  <img
                    src="https://media.istockphoto.com/id/1189303518/photo/success-businessman-smiling-in-office.jpg?b=1&s=612x612&w=0&k=20&c=_dz_KynV9pHe50U-OR3NOIaJ1bVQne1Gk8H_SCdnR9E="
                    alt="AboutImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**EndAbout**/}

      <section
        id="working-section"
        class="working-section st-py-default"
        style={{
          backgroundImage: "url('https://portalite.fr/images/dotted_shape.png')",
        }}
      >
        <div class="container">
          <div class="row rowabout">
            <div class="col-lg-12 col-12 mx-lg-auto mb-5 text-center">
              <div
                class="heading-default text-white wow fadeInUp text-center"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h2 style={{ color: "white" }}>Le portage en 5 étapes</h2>
              </div>
            </div>
          </div>
          <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 working-wrapper g-4 gy-md-0 gy-5 rowabout">
            <div class="col">
              <aside class="widget widget-contact">
                <div class="contact-area">
                  <div class="contact-icon">
                    <div class="contact-corn">
                      <i class="fa fa-tree"></i>
                    </div>
                  </div>

                  <div class="contact-info">
                    <h6 class="title">
                      <a href="">Le contrat</a>
                    </h6>

                    <p>
                      Je conclus mon contrat de travail CDI ou CDD et PORTALITE s'en charge du contrat commercial avec mon client.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
            <div class="col">
              <aside class="widget widget-contact">
                <div class="contact-area">
                  <div class="contact-icon">
                    <div class="contact-corn">
                      <i class="fa fa-download"></i>
                    </div>
                  </div>

                  <div class="contact-info">
                    <h6 class="title">
                      <a href="">Le salaire</a>
                    </h6>

                    <p>
                      {" "}
                      J’exécute ma mission , je remplis mon CRA ( compte rendu d'activité) et je perçois mon salaire en avance
                      chez PORTALITE
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 working-wrapper g-4 gy-md-0 gy-5 rowabout">
            <div class="col">
              <aside class="widget widget-contact">
                <div class="contact-area">
                  <div class="contact-icon">
                    <div class="contact-corn">
                      <i class="fa fa-qrcode"></i>
                    </div>
                  </div>

                  <div class="contact-info">
                    <h6 class="title">
                      <a href="">La mission</a>
                    </h6>

                    <p>J'obtiens une mission au prés d'un client.</p>
                  </div>
                </div>
              </aside>
            </div>
            <div class="col">
              <aside class="widget widget-contact">
                <div class="contact-area">
                  <div class="contact-icon">
                    <div class="contact-corn">
                      <i class="fa fa-bars"></i>
                    </div>
                  </div>

                  <div class="contact-info">
                    <h6 class="title">
                      <a href="">Le contact</a>
                    </h6>

                    <p>
                      Je prends contact avec PORTALITE qui s'en charge de m'apporter un accompagnement personnalisé et adapté à
                      mes besoins.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/** Fun And Facts**/}
      <section id="mt_fun">
        <div className="container wow slideInDown">
          <div className="row text-center">
            <div className="row facts_row">
              {data.map((data) => (
                <div className="col-md-4 col-sm-12 col-xs-12 facts_col">
                  <div className="row ">
                    <div className="col-md-9 col-sm-6 col-xs-8">
                      <div className="fun-facts_wrapper text-center">
                        <div className="col-md-5 col-sm-3 col-xs-9 icondata">
                          <i className={data.fa_icon} />
                        </div>

                        <p className="fun-facts_title mar-bottom-25">{data.data}</p>
                        <p className="fun-facts_figure mar-bottom-30">
                          <CountUp duration={7} end={data.number} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/** End Fun And Facts**/}

      {/**Team**/}
      <section id="const-team">
        <div className="container wow slideInDown">
          <div className="col-md-4 col-sm-12">
            {/* section title */}
            <div className="section_heading">
              <h2 className="section_title">
                <span>Notre équipe</span>
              </h2>
            </div>
          </div>

          <div className="col-md-8 col-sm-12">
            <div className="row slider-team">
              {team.map((e, i) => (
                <div className="col-md-3 col-xs-12 item">
                  <div className="team_member">
                    <figure className="effect-julia">
                      <img src={e.image} alt="team" />
                    </figure>

                    <div className="member_name">
                      <h4 className="white">{e.name}</h4>
                      <span>{e.poste}</span>
                    </div>

                    <div className="team-overlay">
                      <ul className="socialicons">
                        <li>
                          <a to="https://www.linkedin.com/">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>

                        <li>
                          <a to="https://twitter.com/">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a to="https://www.facebook.com/">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="const-team">
        <div className="container">
          <div className="section_heading">
            <h2 className="section_title">
              <span>Mission & Vision</span>
            </h2>
          </div>

          <div className="flexclass">
            <figure class="figure image-block ">
              <img src="https://portalite.fr/images/imgcomp.jpg" alt="" />
              <figcaption>
                <h3>
                  <i className="fa fa-pie-chart ico" aria-hidden="true"></i> Compététivité
                </h3>
                <p>Nous essayons de vous satisfaire au maximum pour optimiser vos revenues nets</p>
              </figcaption>
            </figure>
            <figure class="figure image-block">
              <img src="https://portalite.fr/images/imgpart.jpg" alt="" />
              <figcaption>
                <h3>
                  <i className="fa fa-hand-peace-o ico" aria-hidden="true"></i> Approche Partenariat
                </h3>
                <p>Chaque porté devient notre prescripteur et partenaire , nous développons ensemble pour le bien de tous</p>
              </figcaption>
            </figure>
            <figure class="figure image-block">
              <img src="https://portalite.fr/images/img08.jpg" alt="" />
              <figcaption>
                <h3>
                  <i className="fa fa-user ico" aria-hidden="true"></i> Entraide{" "}
                </h3>
                <p>Nous voulons avoir un réseau collaboratif qui s'entraide professionallement et socialement</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/** End Team**/}
      {/** Testimonial**/}
      <section id="mt_faq-testi">
        <div className="container wow slideInDown">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="mt_testimonial">
                {/* section title */}
                <div className="section_heading">
                  <h2 className="section_title">
                    <span>Ils ont choisi PORTALITE</span>
                  </h2>
                  {/* <p className="heading_txt">
                      There are variations available majoritaey suffered
                      alteration words which look believable dolor sit.
                    </p> */}
                  <br />
                </div>
                <Slider {...settingsOP} dotsClass="slick-dots">
                  {opinions.map((op) => (
                    <div className="testimonial_main">
                      <p className="mar-bottom-30 minH">{op.opinion}</p>
                      <div className="client-pic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="" />
                      </div>
                      <h4>
                        <Link to="#">{op.poste}</Link>
                      </h4>
                    </div>
                  ))}
                </Slider>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** EndTestimonial**/}
    </div>
  );
};

export default About;

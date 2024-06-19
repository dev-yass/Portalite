import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import CountUp from "react-countup";
import { createNoSubstitutionTemplateLiteral } from "typescript";

const Home = (props) => {
  const [Sliders, setSliders] = useState([]);
  const [services, setservices] = useState([]);
  const [weare, setweare] = useState([]);
  const [partner, setpartner] = useState([]);

  const [data, setdata] = useState([]);

  const [team, setteam] = useState([]);
  const [article, setarticle] = useState([]);
  const [opinions, setopinions] = useState([]);
  const [param, setparam] = useState([]);
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("visit")) {
        await axios
          .post("https://portalite.fr/api/visite", {
           
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
           
          })
          .then(() => localStorage.setItem("visit", "true"))
          .catch(() => console.warn("error"));
      }

      await axios
        .get("https://portalite.fr/api/sliders", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setSliders(response.data);
          }
        });

      await axios
        .get("https://portalite.fr/api/services", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          console.log("ici error response:",response)
          if (response.data) {
            setservices(response.data);
          }
        }) .catch((err)=>console.log("ici error:",err))

      await axios
        .get("https://portalite.fr/api/weare", {
         
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
      await axios
        .get("https://portalite.fr/api/opinions", {
         
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
      await axios
        .get("https://portalite.fr/api/gestion", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setparam(response.data);
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
    autoplaySpeed: 1500,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
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
      <div>
        {/* Slider */}
        <div
          id="home-banner"
          className="carousel slide ps_indicators_l  ps_control_rotate_f kbrns_zoomInOut thumb_scroll_x swipe_x ps_easeOutQuart"
          data-ride="carousel"
          data-pause="hover"
          data-interval={10000}
          data-duration={2000}
        >
          {/* Wrapper For Slides */}
          <div className="carousel-inner" role="listbox">
            {/* First Slide */}
            <div className="item active">
              {/* Slide Background */}
              <img src={Sliders[0]?.image} alt="slider_01" />
              {/* Left Slide Text Layer */}
              <div
                className="caption_slide1 fadeInRight"
                data-animation="animated fadeInRight"
              >
                <span className="white">Portage Salariale</span>
                <h1 className="white">{Sliders[0]?.title}</h1>
                <p className="white mar-bottom-25">{Sliders[0]?.description}</p>
                <Link
                  to="/Simulation"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="btn mt_btn_yellow"
                >
                  Simuler
                </Link>
              </div>
              {/* /Left Slide Text Layer */}
            </div>
            {/* /item */}
            {/* End of Slide */}

            {/* Third Slide */}
            {Sliders.slice(1, 3).map((item, i) => (
              <div className="item">
                {/* Slide Background */}
                <img src={item.image} alt={`slider${i + 1}`} />
                {/* Right Slide Text Layer */}
                <div
                  className="caption_slide1 wow fadeInUp"
                  data-animation={
                    i % 2 === 0 ? "animated fadeInDown" : "animated fadeInLeft"
                  }
                >
                  <span className="white">Portage Salariale</span>
                  <h1 className="white">{item.title}</h1>
                  <p className="white mar-bottom-25">{item.description}</p>
                  <Link
                    to="/Simulation"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="btn mt_btn_yellow"
                  >
                    Simuler
                  </Link>
                </div>
                {/* /Right Slide Text Layer */}
              </div>
            ))}
          </div>
          {/* End of Wrapper For Slides */}
          {/* Left Control */}
          <Link
            className="left carousel-control"
            to="#home-banner"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </Link>
          {/* Right Control */}
          <Link
            className="right carousel-control"
            to="#home-banner"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </Link>
        </div>{" "}
        {/* End Slider */}
        {/**About**/}
        <section id="mt_about">
          <div className="container">
            <div className="about_inner">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="about-content">
                    <span className="mar-bottom-15">A propos de nous</span>
                    <h2 className="mar-bottom-30">
                      15 années d'expériences dans le consulting , notre
                      approche est : Tout seul on va plus vite ensemble on va
                      plus loin
                    </h2>
                    <p className="mar-bottom-40">
                      Fédérer un réseau de consultants portés qui s'entraident
                      pour le sucès de chacun est le centre de nos occupations
                      chez PORTALITE.
                    </p>
                    <Link
                      to="/about"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="btn mt_btn_yellow"
                    >
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
        {/** Services**/}
        <section id="mt_services" className="wow slideInLeft">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                {/* section title */}
                <div className="section_heading">
                  <h2 className="section_title">
                    <span>Nos Services</span>
                  </h2>
                  {/* <p className="heading_txt">
                    There are variations available majoritaey suffered
                    alteration words which look believable dolor sit amet
                    consectetuer adipiscing elit suspendisse justdo structure
                    versions.
                  </p> */}
                </div>
              </div>
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
        {/** Choose Us**/}
        <section id="choose_us" className="about_choose_us">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                {/* section title */}
                <div className="section_heading">
                  <h2 className="section_title">
                    <span>Nous en trois mots</span>
                  </h2>
                  {/* <p className="heading_txt">
                    There are variations available majoritaey suffered
                    alteration words which look believable dolor sit amet
                    consectetuer adipiscing elit suspendisse justdo structure
                    versions.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row mar-bottom-24">
              <div className="col-md-5 col-sm-12 col-xs-12 mar-right-9">
                <AnimatedCard
                  config={{
                    rotation: 120,
                    transition: {
                      duration: 0.5,
                      timingMode: "ease",
                    },
                    transform: {
                      figureIcon: {
                        rotation: 20,
                        translateZ: 160,
                      },
                      titleTranslateZ: 140,
                      bodyTextTranslateZ: 100,
                      buttonTranslateZ: 80,
                    },
                  }}
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src="https://portalite.fr/images/design-img.jpg"
                    alt="we-image"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </AnimatedCard>
              </div>

              <div className="col-md-7 col-sm-12 col-xs-12 mission-list ">
                <div className="row">
                  {weare.map((we) => (
                    <div className="col-sm-12">
                      <div className="choose-list mar-bottom-30">
                        <i className={we.icon} />
                        <h3>{we.title}</h3>
                        <p>{we.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
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

                          <p className="fun-facts_title mar-bottom-25">
                            {data.data}
                          </p>
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
        {/** End choose us**/}
        <section id="choose_us" className="about_choose_us">
          <div className="pricings">
            {param.slice(0, 3)?.map((el) => (
              <div class="pricing-item">
                <div class="pricing-rate">
                  <h3>Frais de gestion {el.frais}%</h3>

                  <p class="mb-0 mt-2">{el.interval}</p>
                </div>
                <div class="pricing-inner">
                  <Link
                    to="/reservation"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    class="btn btn-secondary btn-like-icon mb-3"
                  >
                    Etre rappelé{" "}
                    <span class="bticn">
                      <i class="fa fa-phone"></i>
                    </span>
                  </Link>

                  <div class="pricing-list">
                    <ul className="list">
                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>
                        Gestion administrative , financière , commerciale et
                        juridique
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon "
                          aria-hidden="true"
                        ></i>{" "}
                        Avance totale des salaires et frais professionnels
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>{" "}
                        Optimisation des revenus
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>
                        Accés Intranet avec Tableau de board pour monitorer vos
                        comptes
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>{" "}
                        Garantie financière
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>{" "}
                        Assurance responsabilité civile et professionnelle
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>{" "}
                        Mutuelle d'entreprise avec prix aventagieux
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>{" "}
                        Offre de missions
                      </li>

                      <li>
                        {" "}
                        <i
                          class="fa fa-check-circle  icon"
                          aria-hidden="true"
                        ></i>{" "}
                        Accompagnement personalisé
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                            alt=""
                          />
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
        {/** Blog**/}
        <section id="mt_blog" className="light-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                {/* section title */}
                <div className="section_heading">
                  <h2 className="section_title">
                    <span>Dernier Blog</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="blog_post_inner">
              <div className="row">
                {article.map((e, i) => (
                  <div
                    className="col-md-4 col-sm-12 wow slideInDown"
                    data-wow-delay=".2s"
                  >
                    <div className="blog-post-inner_wrapper">
                      <div className="blog-post-image">
                        <div className="blog_cat">Innovation</div>
                        <div className="img">
                          <img className="imgblog" src={e.image} alt="image" />
                        </div>
                      </div>
                      <div className="post-detail_container">
                        <div className="post-content">
                          <p className="post-date text-uppercase mar-bottom-10">
                            <i className="fa fa-calendar" />{" "}
                            {moment(e.created_at.toString()).format(
                              "MMM Do YY"
                            )}
                          </p>
                          <h3 className="post-title text-uppercase">
                            <Link
                              to={"/blog/" + e.id}
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              {e.title.substring(0, 35) + "..."}{" "}
                            </Link>
                          </h3>
                          <p className="post-excerpt">
                            {e.content.substring(0, 100) + "..."}
                          </p>
                        </div>
                        <div className="post-author">
                          <span className="pull-left author-list">
                            <i class="fa fa-user">{" " + e.author} </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/** End Blog**/}
        {/** Partner**/}
        <section id="mt_partner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                {/* section title */}
                <div className="section_heading">
                  <h2 className="section_title">
                    <span>Nos Partenaires</span>
                  </h2>
                  {/* <p className="heading_txt">
                    There are variations available majoritaey suffered
                    alteration words which look believable dolor sit amet
                    consectetuer adipiscing elit suspendisse justdo structure
                    versions.
                  </p> */}
                </div>
              </div>
            </div>
            <br />
            <Slider {...settings} dotsClass="slick-dots">
              {partner.map((e, i) => (
                <div className="imgpart">
                  <img src={e.image} alt="partner" className="" />
                </div>
              ))}
            </Slider>
          </div>
        </section>
        {/** End partner**/}
      </div>
    </div>
  );
};

export default Home;

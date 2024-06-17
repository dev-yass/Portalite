import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../images/contact-us.jpg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const ContactUs = () => {
  const [data, setdata] = useState();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [identity, setidentity] = useState(" ");
  const [phone, setphone] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/informations", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setdata(response?.data[0]);
          }
        });
    })();
  }, []);

  const handelSave = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://portalite.fr/api/contact/add",
        {
          name,
          email,
          phone,
          message,
          identity,
        },
        {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        }
      )
      .then((response) => {
        if (response.data) {
          NotificationManager.success("Your contact created with success");
        } else {
          NotificationManager.warning("please check your data");
        }
      });
  };

  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">Contact</h2>
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
            <li className="active">Contact</li>
          </ul>
        </div>
      </div>

      {/* End breadcrumb */}
      {/** Contact**/}
      <section id="mt_contact" className="contact-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 mar-bottom-30">
              <div className="contact-info text-center">
                <ul>
                  <li>
                    <i class="fa fa-map-marker"></i> {data?.adress}
                  </li>
                  <li>
                    <i className="fa fa-phone" /> {data?.phone}
                  </li>
                  <li>
                    <i className="fa fa-envelope" /> {data?.email}
                  </li>
                  <li>
                    <i className="fa fa-globe" /> www.Portalite.fr
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              {/* Contact Us Map */}
              <div className="map mar-bottom-30">
                <img
                  src={img}
                  id="map"
                  style={{ height: "300px", width: "100%" }}
                />
              </div>
              {/* Contact Us Map */}
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="contact-inner">
                <div className="contact_form">
                  <form id="contact_form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom et Prenom"
                        required
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Telephone"
                        onChange={(e) => {
                          setphone(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        cols={30}
                        rows={5}
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <button
                      className="mt_btn_yellow"
                      id="submit-btn"
                      onClick={(e) => handelSave(e)}
                    >
                      Envoyer
                      <span className="mt_load">
                        <span />
                      </span>
                    </button>
                    <div id="msg" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NotificationContainer />
    </div>
  );
};

export default ContactUs;

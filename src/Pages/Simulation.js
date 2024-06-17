import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../images/meeting.jpg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import ModalComp from "../Components/ModalComp";
import CurrencyInput from "react-currency-input-field";
import { isNil } from "lodash";
import numeral from "numeral";
import ClipLoader from "react-spinners/ClipLoader";
import Select from "react-select";
export const toEuro = (val) => `${numeral(val).format("0,0")}`;

//1920*1180
const Simulation = () => {
  const [data, setdata] = useState();
  const [cal, setcal] = useState();

  const [config, setconfig] = useState();
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [NBJT, setNBJT] = useState();
  const [TJM, setTJM] = useState();
  const [type, settype] = useState("");
  const [KM, setKM] = useState();
  const [FRP, setFRP] = useState();
  const [NBCH, setNBCH] = useState();
  const [IMS, setIMS] = useState();
  const options = [
    { value: 3, label: "3 chevaux" },
    { value: 4, label: "4 chevaux" },
    { value: 5, label: "5 chevaux" },
    { value: 6, label: "6 chevaux" },
    { value: 7, label: "7+ chevaux" },
  ];
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
      await axios
        .get("https://portalite.fr/api/configurations/active", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            console.log("ddddddd", response.data[0]);
            setconfig(response?.data[0]);
          }
        });
    })();
  }, []);

  const calculate = async () => {
    console.log("NBJT", NBJT);

    let Nombredejourstravailles = NBJT;

    let TJMfacturéHT = TJM;

    let MontantTotalFacturé = NBJT * TJM;

    let FraisdeGestion =
      MontantTotalFacturé * (Number(config?.frais_gestion) / 100);

    let Titredetransport = type === "Voiture" ? 0 : Number(config?.abon_public);

    let Totaldeskmparcourus = KM;

    let NombredeCV = NBCH;

    let Indémniteskilometriques = 0;

    switch (Number(NombredeCV)) {
      case 3:
        Indémniteskilometriques = Number(Totaldeskmparcourus) * 0.456;
        break;
      case 4:
        Indémniteskilometriques = Number(Totaldeskmparcourus) * 0.523;
        break;
      case 5:
        Indémniteskilometriques = Number(Totaldeskmparcourus) * 0.542;
        break;
      case 6:
        Indémniteskilometriques = Number(Totaldeskmparcourus) * 0.574;
        break;
      case 7:
        Indémniteskilometriques = Number(Totaldeskmparcourus) * 0.601;
        break;
      default:
        Indémniteskilometriques = 0;
        break;
    }
    Totaldeskmparcourus = KM * 2 * NBJT;
    Indémniteskilometriques = Indémniteskilometriques * Nombredejourstravailles;
    let Indémnitesderepas =
      Number(Nombredejourstravailles) * Number(config?.ind_repas);

    let Autresfraisdivers = Number(FRP);

    let FraisProfessionnels =
      Number(Autresfraisdivers) +
      Number(Indémnitesderepas) +
      Number(Indémniteskilometriques) +
      Number(Titredetransport);

    let Enveloppesalariale =
      Number(MontantTotalFacturé) -
      Number(FraisProfessionnels) -
      FraisdeGestion; //Frais_gestion_euro

    let SalaireBrut = Number(Enveloppesalariale) / Number(config?.taux_charge);

    let Indémnitédefindecontratbrutchargée =
      (Number(SalaireBrut) / 3 / 12) * 1.2;

    let indémnitesfindecontratnets =
      Number(Indémnitédefindecontratbrutchargée) / 1.2;

    let RéserveFinancièreBrutechargée =
      Number(SalaireBrut) * 0.1 - Number(Indémnitédefindecontratbrutchargée);

    let ChargesPatronales =
      Number(SalaireBrut) * Number(config?.taux_charge - 1.1);

    let ChargesSociales = Number(SalaireBrut) * 0.22;

    let SalaireBrutRéserveFinancièreBrute =
      Number(SalaireBrut) +
      Number(RéserveFinancièreBrutechargée) / Number(config?.taux_charge - 1);

    let SalaireNet = Number(SalaireBrut) * 0.78;

    let RestitutiondelaRéserveFinancièreNette =
      (Number(RéserveFinancièreBrutechargée) /
        Number(config?.taux_charge - 0.1)) *
      0.78;

    let RestitutiondindémdefindecontratNette =
      Number(Indémnitédefindecontratbrutchargée) / 1.2;

    let FraisProfessionnelsRemboursés = Number(FraisProfessionnels);

    let TotalVerséEstimé =
      Number(SalaireNet) +
      Number(RestitutiondelaRéserveFinancièreNette) +
      Number(FraisProfessionnels) +
      Number(RestitutiondindémdefindecontratNette);

    let Impotàlasource = Number(IMS / 100);

    let TotalVerséEstiméNetdimpotsàlasource =
      Number(TotalVerséEstimé) - Number(Impotàlasource) * Number(SalaireNet);

    let SalaireannueléquivalentBrut = Number((TotalVerséEstimé / 0.78) * 12);

    let result = {
      Nombredejourstravailles,
      TJMfacturéHT,
      MontantTotalFacturé,
      FraisdeGestion,
      Titredetransport,
      Totaldeskmparcourus,
      NombredeCV,
      Indémniteskilometriques,
      Indémnitesderepas,
      Autresfraisdivers,
      FraisProfessionnels,
      Enveloppesalariale,
      SalaireBrut,
      indémnitesfindecontratnets,
      Indémnitédefindecontratbrutchargée,
      RéserveFinancièreBrutechargée,
      ChargesPatronales,
      ChargesSociales,
      SalaireBrutRéserveFinancièreBrute,
      SalaireNet,
      RestitutiondelaRéserveFinancièreNette,
      RestitutiondindémdefindecontratNette,
      FraisProfessionnelsRemboursés,
      TotalVerséEstimé,
      Impotàlasource,
      TotalVerséEstiméNetdimpotsàlasource,
      SalaireannueléquivalentBrut,
    };

    return result;
  };
  console.log("testtt", NBCH);
  const handelSave = async (e) => {
    e.preventDefault();
    let test = true;

    if (isNil(IMS) || IMS === "" || IMS === 0) {
      NotificationManager.error("Merci de saisir l'Impot à la source");
      test = false;
    }
    if (isNil(FRP) || FRP === "") {
      //|| FRP === 0 pas toujours de frais pro
      NotificationManager.error("Merci de saisir les Frais Professionels");
      test = false;
    }
    if (isNil(TJM) || TJM === "" || TJM === 0) {
      NotificationManager.error("Merci de saisir le TJM facturé HT");
      test = false;
    }
    if (isNil(NBJT) || NBJT === "" || NBJT === 0) {
      NotificationManager.error(
        "Merci de saisir les Nombre de jours travaillés/mois"
      );
      test = false;
    }

    if (type === "Voiture") {
      if (isNil(NBCH) || NBCH === "" || NBCH === 0) {
        NotificationManager.error("Merci de saisir le nombre de chevaux");
        test = false;
      }
      if (isNil(KM) || KM === "" || KM === 0) {
        NotificationManager.error(
          "Merci de saisir le trajet domcile - travail"
        );
        test = false;
      }
    }

    if (test === true) {
      try {
        let calculation = await calculate();
        setcal(calculation);
      } catch (err) {}
      setmodalIsOpen(true);
    }
  };

  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">Simulation</h2>
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
            <li className="active">Simulation</li>
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
                  <li className="mar-top-30">
                    <strong>
                      Pour avoir une idée indicative rapide sur mon salaire net
                    </strong>{" "}
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
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="contact-inner">
                <div className="contact_form">
                  <form id="contact_form">
                    <div className="form-group">
                      <input
                        type="number"
                        name="name"
                        placeholder="Nombre de jours travaillés/mois"
                        required
                        value={NBJT}
                        // style={{
                        //   borderColor: !(NBJT > 0 && NBJT <= 23) && "red",
                        // }}
                        onChange={(e) => {
                          if (
                            e.target.value <= 30 &&
                            e.target.value >= 0 &&
                            !isNaN(e.target.value)
                          )
                            setNBJT(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <CurrencyInput
                        id="input-example"
                        name="TJM"
                        placeholder="TJM facturé HT"
                        suffix=" €"
                        decimalsLimit={10}
                        value={TJM}
                        onValueChange={(value, name) => {
                          if (isNil(value)) setTJM(0);
                          else if (Number(value) >= 0) setTJM(Number(value));
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <CurrencyInput
                        id="input-example"
                        name="Frais"
                        placeholder="Frais Professionels"
                        suffix=" €"
                        decimalsLimit={10}
                        value={FRP}
                        onValueChange={(value, name) => {
                          if (isNil(value)) setFRP(0);
                          else if (Number(value) >= 0) setFRP(Number(value));
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <CurrencyInput
                        id="input-example"
                        name="source"
                        placeholder="Impot à la source"
                        suffix=" %"
                        //decimalsLimit={2}
                        value={IMS}
                        onValueChange={(value, name) => {
                          console.log("testtt", value);

                          if (isNil(value)) setIMS(0);
                          else if (Number(value) >= 0) setIMS(value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <div className="flex">
                        <div className="element">
                          <input
                            type="radio"
                            className="radio"
                            value={"commun"}
                            name="type"
                            id="accent"
                            onChange={(e) => {
                              settype(e.target.value);
                            }}
                            required
                          />
                          <p>Transport en commun</p>
                        </div>

                        <div className="element">
                          <input
                            type="radio"
                            className="radio"
                            value={"Voiture"}
                            name="type"
                            id="accent"
                            onChange={(e) => {
                              settype(e.target.value);
                            }}
                            required
                          />
                          <p> Voiture</p>
                        </div>
                      </div>
                    </div>

                    {type === "Voiture" ? (
                      <>
                        <div className="form-group">
                          <CurrencyInput
                            id="input-example"
                            name="input-Trajet"
                            placeholder="Trajet domicile - travail"
                            suffix=" KM"
                            value={KM}
                            decimalsLimit={0}
                            onValueChange={(value, name) => {
                              if (isNil(value)) setKM(0);
                              else {
                                let newVal = value.replace(/\D/g, "");
                                // newVal = newVal.replace("K", "");
                                // newVal = newVal.replace("M", "");

                                setKM(Number(newVal));
                              }
                            }}
                          />
                        </div>
                        <div className="form-group">
                          {/* <CurrencyInput
                            id="input-example"
                            name="input-chevaux"
                            placeholder="Nombre de chevaux"
                            suffix=" CV"
                            decimalsLimit={4}
                            value={NBCH}
                            onValueChange={(value, name) => {
                              if (isNil(value)) setNBCH(0);
                              else if (value <= 30 && value >= 0)
                                setNBCH(value);
                            }}
                          /> */}
                          <Select
                            value={options.find((val) => val.value === NBCH)}
                            placeholder="Nombre de chevaux"
                            onChange={(value) => {
                              setNBCH(value.value);
                            }}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            options={options}
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary25: "#00aaa8",
                                primary: "#00aaa8",
                              },
                            })}
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <button
                      className="mt_btn_yellow"
                      id="submit-btn"
                      type="submit"
                      onClick={(e) => handelSave(e)}
                    >
                      CALCULATE
                      <span className="mt_load">
                        <span />
                      </span>
                    </button>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      <b>NB: </b>Si vous êtes dans une situation de{" "}
                      <b>
                        <u>
                          <a
                            href="https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/les-elements-a-prendre-en-compte/les-frais-professionnels/lindemnite-de-grand-deplacement.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            grand déplacement
                          </a>
                        </u>
                      </b>
                      , merci de prendre contact avec nous pour une simulation
                      personnalisée.
                    </span>
                    <div id="msg" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NotificationContainer />

      <ModalComp
        isOpen={modalIsOpen}
        data={cal}
        onclose={() => {
          setmodalIsOpen(false);
        }}
      />
    </div>
  );
};

export default Simulation;

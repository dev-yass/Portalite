import axios from "axios";
import React, { useRef } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { isNil } from "lodash";
import { toEuro } from "../Pages/Simulation";
import moment from "moment";
import { Pie } from "@ant-design/plots";
import ClipLoader from "react-spinners/ClipLoader";

const ModalComp = (props) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 60,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(206,212,218 , .85)",
    },
    content: {
      top: "15%",
      margin: "auto",
      zIndex: "9",
      backgroundColor: "#fff",
      border: "none",
      width: "85%",
    },
  };

  const [email, setemail] = React.useState("");
  const [name, setname] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [load, setload] = React.useState(false);

  const StringToTemplate = (params, content) => {
    let tpl = eval("`" + content + "`");
    return tpl;
  };
  const ref = useRef(null);
  const sendEmail = async () => {
    let test = true;

    if (isNil(email) || email === "") {
      NotificationManager.error("Merci de saisir l'email");
      test = false;
    }
    if (isNil(name) || name === "") {
      NotificationManager.error("Merci de saisir le nom et prenom");
      test = false;
    }
    if (test === true) {
      setload(true);
      await axios
        .get(`https://portalite.fr/api/emails/SIMULINDICATIVE`, {
          method: "GET",
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then(async (response) => {
          if (response.data) {
            let templateParams;
            console.log("testttttttttttt", response.data.htmlsource);

            let templatehtml = StringToTemplate(
              {
                name: name,
                status: "ACTIVE",
                conrtacttype: "",
                Nombredejourstravailles: Math.round(
                  props.data.Nombredejourstravailles,
                  2
                ),
                TJMfacturéHT: Math.round(props.data.TJMfacturéHT, 2),
                MontantTotalFacturé: Math.round(
                  props.data.MontantTotalFacturé,
                  2
                ),
                FraisdeGestion: Math.round(props.data.FraisdeGestion, 2),
                Titredetransport: Math.round(props.data.Titredetransport, 2),
                Totaldeskmparcourus: Math.round(
                  props.data.Totaldeskmparcourus,
                  2
                ),
                NombredeCV: Math.round(props.data.NombredeCV, 2),
                Indémniteskilometriques: Math.round(
                  props.data.Indémniteskilometriques,
                  2
                ),
                Indémnitesderepas: Math.round(props.data.Indémnitesderepas, 2),
                Autresfraisdivers: Math.round(props.data.Autresfraisdivers, 2),
                FraisProfessionnels: Math.round(
                  props.data.FraisProfessionnels,
                  2
                ),
                Enveloppesalariale: Math.round(
                  props.data.Enveloppesalariale,
                  2
                ),
                SalaireBrut: Math.round(props.data.SalaireBrut, 2),
                indémnitesfindecontratnets: Math.round(
                  props.data.indémnitesfindecontratnets,
                  2
                ),
                Indémnitédefindecontratbrutchargée: Math.round(
                  props.data.Indémnitédefindecontratbrutchargée,
                  2
                ),
                RéserveFinancièreBrutechargée: Math.round(
                  props.data.RéserveFinancièreBrutechargée,
                  2
                ),
                ChargesPatronales: Math.round(props.data.ChargesPatronales, 2),
                ChargesSociales: Math.round(props.data.ChargesSociales, 2),
                SalaireBrutRéserveFinancièreBrute: Math.round(
                  props.data.SalaireBrutRéserveFinancièreBrute,
                  2
                ),
                SalaireNet: Math.round(props.data.SalaireNet, 2),
                RestitutiondelaRéserveFinancièreNette: Math.round(
                  props.data.RestitutiondelaRéserveFinancièreNette,
                  2
                ),
                RestitutiondindémdefindecontratNette: Math.round(
                  props.data.RestitutiondindémdefindecontratNette,
                  2
                ),
                FraisProfessionnelsRemboursés: Math.round(
                  props.data.FraisProfessionnelsRemboursés,
                  2
                ),
                TotalVerséEstimé: Math.round(props.data.TotalVerséEstimé, 2),
                Impotàlasource: props.data.Impotàlasource * 100,
                TotalVerséEstiméNetdimpotsàlasource: Math.round(
                  props.data.TotalVerséEstiméNetdimpotsàlasource,
                  2
                ),

                SalaireannueléquivalentBrut:
                  (props.data.TotalVerséEstimé / 0.78) * 12,

                SalaireannueléquivalentBrut: Math.round(
                  props.data.SalaireannueléquivalentBrut,
                  2
                ),

                filepath: `https://portalite.fr/images/${
                  name + moment().format("YYYY-MM-DD,HH:mm:ss")
                }.pdf`,
              },
              response.data.htmlsource
            );
            let stringforPDF = templatehtml.replaceAll('"', "'");
            stringforPDF = stringforPDF.replaceAll("\n", "");
            const date = moment().format("YYYY-MM-DD,HH:mm:ss");
            await axios
              .post(
                "https://portalite.fr/api/simulations/topdf",
                {
                  name: name,
                  date: date,
                  html: stringforPDF,
                },
                {
                 
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                  },
                 
                }
              )
              .then(async () => {
                templateParams = {
                  email: email,
                  html_temp: templatehtml,
                };

                await emailjs
                  .send(
                    "service_tgk64kh",
                    "template_emypcy4",
                    templateParams,
                    "BfqX6_cODcX-fbIrw"
                  )
                  .then(() => {
                    //add new simulation

                    NotificationManager.success("Simulation envoyée");
                    setload(false);
                  });

                axios
                  .post(
                    "https://portalite.fr/api/simulations/add",
                    {
                      email,
                      phone,
                      file: `https://portalite.fr/images/${name + date}.pdf`,
                    },
                    {
                     
                      headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                      },
                     
                    }
                  )
                  .then((response) => {
                    setload(false);
                    if (response.data) {
                    } else {
                      NotificationManager.warning("Une problem est survenu");
                    }
                  });
              });
          }
        });

      props?.onclose && props?.onclose();
    }
  };
  const config = {
    appendPadding: 10,
    data: [
      {
        type: "Net",
        value: Math.round(props.data?.TotalVerséEstiméNetdimpotsàlasource),
      },
      {
        type: "Charges",
        value: Math.round(
          props.data?.MontantTotalFacturé - props.data?.TotalVerséEstimé
        ),
      },
    ],
    color: ["#00aaa8", "#8b949b"],
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "inner",
      offset: "-40%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <div>
      <Modal
        isOpen={props?.isOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        {!load ? (
          <>
            <div className="card-title bg-color dip">
              <div>Chiffre d'affaire mensuel</div>
              <div>{toEuro(props.data?.MontantTotalFacturé)} &nbsp;€</div>
            </div>

            <div className="card-modal">
              <div className="card-elem">
                <div className="card-title bg-color"> Frais</div>
                <div className="card-content">
                  <div className="elem">
                    <div className="elem-title"> Frais de gestion </div>
                    <div> {toEuro(props.data?.FraisdeGestion)} &nbsp;€</div>
                  </div>
                  {props.data?.Titredetransport !== 0 ? (
                    <div className="elem">
                      <div className="elem-title">Titre de transport </div>
                      <div> {toEuro(props.data?.Titredetransport)} &nbsp;€</div>
                    </div>
                  ) : (
                    <div className="elem">
                      <div className="elem-title">Frais kilométriques </div>
                      <div>
                        {" "}
                        {toEuro(props.data?.Indémniteskilometriques)} &nbsp;€
                      </div>
                    </div>
                  )}
                  <div className="elem">
                    <div className="elem-title"> Frais professionnels</div>
                    <div>
                      {" "}
                      {toEuro(props.data?.FraisProfessionnels)} &nbsp;€
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elem">
                <div className="card-title bg-color"> Charges</div>
                <div className="card-content">
                  <div className="elem">
                    <div className="elem-title"> Charges Patronales</div>
                    <div> {toEuro(props.data?.ChargesPatronales)} &nbsp;€</div>
                  </div>

                  <div className="elem">
                    <div className="elem-title"> Charges Sociales</div>
                    <div> {toEuro(props.data?.ChargesSociales)} &nbsp;€</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-title bg-color dip">
              <div>Total versé éstimé</div>
              <div>{toEuro(props.data?.TotalVerséEstimé)} &nbsp;€</div>
            </div>
            <div className="card-title bg-color dip">
              <div>Total versé net d'impot</div>
              <div>
                {toEuro(props.data?.TotalVerséEstiméNetdimpotsàlasource)}&nbsp;€{" "}
              </div>
            </div>
            <div className="card-title bg-color dip">
              <div>Salaire Brut Annuel équivalent</div>
              <div>
                {toEuro(props.data?.SalaireannueléquivalentBrut)}&nbsp;€{" "}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                {/* this is chart Najd*/}
                <Pie {...config} />
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="card-info">
                  <div className="card-title bg-color">Informations</div>

                  <div className="card-info-content">
                    <div className="form-group">
                      <input
                        id="input-Email"
                        name="Email"
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="input-Email"
                        name=""
                        placeholder="Nom et Prénom "
                        type="text"
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="input-Email"
                        name=""
                        placeholder="Téléphone"
                        type="number"
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="dipB">
                    <button
                      className="mt_btn_yellow mar color-btn"
                      id="submit-btn"
                      onClick={sendEmail}
                    >
                      Recevoir ma simulation détaillée
                      <span className="mt_load">
                        <span />
                      </span>
                    </button>
                    <button
                      className="mt_btn_yellow"
                      id="submit-btn"
                      onClick={props.onclose}
                    >
                      Annuler
                      <span className="mt_load">
                        <span />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              alignContent: "center",
              textAlign: "center",
              paddingTop: "150px",
            }}
          >
            <ClipLoader
              color="#00aaa8"
              loading={load}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </Modal>

      <NotificationContainer />
    </div>
  );
};

export default ModalComp;

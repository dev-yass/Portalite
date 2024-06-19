import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Accompagnement = (props) => {
  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">
            Notre accompagnement pour les entreprises
          </h2>
        </div>
      </section>
      {/* End Pagebanner */}
      {/* breadcrumb */}
      <div className="breadcrumb-main">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">
                <i className="fa fa-home" />
              </a>
            </li>

            <li className="active">Notre accompagnement pour les entreprises</li>
          </ul>
        </div>
      </div>
      {/* End breadcrumb */}
      {/** Career**/}
      <section id="mt_history" className="about_choose_us">
        <div className="container">
          <div className="row mar-bottom-60">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <p className="heading_txt">
                    Vous avez des postes ouverts ou besoins d’expertise
                    ponctuelle, mais vous ne voulez pas embaucher des CDI ?
                    <br />
                    <br /> Vous voulez éviter les risques d’intercontrat sur
                    certains projets ?<br />
                    <br /> Vous voulez soulager vos ressources opérationnelles,
                    administratives et votre trésorerie ?<br />
                    <br /> Le portage salarial vous apporte la bonne solution.
                  </p>
                </h2>
              </div>
            </div>
          </div>

          <div className="row mar-bottom-60">
            <div className="col-md-12 col-sm-12 col-xs-12 mission-list">
              <div className="col-sm-6">
                <div className="choose-list mar-bottom-30">
                  <p>
                    • Vous nous confier l’embauche de votre ressource en portage
                    en respectant vos budgets.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="choose-list mar-bottom-30">
                  <p>
                    • Un contrat de prestation de service bien cadré pour éviter
                    les risques liés à la sous-traitance.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="choose-list mar-bottom-30">
                  <p>
                    • Vous soulagez votre trésorerie car nous avançons le
                    salaire pour vos ressources portés.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="choose-list mar-bottom-30">
                  <p>
                    • Nous vous mettons en relation avec un large réseau
                    d’experts dans différents secteurs qui correspondent à vos
                    recherches
                  </p>
                </div>
              </div>
            </div>
          </div>
 

          <img class="center"
            src="https://portalite.fr/images/Untitled Diagram (1).png"
            alt=""
          />
          <br />
          <br />
          <br />
          <div className="row mar-bottom-60">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <span>
                    {" "}
                    Les avantages du portage salarial pour l’entreprise
                  </span>
                </h2>
              </div>
            </div>
            <div class="services-chain">
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Allégement de la charge administrative et la gestion RH
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Trouver des experts de qualité à forte valeur ajoutée
                        avec maitrise de la masse salariale{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Démarche rapide et établissement des contrats en 24H
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Zéro risque d’intercontrat</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Zéro avance de trésorerie</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Protection contre la requalification avec le cadre
                        juridique du portage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Pérennité des ressources grâce aux avantages du portage
                        pour le salarié.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Portalite s’occupe de tout pour vous !!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** End career**/}
    </div>
  );
};

export default Accompagnement;

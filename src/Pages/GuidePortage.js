import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GuidePortage = (props) => {
  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">Guide de portage</h2>
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

            <li className="active">Guide de portage</li>
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
                  <span>Qu’est-ce que le portage salarial ? </span>
                </h2>
                <p className="heading_txt">
                  Le portage salarial séduit de plus en plus des consultants qui
                  souhaitent devenir freelance sans les contraintes d’un statut
                  indépendant. Avant d’en présenter les nombreux avantages, il
                  convient d’en donner une présentation plus générale basée sur
                  ses caractéristiques et son fonctionnement pratique. Encore
                  méconnu, le portage salarial est un formidable outil mis à
                  disposition des entrepreneurs qui veulent facturer leurs
                  prestations de services à des entreprises. Le système est
                  simple : vous trouvez vos missions, vous fixez avec vos
                  clients les modalités d'intervention et le tarif, mais, au
                  lieu de créer votre société, un contrat et des factures, c'est
                  la société de portage salarial qui se charge de tous les
                  aspects administratifs et de toutes les déclarations fiscales,
                  sociales, etc. Et c'est cette société, dite société de portage
                  salarial, qui vous verse un salaire par rapport aux honoraires
                  facturés. Vous bénéficiez donc du statut de salarié tout en
                  étant votre propre patron, vous conservez une couverture
                  sociale identique à celle des salariés : cotisation au régime
                  de retraites, assurance chômage, mutuelle complémentaire, etc.
                  En France, Le portage salarial est une solution qui a émergé au
                  milieu des années 90 mais ce n'est que depuis 2015 qu'un cadre
                  juridique solide a été mis en place. En effet l'ordonnance du
                  2 avril 2015 et sa ratification dans la loi de travail ont
                  définitivement encré le portage salarial dans le droit
                  français. Depuis le 1 juillet 2017 le portage salarial dispose
                  même d'une convention collective. Le cadre juridique est donc
                  posé.
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <span>
                    Quelles conditions pour exercer en Portage salarial ?{" "}
                  </span>
                </h2>
                <p className="heading_txt">
                  Quatre conditions ont été définis par la convention collective
                  du portage salarial pour pouvoir exercer une activité en
                  portage salarial :
                </p>
              </div>
            </div>
          </div>
          <div className="row mar-bottom-60">
            <div className="col-md-12 col-sm-12 col-xs-12 mission-list">
              <div className="col-sm-12">
                <div className="choose-list mar-bottom-30">
                  <i className="fa fa-users" />
                  <h3>L’éxpertise </h3>
                  <p>
                    vous devez avoir les compétences nécessaires pour exercer
                    une activité en portage salarial.
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="choose-list mar-bottom-30">
                  <i className="fa fa-certificate " />
                  <h3>La qualification </h3>
                  <p>
                    : vous devez justifier d’une qualification professionnelle
                    minimum de niveau bac +2 ou d’une expérience significative
                    d’au moins trois ans dans le domaine d’activité dans vous
                    souhaitez exercer votre activité en Portage salarial.
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="choose-list mar-bottom-30">
                  <i className="fa fa-search" />
                  <h3>L’autonomie </h3>
                  <p>
                    vous êtes apte en tant que professionnel autonome à
                    prospecter des clients et à définir les conditions
                    d’exécution et le prix de vos prestations.
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="choose-list mar-bottom-30">
                  <i className="fa fa-eur " />
                  <h3>La rémunération </h3>
                  <p>
                    La convention collective du portage salarial a défini une
                    rémunération minimale correspondant à 77 % du plafond mensuel
                    de la sécurité sociale : vous devez générer un minimum de
                    chiffre d’affaires ,vous devrez donc facturer un minimum de
                    250€ la journée pour exercer une activité en portage
                    salarial.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mar-bottom-60">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <span>Quelles activités peuvent être réalisées ?</span>
                </h2>
                <p className="heading_txt">
                  Le portage salarial est exclusivement destiné aux personnes
                  réalisant des prestations de services auprès d’entreprises.
                  Voici quelques exemples de missions d’expertise ou
                  d’ingénierie possibles : -Conseil, Conduite de projet,
                  Ingénieur, Commercial, Communication, Ressources humaines,
                  Achats , Design, etc.… Bref, toutes les professions
                  intellectuelles exercées exclusivement auprès des entreprises.
                  Toutefois, quelques exceptions existent par apport à certains
                  métiers comme le secteur des « services à la personne » (garde
                  d’enfant, soutien scolaire, travaux ménagers.), les
                  professions règlementées (avocats, experts comptables, agent
                  immobilier, etc…), les activités médicales, les travaux dans
                  les bâtiments …
                </p>
              </div>
            </div>
          </div>
          <div className="row mar-bottom-60">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <span>Quelles sont les avantages du portage salarial ?</span>
                </h2>
              </div>
            </div>
            <div class="services-chain">
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Exercer son activité sans besoin de créer une structure
                        juridique
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Maintenir ses droits au chômage</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Se consacrer exclusivement à son activité</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Autonomie et liberté dans l’organisation de son temps de
                        travail
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        {" "}
                        Gagner du temps sur des tâches administratives,
                        comptables, fiscales etc
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Ne pas risquer son patrimoine personnel</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Bénéficier du statut salarial (sécurité sociale,
                        prévoyance, retraite, assurance chômage)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        {" "}
                        Intégrer un réseau d’experts  basé sur
                        l’indépendance
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Bénéficier d’une assurance responsabilité civile
                        professionnelle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Bénéficier d’une garantie financière</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Bénéficier d’une mutuelle entreprise pour vos frais de
                        santé
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Obtenir un logement ou un crédit immobilier plus
                        facilement qu’avec le statut indépendant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mar-bottom-60">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <span>Comment ça fonctionne pratiquement ?</span>
                </h2>
            
                <p className="heading_txt">
                  <ul>
                    <li>
                      Le portage salarial est une relation tripartite qui inclut
                      trois acteurs :
                    </li>
                    
                    <div class="services-chain">
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                        Vous (salarié porté)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Entreprise cliente</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>La société de portage salarial</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

                    <li>
                       Pour commencer votre
                      collaboration avec une société de portage salarial trois
                      étapes sont requises :</li>

                      <div class="services-chain">
              <div class="row mar-bottom-30">
                <div class="col-md-4 col-sm-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>
                      Vous avez une mission
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>La société de portage signe un contrat commercial avec
                      votre client</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="box text-center">
                    <div class="box-contente">
                      <p>Vous signer un CDD/CDI avec la société de portage</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

                    
                    
                  </ul>
                  <br />
                  
                  <img class="center"
                    src="https://portalite.fr/images/Untitled Diagram (1).png"
                    alt=""
                  />
                  
                  <br />
                  Vous réalisez votre mission en toute autonomie, vous
                  remplissez et fournissez le compte rendu d’activité à la
                  société de portage et déclarer vos frais professionnels. La
                  société de portage vous versé votre salaire et établit vos
                  fiches de paie et partage avec vous un compte de résultat qui
                  décrit toute la comptabilité de votre activité (montant
                  facturé, frais de gestion, charges sociales, Salaire brut ,
                  salaire net , réserve …)
                </p>
              </div>
            </div>
          </div>
          <div className="row mar-bottom-60">
            <div className="col-xs-12">
              {/* section title */}
              <div className="section_heading simple">
                <h2 className="section_title">
                  <span>
                    Comment se calcule le salaire en portage salarial ?
                  </span>
                </h2>
                <p className="heading_txt">
                  La société de portage facturera aux sociétés clients la
                  prestation selon le tarif négocié entre cette dernière et le
                  consultant sur une base mensuelle. La société de portage
                  imputera ses frais de gestions du montant des factures et ceci
                  constituera sa commission. Comme tout employeur, La société de
                  portage établit un salaire au consultant porté après avoir
                  versé les charges patronales et les charges salariales à
                  l’URSSAF sur la base du montant restant de la facture après
                  imputation des frais de gestions. Ces charges dépendent en
                  particulier du niveau de salaire du consultant par rapport au
                  plafond de la Sécurité Sociale et du coefficient de la
                  convention collective. Elles sont en moyenne de l’ordre de
                  44-47 % du salaire Brut. Le salarié porté cotisera donc comme
                  un salarié du régime général (prévoyance, retraite, chômage et
                  sécurité sociale).
                  <br />
                  <br />
                  <br />
                  <img class="center"
                    src="https://portalite.fr/images/Untitled Diagram.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <h3>Comprendre ma simulation de salaire</h3>
                  Votre rémunération en Portage salarial va dépendre de 3
                  paramètres :<br /><br />

                  <ul >
                  <li>
                  Votre chiffre d’affaires HT (CA) = Votre TJM (tarif
                  journalier) * nombre de jours travaillés 
                 </li>
                 
                 
                 
      
                 <li>
                 
                 Les frais professionnels = Ils correspondent aux dépenses
                  engagées par le consultant pour ses déplacements, son
                  hébergement, ses repas, ou encore achats de matériel
                  informatique </li>
                  <li> Les frais de gestion de la société de Portage salarial.</li>
                  </ul>
                  <br /> Les frais professionnels ne sont pas soumis aux
                  cotisations sociales ni même à l’impôt.
                  <br />
                  <br /> Ainsi, les frais de professionnels engagés peuvent être
                  restitués au consultant à hauteur de 30 % du montant de son
                  salaire brut et à condition qu’il puisse présenter des pièces
                  justifiant ses dépenses.
                  <br />
                  <br /> L’enveloppe salariale est le solde disponible après
                  soustraction des frais de gestion et des frais professionnels.
                  L’enveloppe salariale va servir à déterminer le Salaire Brut
                  et les charges patronales. <br />
                  <br />
                  

                  <ul >
                  <li> 
                  Enveloppe Salariale = CA -Frais professionnels -frais de
                  gestion </li>
                  <li> Salaire brut= Enveloppe salariale – charges patronales</li> 
                  <li>  Salaire Net imposable = Salaire brut – charges 
                  salariales </li>
                  <li> Ainsi, le Salaire Net avant le prélèvement à la source =
                  Salaire net imposable + frais professionnels remboursés.</li> 

                  </ul>
                  
                  <br /> La convention collective prévoit aussi une réserve qui
                  correspond à 10% du salaire Brut qui va servir lors des
                  baisses d’activités afin de se rémunérer. <br />
                  Cette réserve peut être provisionnée du CA.
                  <br /> L’indemnité de fin de contrat est aussi provisionnée et
                  versée avec le dernier salaire dans le cas d’une rupture
                  conventionnelle si vous n’avez plus de missions en cours pour
                  une certaine période.
                  <br /> L’indemnité de fin de contrat est soumise seulement au
                  forfait social de 20%.
                  <br />
                  Dans tous les cas n’hésitez pas à prendre contact avec nous,
                  nous vous férons une présentation détaillée sur le
                  fonctionnement générale du portage salariale et la simulation
                  de salaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** End career**/}
    </div>
  );
};

export default GuidePortage;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const NousChoisir = (props) => {
  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">Pourquoi nous choisir ?</h2>
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

            <li className="active">Pourquoi nous choisir?</li>
          </ul>
        </div>
      </div>
      {/* End breadcrumb */}
      {/** Career**/}
      <section id="mt_history">
        <div className="container">
          <div class="row">
            <div class="col-xs-12 mar-bottom-30">
              <div class="section_heading simple">
                <h2 class="section_title">
                  <span>
                    <p class="heading_txt">
                      Très fréquemment, un consultant se pose la question quelle
                      société de portage doit-il choisir et ceci est légitime
                      comme il y’a plusieurs sociétés et différentes offres sur
                      le marché. Notre conseil est de bien prioriser la qualité
                      de service, l’écoute, la flexibilité et la réactivité. 
                      Nos valeurs et notre concept innovant aujourd'hui nous différencie des autres,
                      nous accordons une grande importance à l'esprit d'entraide entre consultants.
                      Portalite est un réseau fédérateur de consultants libres qui s'entraident entre eux sur le 
                      plan professionnel et personnel , notre union nous rends plus autonome et nous permet de révolutionner
                      le monde du recrutement classique. Nous developpons ensemble et chacun se sent comme faisant partie de la société 
                      et ceci via un noveau concept de cooptation breveté. 
                      Discutons entre consultants et mettons la main dans la main pour attendre ensemble les memes objectifs ! 
                      Nous pensons que nous avons besoin d'avoir un nouveau concept du consulting que nous "consultants" le créeons . 
                      Si vous avez le meme état d'ésprit "mind set" , si vous adhérez à l'esprit d'entraide entre consultants et si vous croyez en ce nouveau concept , bienvenue à la communauté !  
                
                    </p>
                  </span>
                </h2>
              </div>
            </div>
            <br />
          </div>
          <div className="history_inner">
            <div className="history-timeline">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">Entraide</h3>
                        <h5>entre consultants</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>Nous formons une communauté solidaire de consultants avec les meme valeurs et les memes objectifs.Seul on va plus vite , ensemble on va plus loin. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    <div className="image-history">
                      <img
                        src="https://www.lafinancepourtous.com/wp-content/thumbnails/uploads/2017/09/moyens_de_paiement_a-tt-width-460-height-260-fill-0-crop-0-bgcolor-eeeeee.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-timeline">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    <div className="image-history">
                      <img
                        src="https://www.proservices-informatique.fr/wp-content/uploads/2022/11/comment-desactiver-demarrage-rapide-windows-11.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">Missions</h3>
                        <h5>Opportunités</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>Notre point fort est la qualité de nos partenariats afin de faciliter la mise en relation de nos compétences avec les clients et les offres.
                          90 % des consultants parmi nous ont trouvé des missions via nos partenaires.
                          Nous veillons à contruire des réseaux d'entraides qui facilitent le partage des opportunités sur le marché.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-timeline">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase mr">Qualité </h3>
                        <h5>Service </h5>
                      </div>
                      <div className="expand-history-content">
                        <p>Notre priorité est d'assurer un service de qualité sur le portage avec du conseil personalisé , proximité assurée , réactivité et dynamisme. 
                           La rapidité dans tous ( adminitratif , paiement des salaires , traitement des demandes) est un de nos avantages que nous veillons avec soin à maintenir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    <div className="image-history">
                      <img
                        src="https://www.tradupreneurs.fr/wp-content/uploads/2021/05/illustration_CONSEIL.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-timeline">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    <div className="image-history">
                      <img
                        src="https://www.corporate.bonial.com/hubfs/BON-Blog-Comment_les_retailers-200401-B1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">état d'esprit</h3>
                        <h5>innovation</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>
                          Notre ADN est l'innovation, nous n'arrétons pas à chercher toujours des nouvelles idées pour avancer et créer . Nos compétences diverses et variés avec un état d'esprit d'entraide ne fait que créer des belles choses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Mobile Ver  */}
          <div className="history_inner">
            <div className="history-timeline history-time-mb">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">Entraide</h3>
                        <h5>entre consultants</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>Nous formons une communauté solidaire de consultants avec les meme valeurs et les memes objectifs.Seul on va plus vite , ensemble on va plus loin.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    {/* <div className="image-history">
                      <img
                        src="https://www.lafinancepourtous.com/wp-content/thumbnails/uploads/2017/09/moyens_de_paiement_a-tt-width-460-height-260-fill-0-crop-0-bgcolor-eeeeee.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="history-timeline history-time-mb">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    {/* <div className="image-history">
                      <img
                        src="https://www.proservices-informatique.fr/wp-content/uploads/2022/11/comment-desactiver-demarrage-rapide-windows-11.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">Missions</h3>
                        <h5>Opportunités</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>Notre point fort est la qualité de nos partenariats afin de faciliter la mise en relation de nos compétences avec les clients et les offres.
                          90 % des consultants parmi nous ont trouvé des missions via nos partenaires.
                          Nous veillons à contruire des réseaux d'entraides qui facilitent le partage des opportunités sur le marché.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-timeline history-time-mb">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">Qualité</h3>
                        <h5>Service</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>Notre priorité est d'assurer un service de qualité sur le portage avec du conseil personalisé , proximité assurée , réactivité et dynamisme. 
                           La rapidité dans tous ( adminitratif , paiement des salaires , traitement des demandes) est un de nos avantages que nous veillons avec soin à maintenir.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    {/* <div className="image-history">
                      <img
                        src="https://www.tradupreneurs.fr/wp-content/uploads/2021/05/illustration_CONSEIL.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="history-timeline history-time-mb">
              <div className="row">
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-lt">
                    {/* <div className="image-history">
                      <img
                        src="https://corporate.bonial.com/hubfs/BON-Blog-Comment_les_retailers-200401-B1.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <div className="history-lt-rt history-rt">
                    <div className="expand-history">
                      <div className="history-head">
                        <h3 className="text-uppercase ml">état d'esprit</h3>
                        <h5>innovation</h5>
                      </div>
                      <div className="expand-history-content">
                        <p>
                        Notre ADN est l'innovation, nous n'arrétons pas à chercher toujours des nouvelles idées pour avancer et créer . Nos compétences diverses et variés avec un état d'esprit d'entraide ne fait que créer des belles choses.
                        </p>
                      </div>
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

export default NousChoisir;

import React from "react";
import PropTypes from "prop-types";

const CaseSetudList = (props) => {
  return (
    <div>
      {/* <!-- case-studies --> */}
      <section class="case-studies">
        <div class="container">
          <div
            class="row wow zoomIn animated"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <div class="col-sm-6 col-lg-6">
              <div class="case-studies-box">
                <img src="assets/images/gallery-01.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a
                    href="#"
                    class="wow zoomIn animated"
                    data-wow-duration=".5s"
                    data-wow-delay=".2s"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="case-studies-box">
                <img src="assets/images/gallery-02.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="case-studies-box">
                <img src="assets/images/gallery-03.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="case-studies-box">
                <img src="assets/images/gallery-04.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="case-studies-box">
                <img src="assets/images/gallery-05.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="case-studies-box">
                <img src="assets/images/gallery-06.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="case-studies-box">
                <img src="assets/images/gallery-07.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="case-studies-box">
                <img src="assets/images/gallery-08.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="case-studies-box">
                <img src="assets/images/gallery-09.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="case-studies-box">
                <img src="assets/images/gallery-10.jpg" alt="gallery" />
                <div class="case-studies-box-hover">
                  <a href="#">+</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- / case-studies -->	 */}
      {/* <!-- px-bg --> */}
      <section class="px-bg2">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-lg-8">
              <h2>
                Are you looking for professional advice for your business or
                your industry?
              </h2>
            </div>
            <div class="col-lg-4 text-right">
              <a href="#">get a free quate</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /px-bg -->	 */}
    </div>
  );
};

export default CaseSetudList;

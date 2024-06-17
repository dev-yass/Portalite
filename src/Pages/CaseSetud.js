import React from "react";
import PropTypes from "prop-types";

const CaseSetud = (props) => {
  return (
    <div>
      {/* <!-- case-studies --> */}
      <section class="case-studies">
        <div class="container">
          <div
            class="row wow fadeIn animated"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6">
                  <div class="case-studies-detalis-img">
                    <img
                      src="assets/images/case-study-details-01.jpg"
                      alt="case"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="case-studies-detalis-img">
                    <img
                      src="assets/images/case-study-details-02.jpg"
                      alt="case"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="case-studies-detalis-img">
                    <img
                      src="assets/images/case-study-details-03.jpg"
                      alt="case"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="case-studies-detalis-img">
                    <img
                      src="assets/images/case-study-details-04.jpg"
                      alt="case"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="case-studies-details-text">
                <hr />
                <h2>Challenge</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veri tatis et quasi architecto
                  beatae vitae dicta explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit.
                </p>
                <ul>
                  <li>
                    <div class="case-studies-details-li-text">
                      <h4>There are many variations of passages available</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="case-studies-details-li-text">
                      <h4>There are many variations of passages available</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="case-studies-details-text">
                <hr />
                <h2>Solution</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veri tatis et quasi architecto
                  beatae vitae dicta explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
              <div class="case-studies-details-text2">
                <hr />
                <h2>Results</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium dolo remque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veri tatis et quasi architecto
                  beatae vitae dicta explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit.
                </p>
                <ul>
                  <li>Reduced lead time by 43%</li>
                  <li>Decreased variability by 50%</li>
                  <li>Lowered the risk of back-order by 95%</li>
                  <li>Increased stock for finished goods by 10%</li>
                </ul>
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

export default CaseSetud;

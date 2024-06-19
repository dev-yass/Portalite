import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = (props) => {
  const [article, setarticle] = useState({});

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/articles/" + id, {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setarticle(response.data[0]);
            console.log("testt", response.data[0]);
          }
        });
    })();
  }, []);

  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">Articles</h2>
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
            <li className="active">Articles</li>
          </ul>
        </div>
      </div>
      {/* End breadcrumb */}
      <section class="blog-deatils">
        {/* <!-- .blog --> */}
        <div class="container">
          <div class="col-sm-12 col-md-12 blog-deatails card-blog">
            <img class="blog-img2" src={article?.image} alt="gallery1" />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <p className="blog-content tilte">
                  {" "}
                  <strong> {article?.title} </strong>{" "}
                </p>

                <p className="blog-content">{article?.content}</p>
                <p class="time text-center blog-content">
                  <b>
                    By <span class="author"> {article?.author} </span>
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- /.blog --> */}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import ClipLoader from "react-spinners/ClipLoader";

const Custompage = (props) => {
  const [data, setdata] = useState({});
  const [comp, setcomp] = useState();
  const [load, setload] = useState();
  const { name } = useParams();

  useEffect(() => {
    (async () => {
      await axios
        .get("https://portalite.fr/api/pages", {
         
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
         
        })
        .then((response) => {
          if (response.data) {
            setdata(response.data.find((page) => page.name === name));
            setcomp(
              parse(response.data.find((page) => page.name === name)?.code)
            );
            setload(false);
          }
        });
    })();
  }, [name]);

  return (
    <div>
      {/* pagebanner */}
      <section id="pagebanner">
        <div className="page-title">
          <h2 className="white text-center">{data.name}</h2>
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
            <li className="active">{data.name}</li>
          </ul>
        </div>
      </div>
      {/* End breadcrumb */}

      {comp}
      <ClipLoader
        color="#00aaa8"
        loading={load}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Custompage;

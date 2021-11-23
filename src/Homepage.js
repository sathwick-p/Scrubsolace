import React from "react";
import "./Homepage.css";
import milk from "./imgs/milk.png";
import lolli_icon from "./imgs/lolli_icon.png";
import sprinkles from "./imgs/sprinkles.png";
import hand from "./imgs/hand2.png";
import gumball from "./imgs/gumball.png";
function Homepage() {
  var titleStyle = {
    color: "#001a3b",
  };
  return (
    <>
      <div>
        <div className="banner-area">
          <div className="content-area">
            <div className="content">
              <h1 style={titleStyle} className="main_title">
                Scrubsolace.
              </h1>
              <h2 style={titleStyle} className="sub_title">
                Personalised Scrubs
              </h2>
              <button className="browse_products">
                BROWSE PRODUCTS
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="container-fluid px-0" id="data">
        <div className="row align-items-center content">
          <div className="col-md-6 order-2 order-md-1">
            <img src={milk} alt="" className="img-fluid" id="img" />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 order-md-2">
                <h2 className="" id="content-title">
                  Scrubsolace.
                </h2>
                <img src={lolli_icon} alt="" className="d-none d-lg-inline" />
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus labore velit consequatur quibusdam? Debitis ab
                  repellendus culpa cum et sapiente, nisi praesentium deserunt?
                  Facilis architecto error odio hic placeat Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam quae
                  praesentium, fugit ad, quos aperiam rerum. Distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="extraSpace"></div>

        <div className="row align-items-center content" id="data">
          <div className="col-md-6 text-center">
            <div className="row justify-content-center mb-5 order-md-2">
              <div className="col-10 col-lg-8 blurb">
                <h2 className="" id="content-title">
                  Scrubsolace.
                </h2>
                <img src={lolli_icon} alt="" className="d-none d-lg-inline" />
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus labore velit consequatur quibusdam? Debitis ab
                  repellendus culpa cum et sapiente, nisi praesentium deserunt?
                  Facilis architecto error odio hic placeat Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam quae
                  praesentium, fugit ad, quos aperiam rerum. Distinctio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={gumball} alt="" className="img-fluid" id="img" />
          </div>
        </div>

        <div id="extraSpace"></div>

        <div className="row align-items-center content" id="data">
          <div className="col-md-6 order-2 order-md-1">
            <img src={sprinkles} alt="" className="img-fluid" id="img" />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2 className="" id="content-title">
                  Scrubsolace.
                </h2>
                <img src={lolli_icon} alt="" className="d-none d-lg-inline" />
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus labore velit consequatur quibusdam? Debitis ab
                  repellendus culpa cum et sapiente, nisi praesentium deserunt?
                  Facilis architecto error odio hic placeat Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam quae
                  praesentium, fugit ad, quos aperiam rerum. Distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="carousel">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={sprinkles} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={gumball} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={sprinkles} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;

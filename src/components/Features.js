import { Link } from "react-router-dom";
const Features = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h6 className="text-primary">Features</h6>
              <h4 className="title mb-4">Explore awesome features</h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span className="text-primary font-weight-bold">GasToGo</span>
                that can provide everything you need
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
              <div className="icons rounded h2 text-center text-primary px-3">
                <i className="uil uil-airplay"></i>
              </div>

              <div className="card-body p-0 content">
                <h5 className="mt-4">
                  <Link to="" className="title text-dark">
                    Geolocation API
                  </Link>
                </h5>
                <p className="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <Link to="" className="text-primary">
                  Read More
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
              <div className="icons rounded h2 text-center text-primary px-3">
                <i className="uil uil-clipboard-alt"></i>
              </div>

              <div className="card-body p-0 content">
                <h5 className="mt-4">
                  <Link to="" className="title text-dark">
                    Dashboard
                  </Link>
                </h5>
                <p className="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <Link to="" className="text-primary">
                  Read More
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
              <div className="icons rounded h2 text-center text-primary px-3">
                <i className="uil uil-credit-card-search"></i>
              </div>

              <div className="card-body p-0 content">
                <h5 className="mt-4">
                  <Link to="" className="title text-dark">
                    Data Analytics
                  </Link>
                </h5>
                <p className="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <Link to="" className="text-primary">
                  Read More
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
              <div className="icons rounded h2 text-center text-primary px-3">
                <i className="uil uil-ruler-combined"></i>
              </div>

              <div className="card-body p-0 content">
                <h5 className="mt-4">
                  <Link to="" className="title text-dark">
                    Easy To Use
                  </Link>
                </h5>
                <p className="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <Link to="" className="text-primary">
                  Read More
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
              <div className="icons rounded h2 text-center text-primary px-3">
                <i className="uil uil-exposure-alt"></i>
              </div>

              <div className="card-body p-0 content">
                <h5 className="mt-4">
                  <Link to="" className="title text-dark">
                    Daily Reports
                  </Link>
                </h5>
                <p className="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <Link to="" className="text-primary">
                  Read More
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
              <div className="icons rounded h2 text-center text-primary px-3">
                <i className="uil uil-clock"></i>
              </div>

              <div className="card-body p-0 content">
                <h5 className="mt-4">
                  <Link to="" className="title text-dark">
                    Real Time Ordering
                  </Link>
                </h5>
                <p className="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <Link to="" className="text-primary">
                  Read More
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

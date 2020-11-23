import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row mt-5 pt-lg-3 justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-4">Download Our App Now !</h4>
              <p className="text-muted para-desc mx-auto">
                Start working with
                <span className="text-primary font-weight-bold">Gas To Go</span>
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>
              <div className="mt-4">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            name="number"
                            id="number"
                            type="number"
                            className="form-control"
                            placeholder="Your Cell Number. :"
                            required=""
                            aria-describedby="cellnumber"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary submitBnt"
                              type="submit"
                              id="cellnumber"
                            >
                              Send App Link
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <p className="text-muted">Or</p>

                <Link to="" className="btn btn-primary mt-2 mr-2">
                  <i className="mdi mdi-apple"></i> App Store
                </Link>
                <Link to="" className="btn btn-outline-primary mt-2">
                  <i className="mdi mdi-google-play"></i> Play Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

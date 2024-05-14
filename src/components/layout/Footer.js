import React from 'react';

const Footer = () => {
  return (
    <footer className="text-light text-center" style={{ backgroundColor: "rgba(21,41,72,255)" }}>
      <div className="container p-4 pb-0" >
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form5Example26" className="form-control" />
                  <label className="form-label" for="form5Example26">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button data-mdb-ripple-init type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div className="text-center p-3 text-light" style={{ backgroundColor: "rgba(21,41,72,255)" }}>
        © 2024 Copyright:
        <a className="text-light" href="/"> The News </a>
      </div>

    </footer>
  )
};

export default Footer;

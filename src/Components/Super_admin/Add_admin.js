import React from "react";
import Banner from "../Banner";

export default function Add_admin() {
  return (
    <div className="app-main__outer">
      <div className="app-main__inner">
        <Banner title="Ajouter conseilleur de vente" icon="pe-7s-add-user" />
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h5 className="card-title">Grid Rows</h5>
            <form className>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleEmail11" className>
                      Email
                    </label>
                    <input
                      name="email"
                      id="exampleEmail11"
                      placeholder="with a placeholder"
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePassword11" className>
                      Password
                    </label>
                    <input
                      name="password"
                      id="examplePassword11"
                      placeholder="password placeholder"
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="position-relative form-group">
                <label htmlFor="exampleAddress" className>
                  Address
                </label>
                <input
                  name="address"
                  id="exampleAddress"
                  placeholder="1234 Main St"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="position-relative form-group">
                <label htmlFor="exampleAddress2" className>
                  Address 2
                </label>
                <input
                  name="address2"
                  id="exampleAddress2"
                  placeholder="Apartment, studio, or floor"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleCity" className>
                      City
                    </label>
                    <input
                      name="city"
                      id="exampleCity"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleState" className>
                      State
                    </label>
                    <input
                      name="state"
                      id="exampleState"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleZip" className>
                      Zip
                    </label>
                    <input
                      name="zip"
                      id="exampleZip"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="position-relative form-check">
                <input
                  name="check"
                  id="exampleCheck"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="exampleCheck" className="form-check-label">
                  Check me out
                </label>
              </div>
              <button className="mt-2 btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

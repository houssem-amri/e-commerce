import axios from "axios";
import React, { useState } from "react";
import Banner from "../Banner";


export default function Add_admin() {
const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [City, setCity] = useState("");
  const [state, setState] = useState("");
  const [Zip, setZip] = useState("");
 

  const ChangeNom = (event) => {
    setNom(event.target.value);
  };
  const ChangePrenom = (event) => {
    setPrenom(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const ChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const ChangeAdress = (event) => {
    setAdress(event.target.value);
  };
  const ChangeCity = (event) => {
    setCity(event.target.value);
  };
  const ChangeState = (event) => {
    setState(event.target.value);
  };
  const ChangeZip = (event) => {
    setZip(event.target.value);
  };

  const HandleSubmit = () => {
    let data = {
     Nom:Nom,
     Prenom:Prenom,
      email: email,
      Password: Password,
      adress: adress,
      City:City,
      state: state,
     Zip:Zip,
    };
    console.log("here response", data);

    axios
    .post("http://localhost:3200/api/ajouter_conseilleur", data)
    .then((response) => {
      console.log("here response", response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });







  };
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
                    
                    <label htmlFor="exampleNom" className>
                     nom
                    </label>
                    <input
                      name="Nom"
                      id="exampleNom"
                      placeholder="Nom"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeNom(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    
                    <label htmlFor="examplePrenom" className>
                    Prenom
                    </label>
                    <input
                      name="Prenom"
                      id="examplePrenom"
                      placeholder="prenom"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangePrenom(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">

                    <label htmlFor="exampleEmail11" className>
                      Email
                    </label>
                    <input
                      name="email"
                      id="exampleEmail11"
                      placeholder="aaaaa@gmail.com"
                      type="email"
                      className="form-control"
                      onChange={(event) => ChangeEmail(event)}
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
                      placeholder="******"
                      type="password"
                      className="form-control"
                      onChange={(event) => ChangePassword(event)}
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
                  onChange={(event) => ChangeAdress(event)}
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
                      onChange={(event) => ChangeCity(event)}
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
                      onChange={(event) => ChangeState(event)}
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
                      onChange={(event) => ChangeZip(event)}
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
              <button type= "button" onClick={HandleSubmit}className="mt-2 btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>


  );}
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../Banner';

export default function Edit_categorie() {
const[Categorie, setcategorie] = useState("");

let param = useParams();
let navigate=useNavigate();

useEffect(() => {
  getCategorieById();
}, []);

const changecategorie = (event) => {setcategorie (event.target.value);};

  const getCategorieById = () => {
    axios
      .get("http://localhost:3200/api/get_categorie_byId/" + param.id)
      .then((result) => {
        let data = result.data.categorie;
        setcategorie(data.Categorie);
      })
      .catch((err) => {
        console.log(err);
      });
  };
const Handlesubmit = () => {
    let data ={
        _id: param.id,
        Categorie:Categorie, 
        
    };
    console.log("here response", data);
    axios
    .put("http://localhost:3200/api/Update_categorie", data)
    .then((response) => {
      console.log("here response", response.data.message);
      setTimeout(() => {
        navigate("/Table_categorie")
       }, 100);
        
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
   
         <div className="app-main__outer">
    <div className="app-main__inner">
      <Banner title="Ajouter Catégorie" icon="pe-7s-cart" />
      <div className="main-card mb-3 card">
        <div className="card-body">
          <h5 className="card-title">remplir formulaire</h5>
          <form>
            <div className="form-row">
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplecategorie">
                   Categorie
                  </label>
                  <input
                    name=" categorie"
                    id="examplecategorie"
                    placeholder="categorie"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changecategorie(event)}
                    value={ Categorie|| ""}
                  />
                </div>
              </div>
            </div>
            
            <button type="button"onClick={Handlesubmit} className="mt-2 btn btn-primary">ajouter</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}
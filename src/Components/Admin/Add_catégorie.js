import axios from 'axios';
import React, { useState } from 'react'
import Banner from '../Banner';

export default function Add_catégorie() {
const[Catégorie, setcatégorie] = useState("");

const changecatégorie = (event) => {setcatégorie (event.target.value);};


const Handlesubmit = () => {
    let data ={
        Categorie:Catégorie, 
        
    };
    console.log("here response",data);
axios
.post("http://localhost:3200/api/ajouter_categorie", data)
.then((response) => {
  console.log("here response", response.data.message);
})
.catch((error) => {
  console.log(error);
});
}

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
                  <label htmlFor="examplecatégorie">
                   Catégorie
                  </label>
                  <input
                    name=" catégorie"
                    id="examplecatégorie"
                    placeholder="catégorie"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changecatégorie(event)}
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
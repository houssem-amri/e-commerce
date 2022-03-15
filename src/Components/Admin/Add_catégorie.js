import React, { useState } from 'react'
import Banner from '../Banner';

export default function Add_catégorie() {
const[nomCatégorie, setnomcatégorie] = useState("");

const changenomcatégorie = (event) => {setnomcatégorie (event.target.value);};


const Handlesubmit = () => {
    let data ={
        NOMCAT:nomCatégorie, 
        
    }
    console.log("here response",data);

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
                  <label htmlFor="examplenomcatégorie">
                   Catégorie
                  </label>
                  <input
                    name=" nomcatégorie"
                    id="examplenomcatégorie"
                    placeholder="nomcatégorie"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changenomcatégorie(event)}
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
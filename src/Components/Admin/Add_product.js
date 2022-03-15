import React, { useState } from 'react'
import Banner from '../Banner';

export default function Add_product() {
const[nomproduit, setnomproduit] = useState("");
const[Catégorie, setCatégorie] = useState("");
const[Code, setCode] = useState("");
const[quantité, setquantité]= useState("");
const[Prix, setPrix]= useState("");
const[Discription, setDiscription]= useState("");

const changenomproduit = (event) => {setnomproduit (event.target.value);};
const changeCatégorie = (event) => {setCatégorie (event.target.value);};
const changeCode = (event) => {setCode (event.target.value);};
const changequantité = (event) => {setquantité (event.target.value);};
const changePrix = (event) => {setPrix (event.target.value);};
const changeDiscription = (event) => {setDiscription (event.target.value);};

const Handlesubmit = () => {
    let data ={
        NOMPRODUIT:nomproduit, 
        CATEGORIE:Catégorie,
        CODE:Code,
        QTE:quantité,
        PRIX:Prix,
        DISCRIPTION:Discription,
    }
    console.log("here response",data);

} 


  return (
   
         <div className="app-main__outer">
    <div className="app-main__inner">
      <Banner title="Ajouter produits" icon="pe-7s-cart" />
      <div className="main-card mb-3 card">
        <div className="card-body">
          <h5 className="card-title">remplir formulaire</h5>
          <form>
            <div className="form-row">
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplenomproduit">
                    nom produit
                  </label>
                  <input
                    name=" nom produit"
                    id="examplenomproduit"
                    placeholder="nom produit"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changenomproduit(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleCatégorie">
                  Catégorie
                  </label>
                  <input
                    name="Catégorie"
                    id="exampleCatégorie"
                    placeholder="Catégorie"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changeCatégorie(event)}
                  />
                </div>
              </div>
            </div>
            <div className="position-relative form-group">
              <label htmlFor="examplecode">
              code
              </label>
              <input
                name="code"
                id="examplecode"
                placeholder="****"
                type="text"
                className="form-control"
                onChange={(event)=>changeCode(event)}
              />
            </div>
            <div className="position-relative form-group">
              <label htmlFor="exampleQuantité">
              Quantité
              </label>
              <input
                name="Quantité"
                id="exampleQuantité"
                placeholder="Quantité"
                type="text"
                className="form-control"
                onChange={(event)=>changequantité(event)}
              />
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplePrix" >
                  Prix
                  </label>
                  <input
                    name="Prix"
                    id="examplePrix"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changePrix(event)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="position-relative form-group">
                  <label htmlFor="exampleDiscription">
                    Discription
                  </label>
                  <input
                    name="Discription"
                    id="exampleDiscription"
                    type="text"
                    className="form-control"
                    onChange={(event)=>changeDiscription(event)}
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


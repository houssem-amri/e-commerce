import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Banner from '../Banner'

export default function Table_Categorie() {
    const [Categorie, setCategorie] = useState([]);

    useEffect(() => {
      getAllCategorie();
    }, []);
  
    const getAllCategorie = () => {
      axios
        .get("http://localhost:3200/api/get_categorie")
        .then((result) => {
          setCategorie(result.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
 
  
    return (
        <div className="app-main__outer">
            <div className="app-main__inner">
                <Banner title="Ajouter categorie" icon="pe-7s-cart" />
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">tableau des categories</h5>
                        <div className="row">
                            <div className="col-12">
                                <table className="mb-0 table">
                                    <thead>
                                        <tr> 
                                            <th>Categorie</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Categorie.map((value, i) => (
                                            <tr key={i}> 
                                                <td>{value.Categorie}</td>
                                                <td>
                                                    <button className="mb-2 mr-2 btn-transition btn btn-outline-info">
                                                        <i className="pe-7s-pen" style={{ fontSize: 18 }}></i>
                                                    </button>
                                                    <button
                                                        className="mb-2 mr-2 btn-transition btn btn-outline-danger"

                                                    >
                                                        <i
                                                            className="pe-7s-trash"
                                                            style={{ fontSize: 18 }}
                                                        ></i>
                                                    </button>


                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


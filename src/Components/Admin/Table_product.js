import React, { useState } from 'react'
import Banner from '../Banner'

export default function Table_product() {
    const data = [
        {
            nom_produit: "parfum",
            catégorie: "cosmetique",
            code: "222",
            quantité: "1",
            prix: "150",
        },
        {
            nom_produit: "tablette",
            catégorie: "smart phone",
            code: "111",
            quantité: "1",
            prix: "450",
        },
        {
            nom_produit: "machine a laver",
            catégorie: "electro ménager",
            code: "33",
            quantité: "2",
            prix: "2000",
        },
    ]
    return (
        <div className="app-main__outer">
            <div className="app-main__inner">
                <Banner title="Ajouter produits" icon="pe-7s-cart" />
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">tableau des produits</h5>
                        <div className="row">
                            <div className="col-12">
                                <table className="mb-0 table">
                                    <thead>
                                        <tr>
                                            <th>nom_produit</th>
                                            <th>catégorie</th>
                                            <th>code</th>
                                            <th>quantité</th>
                                            <th>prix</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((value, i) => (
                                            <tr key={i}>
                                                <td>{value.nom_produit}</td>
                                                <td>{value.catégorie}</td>
                                                <td>{value.code}</td>
                                                <td>{value.quantité}</td>
                                                <td>{value.prix}</td>
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


import React, { useState } from 'react'
import Banner from '../Banner'

export default function Table_product() {
    const data = [
        { 
            catégorie: "cosmetique",
        },
        {
            catégorie: "smart phone",
        },
        { 
            catégorie: "electro ménager",
        },
        { 
            catégorie: "Sport",
        },
        { 
            catégorie: "audiovisuel ",
        },
    ]
    return (
        <div className="app-main__outer">
            <div className="app-main__inner">
                <Banner title="Ajouter catégorie" icon="pe-7s-cart" />
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">tableau des catégories</h5>
                        <div className="row">
                            <div className="col-12">
                                <table className="mb-0 table">
                                    <thead>
                                        <tr> 
                                            <th>catégorie</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((value, i) => (
                                            <tr key={i}> 
                                                <td>{value.catégorie}</td>
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


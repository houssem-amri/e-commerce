import React, { useState } from 'react'
import Banner from '../Banner'

export default function Table_product() {
    const data = [
        {
            First_name: "abdaaalh",
            Last_name: "jdidi",
            Email: "abdaalh@gmail.com",
            password: "******",
            
        },
        {
            First_name: "ahmed",
            Last_name: "bousselmi",
            Email: "ahmed@gmail.com",
            password: "******",
        },
        {
            First_name: "ahlem",
            Last_name: "ghaz",
            Email: "ahleem@gmail.com",
            password: "******",
        },
        {
            First_name: "mariem",
            Last_name: "garfi",
            Email: "mariem@gmail.com",
            password: "******",
        },
        {
            First_name: "houssem",
            Last_name: "amri",
            Email: "houssem@gmail.com",
            password: "******",
        },
        {
            First_name: "nabiha",
            Last_name: "jebli",
            Email: "nabiha@gmail.com",
            password: "******",
        },
    ]
    return (
        <div className="app-main__outer">
            <div className="app-main__inner">
                <Banner title="Ajouter produits" icon="pe-7s-users" />
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">tableau des utilisateurs</h5>
                        <div className="row"> 
                            <div className="col-12">
                                <table className="mb-0 table">
                                    <thead>
                                        <tr>
                                            <th> First_name</th>
                                            <th> Last_name</th>
                                            <th>Email</th>
                                            <th>password</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((value, i) => (
                                            <tr key={i}>
                                                <td>{value.First_name}</td>
                                                <td>{value.Last_name}</td>
                                                <td>{value.Email}</td>
                                                <td>{value.password}</td>
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


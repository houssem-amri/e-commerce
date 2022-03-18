import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Banner";

export default function Table_conseilleur() {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    getAllConseilleur();
  }, []);

  const getAllConseilleur = () => {
    axios
      .get("http://localhost:3200/api/get_allUsers")
      .then((result) => {
        console.log(result.data.users);
        setUsers(result.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="app-main__outer">
      <div className="app-main__inner">
        <Banner title="Table Conseilleur" icon="pe-7s-users" />
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h5 className="card-title">tableau des utilisateurs</h5>
            <div className="row">
              <div className="col-12">
                <table className="mb-0 table">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Email</th>
                      <th>password</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((value, i) => {
                      if (value.role==="conseilleur") {
                        return(
                          <tr key={i}>
                            <td>{value.nom}</td>
                            <td>{value.prenom}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            <td>
                              <button className="mb-2 mr-2 btn-transition btn btn-outline-info">
                                <i
                                  className="pe-7s-pen"
                                  style={{ fontSize: 18 }}
                                ></i>
                              </button>
                              <button className="mb-2 mr-2 btn-transition btn btn-outline-danger">
                                <i
                                  className="pe-7s-trash"
                                  style={{ fontSize: 18 }}
                                ></i>
                              </button>
                            </td>
                          </tr>)
                      }
                      
                   } )}
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

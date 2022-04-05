import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import Modal_delete from "../Super_admin/Modal_delete";
import { useNavigate } from "react-router-dom";

export default function Table_Categorie() {
    const [Categorie, setCategorie] = useState([]);
    const [open, setOpen] = useState(false);
    const [categorieSelected, setcategorieSelected] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        getAllCategorie();
    }, []);
    
    const handleClickOpen = (categorie) => {
        setcategorieSelected(categorie)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        getAllCategorie();
    };


    const getAllCategorie = () => {
        axios
            .get("http://localhost:3200/api/get_categorie")
            .then((result) => {
                console.log(result.data.categorie);
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
                                                    <button className="mb-2 mr-2 btn-transition btn btn-outline-info" onClick={() => navigate("/Edit_categorie/" + value._id)}>
                                                        <i className="pe-7s-pen" style={{ fontSize: 18 }}></i>
                                                    </button>
                                                    <button
                                                        className="mb-2 mr-2 btn-transition btn btn-outline-danger"
                                                        onClick={() => handleClickOpen(value)}
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
                                {open ? <Modal_delete data={categorieSelected} open={open} type="categorie" onClose={handleClose} /> : null}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


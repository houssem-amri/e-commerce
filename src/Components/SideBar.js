import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <Link to="/" className="mm-active">
                <i className="metismenu-icon pe-7s-rocket" />
                Analyse_dashboard
              </Link>
            </li>
            <li className="app-sidebar__heading">UI Components</li>
            <li>
            <Link to="index.html">
                <i className="metismenu-icon pe-7s-user" />
                conseilleur
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
             </Link>
              <ul>
                <li>
                  <Link to="Add_conseilleur">
                    <i className="metismenu-icon" />
                    Add conseilleur
                  </Link>
                </li>
                <li>
                  <Link to="Table_conseilleur">
                    <i className="metismenu-icon" />
                    Table conseilleur
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="index.html">
                <i className="metismenu-icon pe-7s-cart" />
               produit
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>
              <ul>
                <li>
                  <Link to="/Add_product">
                    <i className="metismenu-icon" />
                   Ajouter Produit
                  </Link>
                </li>
                <li>
                  <Link to="/Table_product">
                    <i className="metismenu-icon" />
                    Tableau de Produit
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-cart" />
                Categorie
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <Link to="Add_categorie">
                    <i className="metismenu-icon" />
                    Ajouter Categorie
                  </Link>
                </li>
                <li>
                  <Link to="Table_categorie">
                    <i className="metismenu-icon" />
                   tableau de Categorie
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/table_user">
                <i className="metismenu-icon pe-7s-user" />
                utilisateur
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>
              <ul>
               
                <li>
                  <Link to="Table_user">
                    <i className="metismenu-icon" />
                    tableau d'utilisateur
                  </Link>
                </li>
              </ul>
            </li>

           </ul>
        </div>
      </div>
    </div>
  );
}

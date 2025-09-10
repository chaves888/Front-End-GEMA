import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">

              <div className="sb-sidenav-menu-heading">Cadastros</div>
              <Link className="nav-link" to="/usuarios">
                <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                Usuários
              </Link>
              <Link className="nav-link" to="/escolas">
                <div className="sb-nav-link-icon"><i className="fas fa-school"></i></div>
                Escolas
              </Link>
              <Link className="nav-link" to="/cidades">
                <div className="sb-nav-link-icon"><i className="fas fa-city"></i></div>
                Cidades
              </Link>
              <Link className="nav-link" to="/bairros">
                <div className="sb-nav-link-icon"><i className="fas fa-map"></i></div>
                Bairros
              </Link>
              <Link className="nav-link" to="/cardapios">
                <div className="sb-nav-link-icon"><i className="fas fa-utensils"></i></div>
                Cardápios
              </Link>

            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logado como:</div>
            Administrador
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

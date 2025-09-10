import React from "react";

const Header = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand */}
      <a className="navbar-brand ps-3" href="/">Painel</a>

      {/* Sidebar Toggle */}
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"><i className="fas fa-bars"></i></button>

      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Pesquisar..." />
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {/* Navbar User */}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"
            role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#!">Configurações</a></li>
            <li><a className="dropdown-item" href="#!">Log de Atividades</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#!">Sair</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

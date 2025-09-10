import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Usuários
import UsuarioList from '../pages/usuarios/UsuarioList';
import UsuarioForm from '../pages/usuarios/UsuarioForm';

// Escolas
import EscolaList from '../pages/escolas/EscolaList';
import EscolaForm from '../pages/escolas/EscolaForm';

// Cidades
import CidadeList from '../pages/cidades/CidadeList';
import CidadeForm from '../pages/cidades/CidadeForm';

// Bairros
import BairroList from '../pages/bairros/BairroList';
import BairroForm from '../pages/bairros/BairroForm';

// Cardápios
import CardapioList from '../pages/cardapios/CardapioList';
import CardapioForm from '../pages/cardapios/CardapioForm';

// Layout
import Layout from '../components/layout/Layout';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redireciona para /usuarios */}
      <Route path="/" element={<Navigate to="/usuarios" replace />} />

      {/* Usuários */}
      <Route path="/usuarios" element={<Layout><UsuarioList /></Layout>} />
      <Route path="/usuarios/novo" element={<Layout><UsuarioForm /></Layout>} />
      <Route path="/usuarios/:id" element={<Layout><UsuarioForm /></Layout>} />

      {/* Escolas */}
      <Route path="/escolas" element={<Layout><EscolaList /></Layout>} />
      <Route path="/escolas/novo" element={<Layout><EscolaForm /></Layout>} />
      <Route path="/escolas/:id" element={<Layout><EscolaForm /></Layout>} />

      {/* Cidades */}
      <Route path="/cidades" element={<Layout><CidadeList /></Layout>} />
      <Route path="/cidades/novo" element={<Layout><CidadeForm /></Layout>} />
      <Route path="/cidades/:id" element={<Layout><CidadeForm /></Layout>} />

      {/* Bairros */}
      <Route path="/bairros" element={<Layout><BairroList /></Layout>} />
      <Route path="/bairros/novo" element={<Layout><BairroForm /></Layout>} />
      <Route path="/bairros/:id" element={<Layout><BairroForm /></Layout>} />

      {/* Cardápios */}
      <Route path="/cardapios" element={<Layout><CardapioList /></Layout>} />
      <Route path="/cardapios/novo" element={<Layout><CardapioForm /></Layout>} />
      <Route path="/cardapios/:id" element={<Layout><CardapioForm /></Layout>} />
    </Routes>
  );
}

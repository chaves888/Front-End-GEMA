// src/pages/cidades/CidadeList.jsx
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CidadeList = () => {
  const navigate = useNavigate();

  // Array de teste de cidades
  const [cidades, setCidades] = useState([
    { id: 1, nome: 'São Paulo', estado: 'SP' },
    { id: 2, nome: 'Rio de Janeiro', estado: 'RJ' },
    { id: 3, nome: 'Belo Horizonte', estado: 'MG' },
  ]);

  const handleEdit = (id) => {
    navigate(`/cidades/${id}/editar`);
  };

  const handleDelete = (id) => {
    // Apenas simulação para teste
    setCidades(cidades.filter(c => c.id !== id));
  };

  return (
    <TableContainer component={Paper} style={{ padding: 20 }}>
      <Button variant="contained" onClick={() => navigate('/cidades/novo')} style={{ marginBottom: 20 }}>
        Nova Cidade
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cidades.map(cidade => (
            <TableRow key={cidade.id}>
              <TableCell>{cidade.id}</TableCell>
              <TableCell>{cidade.nome}</TableCell>
              <TableCell>{cidade.estado}</TableCell>
              <TableCell>
                <Button variant="outlined" size="small" onClick={() => handleEdit(cidade.id)} style={{ marginRight: 8 }}>
                  Editar
                </Button>
                <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(cidade.id)}>
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CidadeList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Array de teste
  const usuariosTeste = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '123456789', cargo: 'Professor', escola: { nome: 'Escola A' } },
    { id: 2, nome: 'Maria Souza', email: 'maria@email.com', telefone: '987654321', cargo: 'Diretor', escola: { nome: 'Escola B' } },
    { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', telefone: '456123789', cargo: 'Coordenador', escola: null },
  ];

  useEffect(() => {
    // Simula carregamento
    setLoading(true);
    setTimeout(() => {
      setUsuarios(usuariosTeste);
      setLoading(false);
    }, 500); // meio segundo só para simular loading
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Confirma exclusão?')) return;
    // Remove do array local
    setUsuarios(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Usuários</h2>
      <Button component={Link} to="/usuarios/novo" variant="contained" sx={{ mb: 2 }}>Novo Usuário</Button>
      {loading ? <div>Carregando...</div> : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Escola</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map(u => (
              <TableRow key={u.id}>
                <TableCell>{u.id}</TableCell>
                <TableCell>{u.nome}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.telefone}</TableCell>
                <TableCell>{u.cargo}</TableCell>
                <TableCell>{u.escola?.nome || '-'}</TableCell>
                <TableCell>
                  <IconButton component={Link} to={`/usuarios/${u.id}`}><EditIcon/></IconButton>
                  <IconButton onClick={() => handleDelete(u.id)}><DeleteIcon/></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

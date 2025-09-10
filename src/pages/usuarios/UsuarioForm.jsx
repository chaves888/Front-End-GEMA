import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, MenuItem } from '@mui/material';
import UsuarioService from '../../api/UsuarioService';
// import EscolaService from '../../api/EscolaService'; // não precisa por enquanto

export default function UsuarioForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, setValue } = useForm();
  
  // Array de teste de escolas
  const [escolas, setEscolas] = useState([
    { id: 1, nome: 'Escola A' },
    { id: 2, nome: 'Escola B' },
    { id: 3, nome: 'Escola C' },
  ]);

  useEffect(() => {
    // Simulando um fetch de usuário caso tenha id
    if (id) {
      UsuarioService.getById(id).then(data => {
        setValue('nome', data.nome || '');
        setValue('email', data.email || '');
        setValue('telefone', data.telefone || '');
        setValue('cargo', data.cargo || '');
        setValue('escola_id', data.escola_id || data.escola?.id || '');
      });
    }
  }, [id, setValue]);

  const onSubmit = async (formData) => {
    try {
      if(id) await UsuarioService.update(id, formData);
      else await UsuarioService.create(formData);
      navigate('/usuarios');
    } catch(err){ console.error(err); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20, display: 'grid', gap: 12 }}>
      <Controller name="nome" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="Nome" required />} />
      <Controller name="email" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="Email" required />} />
      <Controller name="telefone" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="Telefone" />} />
      <Controller name="cargo" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="Cargo" />} />
      <Controller name="escola_id" control={control} defaultValue="" render={({ field }) => (
        <TextField select label="Escola" {...field}>
          {escolas.map(e => <MenuItem key={e.id} value={e.id}>{e.nome}</MenuItem>)}
        </TextField>
      )} />
      <div>
        <Button variant="contained" type="submit">Salvar</Button>
        <Button sx={{ ml: 2 }} onClick={() => navigate(-1)}>Cancelar</Button>
      </div>
    </form>
  );
}

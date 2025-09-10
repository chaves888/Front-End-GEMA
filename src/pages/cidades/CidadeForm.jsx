import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem } from '@mui/material';

const CidadeForm = () => {
  const { control, handleSubmit } = useForm();
  
  // Array de teste de cidades
  const [cidades] = useState([
    { id: 1, nome: 'São Paulo' },
    { id: 2, nome: 'Rio de Janeiro' },
    { id: 3, nome: 'Belo Horizonte' },
  ]);

  const onSubmit = (data) => {
    console.log('Dados enviados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20, display: 'grid', gap: 12 }}>
      <Controller
        name="nome"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Nome da Cidade" required />}
      />

      <Controller
        name="estado"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField select label="Selecione a Cidade" {...field}>
            {cidades.map(c => (
              <MenuItem key={c.id} value={c.id}>{c.nome}</MenuItem>
            ))}
          </TextField>
        )}
      />

      <div>
        <Button variant="contained" type="submit">Salvar</Button>
        <Button sx={{ ml: 2 }} type="button">Cancelar</Button>
      </div>
    </form>
  );
};

export default CidadeForm;

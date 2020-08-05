import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';
import useForm from '../../../../hooks/useForm';

export default function CadastroCategoria() {
  const initialCategoryValues = {
    titulo: '',
    description: '',
    color: '#112233',
  };

  const {
    category, handleChange, clearForm,
  } = useForm(initialCategoryValues);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8081/categorias'
      : 'https://shimiflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaServidor) => {
        const respostaConvertida = await respostaServidor.json();

        setCategorias([
          ...respostaConvertida,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria -
        {category.titulo}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          category,
        ]);

        clearForm();
      }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            value={category.titulo}
            name="titulo"
            onChange={handleChange}
          />
        </div>

        <div>
          <FormField
            label="Descrição"
            type="textarea"
            value={category.description}
            name="description"
            onChange={handleChange}
          />
        </div>

        <div>
          <FormField
            label="Cor"
            type="color"
            value={category.color}
            name="color"
            onChange={handleChange}
          />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li style={{ color: `${categoria.color}` }} key={categoria.id}>
            {categoria.titulo}
            {' '}
            {categoria.description}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

export default function CadastroCategoria() {
  const initialCategoryValues = {
    name: '',
    description: '',
    color: '#112233',
  };

  const [category, setCategory] = useState(initialCategoryValues);
  const [categorias, setCategorias] = useState([]);

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const { value } = e.target;

    setCategory({
      ...category,
      [chave]: value,
    });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria -
        {category.name}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          category,
        ]);

        setCategory(initialCategoryValues);
      }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            value={category.name}
            name="name"
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

      <ul>
        {categorias.map((categoria, indice) => (
          <li style={{ color: `${categoria.color}` }} key={indice}>
            {categoria.name}
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

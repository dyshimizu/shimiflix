import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import useForm from '../../../../hooks/useForm';
import Button from '../../../Button';
import videosRepository from '../../../../repositories/videos';
import categoriasRepository from '../../../../repositories/categorias';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriasTitulos = categorias.map(({ titulo }) => titulo);
  const { handleChange, category } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === category.categoria);

        console.log(categoriaEscolhida);

        videosRepository.create({
          titulo: category.titulo,
          url: category.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Video"
          type="titulo"
          value={category.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="url"
          value={category.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="categoria"
          value={category.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoriasTitulos}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

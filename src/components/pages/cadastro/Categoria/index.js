import React, { useState } from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'

export default function CadastroCategoria() {
    const initialCategoryValues = {
        name: '',
        description: '',
        color: '#112233',
    }

    const [category, setCategory] = useState(initialCategoryValues)
    const [categorias, setCategorias] = useState([])

    function handleChange(e) {
        const chave = e.target.getAttribute('name')
        const value = e.target.value

        setCategory({
            ...category,
            [chave]: value
        })

    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria - {category.name}</h1>

            <form onSubmit={e => {
                e.preventDefault()
                setCategorias([
                    ...categorias,
                    category
                ])

                setCategory(initialCategoryValues)
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                    <input
                            type="text"
                            value={category.name}
                            name='name'
                            onChange={handleChange}
                        />
                    </label>

                    <div>
                        <label>
                            Descrição:
                            <textarea
                                type="text"
                                value={category.description}
                                name='description'
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Cor:
                            <input
                                type="color"
                                value={category.color}
                                name='color'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li style={{ color: `${categoria.color}` }} key={indice}>
                            {categoria.name}
                            {' '}
                            {categoria.description}
                        </li>
                    )
                })
                }
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}
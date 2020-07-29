import React from 'react';
import Menu from './components/Menu/index'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'

export default props => {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}
      />
    </div>
  )
}


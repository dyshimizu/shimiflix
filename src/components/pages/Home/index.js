import React from 'react';
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import PageDefault from '../../PageDefault'

export default props => {
  return (
    <div style={{background: "#141414"}}>
      <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      </PageDefault>
    </div>
  )
}

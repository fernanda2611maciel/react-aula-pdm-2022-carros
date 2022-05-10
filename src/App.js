import React from 'react';
import './style.css';
import Carro from './Carro';
import Computador from "./Computador";

function Welcome(props) {
  return <h1>Olá, {props.name}! </h1>;
}

function App(props) {
  return (
    <div>
      <Computador
          pcGabinete="Corsair"
          pcCor="Preto"
          pmSocket="1155"
          pmMarca="Asus"
          procFrequencia="4.5GHz"
          procMarca="AMD"
          fontePotencia="1000w"
          fonteModelo="Arial"
          memFrequencia="2.6GHz"
          memTamanho="32gb"
          placaVideoMem="6gb"
          placaVideoModelo="RTX 3090ti"
        />

      <Carro modeloCarro="Ford" nome="Fusion" potencia="2.0" aro="1.7" />
      <Welcome name="Jackson" />
      <Welcome name="Chiquinha" />
      <Welcome name="Chaves" />
    </div>
  );
}
export default App;

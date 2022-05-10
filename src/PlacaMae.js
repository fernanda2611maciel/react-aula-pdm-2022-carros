import React from 'react';
import Fonte from './Fonte';
import Processador from './Processador';
import Memoria from './Memoria';
import PlacaVideo from './PlacaVideo';

export default function PlacaMae(props) {
  return (
    <div>
      <h2>Placa Mãe</h2>
      <h3>Socket: {props.pmSocket}</h3>
      <h3>Marca: {props.pmMarca}</h3>
      <hr />
      <Processador frequencia={props.procFrequencia} marca={props.procMarca} />
      <Memoria frequencia={props.memFrequencia} tamanho={props.memTamanho} />
      <Fonte potencia={props.fontePotencia} modelo={props.fonteModelo} />
      <PlacaVideo
        memoria={props.placaVideoMem}
        modelo={props.placaVideoModelo}
      />
    </div>
  );
}

import React from 'react';
import PlacaMae from './PlacaMae';

export default function Computador(props) {
  return (
    <div>
      <h2>Computador</h2>
      <h3>Gabinete: {props.pcGabinete}</h3>
      <h3>Cor: {props.pcCor}</h3>
      <hr />
      <PlacaMae
        pmSocket={props.pmSocket}
        pmMarca={props.pmMarca}
        procFrequencia={props.procFrequencia}
        procMarca={props.procMarca}
        fontePotencia={props.fontePotencia}
        fonteModelo={props.fonteModelo}
        memFrequencia={props.memFrequencia}
        memTamanho={props.memTamanho}
        placaVideoMem={props.placaVideoMem}
        placaVideoModelo={props.placaVideoModelo}
      />
    </div>
  );
}

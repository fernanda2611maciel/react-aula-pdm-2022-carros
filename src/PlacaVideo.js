import React from 'react';

export default function PlacaVideo(props) {
  return (
    <div>
      <h2>Placa de Vídeo</h2>
      <h3>Memoria: {props.memoria}</h3>
      <h3>Modelo: {props.modelo}</h3>
      <hr />
    </div>
  );
}

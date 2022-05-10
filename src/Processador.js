import React from 'react';
var Processador = (props) => {
  return (
    <div>
      <h2>Processador</h2>
      <h3>Frequencia: {props.frequencia}</h3>
      <h3>Marca: {props.marca}</h3>
      <hr />
    </div>
  );
};

export default Processador;

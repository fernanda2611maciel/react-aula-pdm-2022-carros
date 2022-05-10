import React from 'react';

export default function Fonte(props){

  return (<div>
        <h2>Fonte</h2>
        <h3>Fonte: {props.potencia}</h3>
        <h3>Modelo: {props.modelo}</h3>
        <hr />
     </div>);
}
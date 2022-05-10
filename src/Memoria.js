import React from 'react';
export default class Memoria extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div>
            <h2>Memória</h2>
            <h3>Frequencia: {this.props.frequencia}</h3>
            <h3>Tamanho: {this.props.tamanho}</h3>
            <hr />
          </div>);
  }
}
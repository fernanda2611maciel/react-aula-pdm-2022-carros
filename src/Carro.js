import React from 'react';
import Motor from './Motor';
import Roda from './Roda';
export default class Carro extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: 'red', fontSize: 36 }}>
          Meu Carro {this.props.modelo}
        </h2>
        <Motor potencia={this.props.potencia} />
        <Roda aro={this.props.aro} />
        <img
          style={{ width: 250 }}
          src="https://www.blogauto.com.br/wp-content/2013/06/ford-ka-europa-2008.jpg"
          alt="Ford Ka"
        />

        <h2>Nome: {this.props.nome}</h2>
      </div>
    );
  }
}

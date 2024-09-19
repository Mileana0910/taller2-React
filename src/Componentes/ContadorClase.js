import React, { Component } from "react";

class ContadorClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h2>{this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClase;

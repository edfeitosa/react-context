import React, { Component } from 'react';

import LinkButton from './components/molecules/LinkButton/linkButton';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null }
  }

  updateState = () => this.setState({ error: null });

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h1>Ocorreu um erro...</h1>
          <p>Deu ruim! Ocorreu um erro inesperado</p>
          <LinkButton executeFunction={this.updateState} />
        </>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
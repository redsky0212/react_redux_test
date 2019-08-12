import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const propTypes = {
  id: PropTypes.number
};

class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

App.propTypes = propTypes;

export default App;
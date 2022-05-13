import React from 'react';
import { PropTypes } from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputValue, onInputChange } = this.props;
    return (
      <label htmlFor="inputValue">
        Escolha sua Carta
        <input
          type="text"
          data-testid="name-filter"
          id="inputValue"
          value={ inputValue }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Input;

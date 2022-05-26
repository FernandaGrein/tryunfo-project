import React from 'react';
import { PropTypes } from 'prop-types';
import '../App.css';

class Input extends React.Component {
  render() {
    const { inputValue, onInputChange, selectRare } = this.props;
    return (
      <>
        <label className="inputsLabels" htmlFor="inputValue">
          Escolha sua Carta
          <input
            type="text"
            data-testid="name-filter"
            id="inputValue"
            value={ inputValue }
            onChange={ onInputChange }
          />
        </label>
        <label className="inputsLabels" htmlFor="selectRare">
          Escolha a raridade
          <select
            id="selectRare"
            data-testid="rare-filter"
            value={ selectRare }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="é um bar Comum">é um bar Comum</option>
            <option value="esse lugar é especial">esse lugar é especial</option>
            <option value="Imperdível">Imperdível</option>
          </select>
        </label>
      </>
    );
  }
}

Input.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  selectRare: PropTypes.string.isRequired,
};

export default Input;

import React from 'react';
import { PropTypes } from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputValue, onInputChange, selectRare } = this.props;
    return (
      <>
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
        <label htmlFor="selectRare">
          Escolha a raridade
          <select
            id="selectRare"
            data-testid="rare-filter"
            value={ selectRare }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">Muito raro</option>
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

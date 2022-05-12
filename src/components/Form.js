import React from 'react';
import { PropTypes } from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <p>Form Component</p>
        <label htmlFor="nameInput">
          Nome da Carta:
          <input
            value={ cardName }
            id="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição da Carta:
          <input
            id="cardDescription"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="firstAtt">
          Primeiro Atributo:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="secondAtt">
          Segundo Atributo:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="thirdAtt">
          Terceiro Atributo:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="imageInput">
          Image URL:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rareInput">
          qual a raridade da carta:
          <select
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="checkboxInput">
          Essa carta é um Super Trunfo?
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

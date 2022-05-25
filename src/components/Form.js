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
      hasTrunfo,
    } = this.props;
    return (
      <div className="inputsCss">
        <p>Crie as suas cartas!</p>
        <label className="inputs" htmlFor="nameInput">
          Nome do Bar:
          <input
            value={ cardName }
            id="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label className="inputs" htmlFor="descriptionInput">
          Descrição do Bar:
          <input
            id="cardDescription"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="inputs" htmlFor="firstAtt">
          Custo Benefício:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label className="inputs" htmlFor="secondAtt">
          Localização:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label className="inputs" htmlFor="thirdAtt">
          Ambiente:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label className="inputs" htmlFor="imageInput">
          Imagem do Bar:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label className="inputs" htmlFor="rareInput">
          qual à raridade desse Bar?
          <select
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">é um bar Comum</option>
            <option value="raro">esse lugar é especial</option>
            <option value="muito raro">Imperdível</option>
          </select>
        </label>
        <label className="inputs" htmlFor="checkboxInput">
          Essa carta é um Super Trunfo?
          {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            disabled={ hasTrunfo }
          />}

        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

import React from 'react';
import { PropTypes } from 'prop-types';
import '../App.css';

class CardSave extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCard,
    } = this.props;
    return (
      <section className="savedCard">
        <p>my card</p>
        <h4 data-testid="name-card">{cardName}</h4>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p>{cardDescription}</p>
        <p>{cardAttr1}</p>
        <p>{cardAttr2}</p>
        <p>{cardAttr3}</p>
        <section>{cardRare}</section>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        <button
          type="button"
          data-testid="delete-button"
          onClick={ () => deleteCard(cardName) }
        >
          Excluir
        </button>
      </section>
    );
  }
}
CardSave.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
export default CardSave;

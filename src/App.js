import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    onInputChange: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  changeSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const firstNum = parseInt(cardAttr1, 10);
    const secondNum = parseInt(cardAttr2, 10);
    const thirdNum = parseInt(cardAttr3, 10);
    const sumMax = 210;
    const maxN = 90;

    if (firstNum > maxN || firstNum < 0) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (secondNum > maxN || secondNum < 0) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (thirdNum > maxN || thirdNum < 0) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && firstNum + secondNum + thirdNum <= sumMax
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleChanges = ({ target }) => {
    const { id, value, type, checked } = target;
    this.setState({ [id]: type === 'checkbox' ? checked : value });

    this.setState({ [id]: value }, () => this.changeSaveButton());
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      savedCards } = this.state;

    const newCard = {
      nome: { cardName },
      descrição: { cardDescription },
      Atributos: `${cardAttr1}, ${cardAttr2}, ${cardAttr3}`,
      image: { cardImage },
    };
    const newArray = savedCards;
    newArray.push(newCard);
    // this.setState({ savedCards: newArray });

    this.setState({ cardName: '',
      onInputChange: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: newArray });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChanges }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } onInputChange={ this.handleChanges } />
      </div>
    );
  }
}

export default App;

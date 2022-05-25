import React from 'react';
import Card from './components/Card';
import CardSave from './components/CardSave';
import Form from './components/Form';
import Input from './components/Input';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    onInputChange: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    inputValue: '',
    selectRare: 'todas',
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

  deleteCard = (name) => {
    const { savedCards } = this.state;
    const findCard = savedCards.find((item) => item.cardName === name);
    if (findCard.cardTrunfo === 'on') {
      this.setState({ hasTrunfo: false });
    }
    const targetCard = savedCards.filter((elemnt) => elemnt.cardName !== name);
    this.setState({ savedCards: targetCard });
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardTrunfo,
      cardRare,
      savedCards } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
    };

    savedCards.push(newCard);

    this.setState({ cardName: '',
      onInputChange: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true });

    if (cardTrunfo === 'on') {
      this.setState({ hasTrunfo: true });
    }
  }

  render() {
    const { savedCards, inputValue, selectRare } = this.state;
    return (
      <div className="firstPage">
        <h1 className="title">Tryunfo</h1>
        <div className="formAndCard">
          <section className="formComponent">
            <Form
              { ...this.state }
              onInputChange={ this.handleChanges }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <Card { ...this.state } onInputChange={ this.handleChanges } />
        </div>
        <Input
          inputValue={ inputValue }
          onInputChange={ this.handleChanges }
          selectRare={ selectRare }
        />
        { savedCards.filter((card) => (selectRare === 'todas'
          ? savedCards : selectRare === card.cardRare))
          .filter((card) => card.cardName.includes(inputValue)).map((card) => (
            <CardSave
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardTrunfo={ card.cardTrunfo }
              deleteCard={ this.deleteCard }
            />))}
      </div>
    );
  }
}

export default App;

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
    onSaveButtonClick: false,

  };

  handleChanges = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.handleChanges } />
        <Card { ...this.state } onInputChange={ this.handleChanges } />
      </div>
    );
  }
}

export default App;

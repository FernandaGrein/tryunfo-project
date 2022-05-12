import React from 'react';

class NameInput extends React.Component {
  render() {
    return (
      <label htmlFor="nameInput">
        Nome da Carta:
        <input id="nameInput" type="text" data-testid="name-input" />
      </label>
    );
  }
}

export default NameInput;

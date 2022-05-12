import React from 'react';

class DescriptionInput extends React.Component {
  render() {
    return (
      <label htmlFor="descriptionInput">
        Descrição da Carta:
        <input id="descriptionInput" type="textarea" data-testid="description-input" />
      </label>
    );
  }
}

export default DescriptionInput;
